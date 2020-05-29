import http.server
import socketserver
import os
import ssl
#import fcntl
import sys, errno

PORT = 8888

prompts = [['55', '31', '14', '42', '96'],
            ['56', '95', '31', '14', '42'],
            ['95', '52', '31', '14', '46'],
            ['91', '55', '46', '12', '34'],
            ['95', '56', '11', '44', '32'],
            ['14', '52', '91', '45', '36'],
            ['92', '54', '11', '45', '36']]
'''
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
'''

def handle_counter():
    with open("counter.txt", "r+") as infile:
        f_content = infile.read()
        pos = int(str(f_content))
        infile.seek(0)
        return pos

def add_counter():
    with open("counter.txt", "r+") as infile:
        f_content = infile.read()
        pos = int(str(f_content))
        infile.seek(0)
        infile.truncate()
        infile.write(str(pos+1))


def check_id(id):
    with open("turk_ids.txt", "r+") as infile:
        ids = infile.readlines()

        if (str(id.decode())+'\n') in ids:
            return True
        else:
            return False


def write_id(id):
    with open("turk_ids.txt", "a") as infile:
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
        self.send_header("Content-type", "text")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()

        add_counter()


with socketserver.TCPServer(("", PORT), MTurkHandler) as httpd:
    print("serving at port", PORT)
    #httpd.socket = ssl.wrap_socket(httpd.socket, certfile='/etc/ssl/certs/langproc_socsci_uci_edu_cert.cer',
     #                              keyfile='/etc/ssl/private/langproc.key', server_side=True)
    httpd.serve_forever()