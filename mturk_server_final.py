import http.server
import socketserver
import os
import ssl
import fcntl

PORT = 8888

prompts = [['01', '12', '53', '65', '30'], ['46', '93', '74', '05', '82'], ['41', '95', '33', '60', '16'], ['35', '56', '21', '70', '63'],
           ['44', '02', '10', '66', '83'], ['81', '15', '94', '36', '23'], [
               '55', '22', '90', '03', '84'], ['43', '54', '61', '25', '00'],
           ['85', '26', '31', '42', '14'], ['75', '13', '24', '62', '51'], [
               '32', '73', '64', '96', '20'], ['45', '92', '71', '50', '06'],
           ['11', '76', '80', '04', '52'], ['34', '91', '72', '40', '86']]


# This will probably only work on Unix-like systems?
# Taken from ibex farm github.
def lock_and_open(filename, mode):
    f = open(filename, mode)
    fcntl.flock(f.fileno(), 2)
    return f


def unlock_and_close(f):
    # Apparently, unlocking prior to closing is unnecessary and can lead to data loss.
    #    if HAVE_FLOCK:
    #        fcntl.flock(f.fileno(), 8)
    f.close()


def handle_counter():
    with lock_and_open("counter.txt", "r+") as infile:
        f_content = infile.read()
        pos = int(str(f_content))
        infile.seek(0)
        infile.truncate()
        infile.write(str(pos+1))
        return pos


def check_id(id):
    with lock_and_open("turk_ids.txt", "r+") as infile:
        ids = infile.readlines()

        if (str(id.decode())+'\n') in ids:
            return True
        else:
            return False


def write_id(id):
    with lock_and_open("turk_ids.txt", "a") as infile:
        infile.write(str(id.decode()) + "\n")


class MTurkHandler(http.server.BaseHTTPRequestHandler):
    def do_POST(self):
        self.send_response(200)
        self.send_header("Content-type", "text")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()

        content_length = int(self.headers['Content-Length'])
        body = self.rfile.read(content_length)
        if not check_id(body):
            write_id(body)
            prompt_order = prompts[handle_counter() % 14]
            order = ','.join(prompt_order)
            self.wfile.write(order.encode())
        else:
            res = 'rejected'
            self.wfile.write(res.encode())

    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()


with socketserver.TCPServer(("", PORT), MTurkHandler) as httpd:
    print("serving at port", PORT)
    httpd.socket = ssl.wrap_socket(httpd.socket, certfile='/etc/ssl/certs/langproc_socsci_uci_edu_cert.cer',
                                   keyfile='/etc/ssl/private/langproc.key', server_side=True)
    httpd.serve_forever()
