

function make_slides(f) {
  var slides = {};

  slides.i0 = slide({
    name: "i0",
    start: function () {
      exp.startT = Date.now();
    }
  });

  

  slides.instructions = slide({
    name: "instructions",
    button: function () {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  auth_dict =
  {
    '0': {
      '0': "Hello Aunt Sharon,How are you doing? I'm so sorry that it's been so long since we've talked. Let's catch up on the phone soon. Now, the reason I haven't been in touch is because I've had a hard time with my financial situation, and unfortunately might have to quit college. You know how I had that sales manager job? Well, they went out of business so now I'm out of the job, and I haven't been able to find a new one yet. I would be so disappointed in myself if I had to quit college, especially because you know my dream is to be a vet tech. I can't continue paying my rent here if I don't come up with some money soon. If you could lend me about $500, it would mean the world to me because I'd have another month to look for a job, and I wouldn't have to quit college! If you can, just send it to my Paypal email. Thanks so much for reading this and I hope you'll consider loaning me the money. Love you Aunt Sharon!",
      '1': "To Mr. Brown whomever it may concern,I hope you are well, sir, and I pray that you will read this e-mail to let me explain myself for being late to the meeting yesterday. I was tossing and turning all night from the stress of possibly losing the best job I've ever had. If there's anything at all I can do to make it up to you, sir, I will do it. I will show you how much dedication I have for this company. The e-mail you sent me yesterday, asking if I think this company is a joke, could not be farther from the truth. I will put forth all of my time and energy to prove to you, and to prove to everyone else in this company, that I don't see this company as a joke. I want to show you how truly dedicated I am. Please, just give me another chance, and I will make it up to you and to this company.Sincerely,Ashleigh",
      '2': "Hi mom,Please don't worry about me. I know you haven't heard from me since yesterday and I'm going to explain to you why. Please just don't freak out about this! I'm writing you an e-mail because my voice is too shaky from the pain and stress I've been through today. Earlier today, on the way to work this morning, while on the freeway I slid into the median, where my car got out of control, and crashed into a tree. The roads were very slippery from the snow and hadn't been salted yet since it was so early in the morning, around 4am. Before you worry, I am okay and as far as we know, I don't have any brain damage, but I did have a broken leg from the accident. The doctors have said that I'm likely to make a full recovery, which is great news, because I almost died from the crash and they said I should be very thankful that more damage hasn't been done. I will call you later when I'm ready to talk. Love you, mom!",
      '3': "To whomever it may concern,Unfortunately, I'm going to have to reschedule that important meeting that we had scheduled for today at 3:30. The meeting will now be this Friday at 3:30, instead of today, so you all can go home early instead of staying after work for the meeting today. I know this meeting was important but my son got expelled from school today for missing too many classes, and I need to speak with the Principal of his school and my wife, and figure out what to do next. Right now, I need to be with my family and as I always tell you all, family should always come first. Now, I told you all what happened because I didn't want you to worry about why the meeting was re-scheduled because I know that isn't something I would normally do. Take care, and I'll see you all at work on Friday!",
      '4': "Dear Jessica,I'm so sorry that I'm sending you an e-mail instead of a proper phone call, but honestly I don't know how I can speak the words out loud. This morning on the way to work, I was on an icy road and although I was slowed down, there was another car who was driving too fast and crashed right into the back of your car. I think the car might totaled, which breaks my heart, because you trusted me to take excellent care of your car. I completely betrayed your trust by crashing your expensive car. Don't worry, Jessica, I'll help you call the insurance company and see what we can do about a possible repair or replacement. Unfortunately, I don't have much money to my name so I can't pay you for the car, but we will get this figured out! I promise! I'm so sorry, and I love you so much, and I hope you can forgive me.Love Your Friend,Ashleigh",
      '5': 'To whomever it may concern,I\'m selling my Samsung Galaxy S10+, which is in "like new" condition but with just a couple light scratches on the exterior. The actual phone works like new and is in excellent condition. If you are interested in buying the phone, please e-mail me. I take payment through Paypal or Venmo and will ship the phone as soon as the payment goes through. As I said, any damage on the phone is superficial only and it works great. Why pay $650 for a brand new phone when you could just buy mine for a lot less? I\'m selling the phone for $400 or best offer, but if you want it, I would hurry because this is going to go quick! My phone number and e-mail are at the bottom of this e-mail and I\'ll be home all day today, so it\'s first come first serve!Thanks, happy buying!',
      '6': "Hi mom,I'm emailing you from my college dorm right now, and I was just informed that my school tuition loan is on stand-by for right now. I inquired about it and it turns out that all I need is to give them my proof of income, which is in that savings account you made for me. Now, I just need to log in so I can show the financial administrator my bank statements. That is all I need now for my school loans to be approved. If you could just e-mail or text me, both the username and password on the savings account, that would be all I'd need. It is important that I get that information as soon as possible, so that I'll get my school loan as quick as possible. I missed the e-mail about my loan being on stand-by earlier last month, so it's very important that you send that info to me as soon as you see this! Thanks, mom. Love you!"
    },
    '1': {
      '0': 'Hi Aunt Kathy! I know it has been awhile, but I have been busy trying to get ahead with work and school. It is extremely busy, and I have been having difficulties with my financial aid because of my dad. It is unfortunate because the way the financial aid works, it appears that my family income is substantially higher even though they are divorced and he does not support me. Because of that, I have hit a short term cash crunch as I seek a private loan to bridge the gap on tuition for the upcoming semester. I need half of the tuition in 2 weeks in order to not be dropped from my classes for the term, and I am not sure where else to turn. Would you be able to give me a loan for the outstanding balance and I will repay you back monthly over the next 2 years as I am able to get the money saved? Thank you!',
      '1': 'Hi team, my deepest apologies for the tardiness to the meeting today. There was a large scale funeral procession on the way in to the office that literally shut down the 10 blocks surrounding our headquarters. I understand that being prompt and attending meetings on time and in full is not only requisite to the job, but it is also requisite to performance in the role you put me in. I have already taken steps to remedy what I missed by not being available at the beginning of the meeting, and it will absolutely not happen again. I trust that when reading this, you will factor in my exceptional performance over the past few years, and understand that my word is representative when I say that I will not let it happen again. Thank you, and I look forward to continued success with each of you!',
      '2': 'Hi mom, sorry I missed dinner the other night. As you know we live in Southern California and people tend to panic when a little bit of precipitation happens. I was going to the grocery store to pick up a bottle of wine when people started panicking at the sight of a puddle on the road and swerving to avoid it. My windshield wipers were stuck and I was trying to fix them when I noticed the bottleneck and hit the brakes, but the water on the ground meant that the tires were not able to fully stop in time to avoid needing to swerve off the road. I was extremely lucky in that there were no trees or people near me, and I left with a few bumps and bruises but if there was anything in the road it could have been a far different story!',
      '3': 'Hi all, my deepest apologies for the late notice but it has come to my attention that I will need to push back our team meeting this afternoon. I understand that the way I framed the meeting represented the importance to both myself and the company, and rest assured it is still imperative that we have a team discussion to walk through the topics in the agenda. That said, there is unfortunately an unforeseen emergency that requires my attention prior to me being able to attend the meeting with the team. I hope to be able to reschedule the meeting in the next day or two, however it is pending my ability to remedy the issue at hand. Thank you for your patience and continued hard work as I work through this issue.',
      '4': "First of all, I don't even know where to start. I will start with my insurance will cover any damages in full, if the party at fault does not have the insurance to cover the accident. With that said, it is my firm belief that the damages are solely their fault in full and the accident investigation will support my belief. I understand this car was your first big purchase after you were promoted and it has substantial sentimental value for you, and for that I am extremely sorry. I was extremely cautious when parking it, and parked away from the rest of the cars in the lot, but unfortunately that meant that cars were passing by it at a faster speed and the car that clipped you was going faster than otherwise. I will make sure that all damages are covered and we are good to go!",
      '5': 'I have recently fallen on hard times and unfortunately am being forced to sell my favorite tablet in order to help cover living expenses. I have an iPad Pro that was top of the line when I bought it a year ago and remains in extremely good shape and ready for a new home. It has the highest available processor, and the speed and screen size remain unmatched in the market today even though it is a year later. My loss is your gain as I have reduced the price to market value for a slightly lesser model, in an effort to offload this as soon as possible to cover some outstanding bills. I am extremely motivated to sell, please feel free to send all reasonable offers I need to get the cash as soon as possible.',
      '6': "Mom, remember when I was younger and we had to set up my account in your name because the bank would not let a minor have the primary on the credit card? Well now I want to make a purchase in my name, but the bank is refusing to let me have custody of the account since your name is still on it. I want to make a large purchase, and in the end I don't want you to be liable for the expense so can you please send me the password so I can start the paperwork to transition the account from your name and mine to just mine? I am 22 now and am ready for the responsibility, thank you for putting your name on the account when I was younger and I want to be an adult and take responsibility for my charges."
    },
    '2': {
      '0': "Hi Jack it's me I was just wanted to see what you were up to lately I haven't seen you since the big reunions how are Mary and the kids? I've been doing well in school but lately I've had a really difficult time with tuition I'd like to take you up on your offer for a personal loan to help pay for some of my school supplies. You gave me some great advice at the reunions and I wanted to tell you how grateful I am I took you up on your advice and I did get a small part time job that would allow me to earn a little bit of money while I'm in school. So I have a proposal for you if you're willing to make the loan to help me out with school supplies in my tuition I'll be able to start making payments while I'm still in school that we can increase after I've graduated.",
      '1': "Good morning gentleman. First I'd like to take the opportunity to sincerely apologize for my late arrival at this morning this morning's meeting. Despite the unforeseen circumstances I do have a fairly interesting story to share and a valuable lesson to tell you about that I learned today. I was just about to enter the I-95 exit ramp when I noticed a car pulled over on the shoulder. I pulled up next to the car and started to roll down my window when I noticed a woman was reclined in the backseat with the door open I carefully pulled over to see if she needed help. That's when I noticed she was in the midst of giving birth. Even though I have almost no medical training she assured me that she and her husband had been through classes and she could help me until the paramedics arrived. I called 911 unfortunately I didn't have to play paramedics this morning but I did get to witness a beautiful live birth right on the shoulder of I-95.",
      '2': "Mom you are never going to believe what just happened to me! I was so scared! I'm so glad everything's okay, but I just need to calm down. I was driving along the interstate and I was just about to go through the tunnel. I had stopped at the light which is a long light as you know, and I was busy adjusting the stereo. It was raining very hard outside and my car was fogging up so I took an extra few minutes to wipe off the inside of the windshield. I sat there a few minutes peacefully enjoying the jazz music and I noticed the green reflection of the light on the dashboard. Normally I would just press the gas pedal and go because I'm in a hurry, but instead I hesitated and I looked to the left. I am so happy I did this. I am so happy that I wasn't in any hurry today. Because the moment I looked up a huge log truck came barreling by, clipping my front bumper. It had run the red light. Needless to say I'm okay, A little shaken up, but I'd love you and just wanted to let you know.",
      '3': 'Hi team, I\'ve recently checked our data from this quarter and it looks like everything\'s on target just like we planned. I wanted to take a moment and thank you guys for doing such a great job, working so hard this past quarter, despite all the challenges and setbacks we\'ve experienced. So I was thinking this afternoon, "What\'s a great way to reward the guys for all their hard work?" So, I decided that I would postpone our meeting for this afternoon. Instead I\'m taking everyone to the outlet mall for a shopping spree on the corporate credit card. Afterwards, we\'ll all enjoy a four-course dinner at an upscale restaurant overlooking the riverfront. I hope everyone will have a great time. I\'m so happy that I get to reward the entire team, and spend some time with the people who helped make this company what it is today. Please RSVP to this email if you can\'t make it. Cheers!',
      '4': "Hi Terry, it's me. Unfortunately, I'm writing to you today because I have bad news. I'm extremely embarrassed to admit that I've been very Reckless with my behavior lately. I'll just get right to the point. Last night I borrowed your Tesla. That's right, your baby, your favorite, the great love of your life. I'm very embarrassed to admit that I went out and had a lot to drink last night. For whatever irresponsible reason, when I returned home I saw your shiny red baby parked in the driveway. I had a spare key so without thinking, I ran straight over, hopped in the seat and started barreling down our street. Well, my little Adventure came to an abrupt end as I hit the gate to the complex. So it is with great sympathy that I need to let you know that your Tesla is no longer. Since the car was wrapped completely around the fence and gate, my insurance adjuster informed me that it was totaled. I'm extremely extremely sorry, and I promise to repay every penny. I left the keys to my car on your front porch. Please feel free to drive it until I'm able to replace your baby.",
      '5': "Hi, I just wanted to let you know that I have a fantastic, yet old, computer that I am dying to get rid of. However, there are a few things you should know first. The computer itself is not functional in its current state. This is why I've decided to sell it for parts. Additionally, you'll be happy to know that my computer is going for the low, low price of $3.50. That's right, you two can have the luxury of a previously owned, horribly conditioned, archaic laptop computer. I bet you're wondering why I'm selling the computer. In this past year I've become a minimalist but also an environmentalist. In an effort to avoid recycling something that could be refurbished, I've decided to sell it but for a low price so that I definitely find a good home.",
      '6': "Mom, it is very important that you listen carefully to what I'm about to tell you. I am currently in an unknown location, being held against my will. My captors have given me only one instruction. I need to transfer money from our joint account into their offshore bank account by midnight tonight or they will kill me. Please Mom, these men are serious. I need to know the password for the account and I will be able to make the wire transfer from my location with their help. If you can just do this one thing, they promised to let me go and never bother our family again. I love you so much, and I'm very sorry this is happening. I do not know these people where they came from, or why they have this motive. I would really appreciate your help, and hopefully we will be together soon safely- and happily."
    },
    '3': {
      '0': "hey uncle frank. i got your message about my cousin Marissa. i am so proud of her. I have a favor to ask and it brings me no joy to do this. i need to borrow some money two thousand and eighty four dollars to be exact. I know its alot especially this time of year id ask my mom but you know how their financial situation is. Do you remember my roommate tim? well we have that situation worked out where i borrow his care if i help with the up keep and gas? 2 days ago i got into a accident. it didn't look that bad but with a tow truck and mechanic expenses its gotten to be expensive. i have only a little bit of the money and i wouldn't ask you if i didn't need it. i can pay you back after the holidays. we can come up with a payment plan. i am really sorry. I love you uncle frank.",
      '1': 'dear Mr smith. as you are aware i was late this morning for the important meeting with  the top-level executives in the company this morning. I am writing you this not to pad my job with excuses to break my fall. i emailing you to just give a explanation. I respect this company and the work we do here. I would never do something that would make me late intentionally. when i left my house this morning i was on time and ready to take on the meeting. when i was more then halfway there just after the turnpike i surcame to a flat tire. i pulled over and changed it as fast as i could but unfortunately i got up in the morning traffic i normally avoid. I am sorry mr smith. this was not my intention. i can promise you that i will make steps that this will never happen again.',
      '2': "Hey mom! how are you? i am sorry i have missed your calls and you haven't heard from me. i would have called sooner but i didn't want to alarm you i know it is a very long drive. on Monday i had a accident and hit another car. i just want to let you know i am fine just some bumps and bruises. i was coming home from work after my night shift driving down interstate 95. i was a little tired and my mind was drifting. i didn't see a big patch of ice in the road and when my tires hit it i lost traction. i slid into oncoming traffic. luckily the other car was able to swerve and i passed by them and slid into a ditch. My car is in pretty bad shape but once again i am fine. give me a call mom when you get this i love you.",
      '3': 'Dear colleagues, I have some upsetting news due to some unfortunate events. I have to push back our meeting. I know this is very short notice and the timing is horrible, but I have had a late shipment come into the loading dock. As you know, as warehouse supervisor, standard protocol requires me to stay and do inventory on the stock before I can put it into our supply system. This is to prevent theft, being shortchanged by our manufacturer, and other troublesome events. The late shipment is due to the holiday season and the mail and shipment companies being overloaded. The total time needed for the inventory will take two hours. I have some extra help so maybe a little sooner than that. I am sorry for the inconvenience. I will be in touch soon',
      '4': "hey Todd. I know you you are pretty upset about me crashing you car and i know you deserve to be. i am really upset that i did this to you i have always seen you as a really great friend. i know you didn't see the accident happen and i just wanted to let you know what happened i don't want to give you any excuses i just would want to know if the shoe was on the other foot.i was driving down highway 40 and it was darker then usual. I wasn't speeding i wasn't drinking i was showboating in your favorite car. a deer jumped out from the right hand side of the road. it scared me and i went to slam on the brakes. when i did the car went into a spin and smacked a telephone pole.  i am sorry the frame is bent and it is totaled. i want to pay for it. please me message me so i can figure out how.",
      '5': 'hello thank you for responding. yes the phone is still for sale. and i am still very motivated to sell it. it is a brand new iphone. It is the model that was released eight months ago. i have had it but really only used it for work. it works great as far as the functions on the inside. it is very fast loading. it has a ton of room for applications games, pictures, and music. I also have a few cases for it and a brand new car and wall charger. i am selling it for a much lower price then most because everything the internals are satisfactory. there is a crack in the screen. it isnt so bad that it cant be used it is just not satisfactory for my needs. i have looked into fixing it and it would only cost a hundred dollars.',
      '6': "hey mom i need to ask you a favor i need your google password. i have some accounts with some older social media websites and there are a lot of pictures i want of me and all my friends from back when we were teenagers and i cant remember the passwords. all the accounts are all linked o your google account so when i go to cant remember password it wants to send the recovery link to you. i didn't just want to try to login to you google account without asking you. i know it is kind of a weird request its just nowadays all these sites take security so seriously. it will only take a few seconds and i promise to only look at the emails i need that will be sent from the social media websites. thanks mom."
    },
    '4': {
      '0': "Hello My relative. I would like to request some money from you if thats ok? I will be needing about eight thousand. I will need it for a car I've been wanting to buy so I will not be reliant on uber. You know how expensive that can be so eight thousand would help a bunch! I'd be greatful from the very bottom of my heart If i can get it. And I promise to pay you back. Id honestly Need it by sunday and you can transfer it into my bank account. Just message me for my details if you decide to help me out. I am looking forward to seeing you again at christmas time. I know we will have such a fun time with everyone there. If it is more convenient for you can give it to me then though! Thanks for reading my message!",
      '1': 'I know I  am late but you honestly would not believe what had happened to me! It was such a shock. so Here is my story. Well first thing first I was dead set on making my way into work when a deer ran infront of my vehicle and I almost hit it! BUt I didnt I came to a stop at the right moment but the deer stayed in front of my car. I beeped at it but it did not move. I then noticed movement behind it . It had a baby behind it. But the baby was on the ground It would not stand up. I then noticed It was bleeding a bit. Being the kind individual I am I looked up numbers for places that help wildlife. I then called in. And requested for someone to come out and help the poor fawn. After a while of waiting Somebody came down and took the fawn away with the mother. You see so thats why I was late.',
      '2': "Hey mom! I know this my worry you but  I just got into an horrible accident! I am such a klutz but I thankfully survived too bad my car was totalled. I was driving on my way to jessica's house to see her son's third birthday party. And I was crossing an intersection when a run away truck zoomed through a red light and hit my car sending it swerving over onto its side into a grassy area. I was absolutely terrified when it happened. but before I knew it I had completely blacked out. but I assume while I was someone had called an ambulance and I had gotten taken to the hospital with quite a few injuries. It was absolutely crazy. but I am here! Thank god for that. Your little girl wouldnt leave this planet so easily",
      '3': "Hey everyone I know this may come as a surprise but I have to postpone a meeting for another time. It is because I will have to take the rest of the day off. I know it is an important meeting and all but I have to head into the hospital later today. I have been having some major pains within my body I have to get checked out as I am afraid it could be something serious. Please excuse this for a day. WE can have the meeting tomorrow. And I promise to make it all up to You all in the meeting. I will order pizza and drinks for us all. And tell you how my hospital visit went. Once again I hope you don't mind and see you all tomorrow where we all be able to eat together. Have a great day you all.",
      '4': "I will immediately call them being frantic and feeling anxious and guilty about it. Id be as honest as possible when explaining to them what happened. I'd tell offer to make payments on it to make sure they get something out of a mistake I made. Id do my best to make it up to them with allowing them to ask for alot of favors. Id do everything in my power to pay them back. If the car can be repaired id then offer to help pay for that. Id apologize 100 times over . Id do anything to earn their forgiveness for what happened. I know whats its like to have to go without a car for a while . Id probably pay for their transportaion if to uber from place to place. Id just hope they will be able to forgive me after that.",
      '5': 'Id just go to a pawn shop and see what i can get for it. If not much then id make a craig list add for it and make an honest  description and see  what i am able to get from it with that. If not much then Id lie a bit and spruce up the description and sell it for a bit more money through that. Anything to get it sold and get the money I need.  I would then mail it off to them wherever they would live and Hopefully they wont notice how broken it is for a while then I could block their number/email whatevger they used to contact me through and stuff. I would then do whatever I needed to do with the money. After it is sold Id be happy to have gotten rid of it completely and be happy my plan had worked even if its evil.',
      '6': "I'd just tell her straight up I need the password to it. Me and my mom are close. Im sure she will give it to me if i explain my reasoning for it. At least Id hope she would. Shes pretty nice and I let her into my accounts sometimes if she really wanted me to. She is my mom so she already knows literally everything about me. And shes not a very private person.  so I dont see why she would say no. She trusts me. She raised me right so she knows I wouldnt do anything devious or mischevious.  I believe with that AI can easily get acess to her accounts . but I guess it would depened on the specific acccount it is. However I do believe no account would be really too much at least I hope it wont be to be honest."
    },
    '5': {
      '0': "Hey Uncle Herman. Hope life is treating you well, because here we are again. I know that I said last time would be, well, the last time. Life hasn't been treating me so well. Work is sparse, and Jess conditions aren't getting better. I am having a lot of trouble keeping up with the bills especially with all the time she has been taking off from work. If there is any money I could borrow, I would appreciate it. You know I will get it back to you the best I can. I have a $1000 payment due on the first. If I really cut it close on groceries I can make about half of it, any amount would help me. Get back to me when you can, or if you don't want to talk about it just send the check to the same place as last time. Im really sorry to ask again, and hope to see you soon either way.kind regards,T",
      '1': 'Allen,I am so sorry that I am late already. I know today was important. I am on my way soon if I can still do anything when I get in. Jess had to leave early for work this morning so I was in charge of the boys. I thought we were going to be fine. Everything was running smoothly and then when I went to get the boys to put them in the car Oliver told me he had swallowed a penny. I called the Dr real quick and they said that can actually be really dangerous on rare occasions, they gave me some symptoms and I went along my day. By time we got Logan to school, Oliver was just about none stop screaming in the back seat. I ended taking him to the ER and found out the penny was dissolving in his stomach and causing a reaction. I have been here with him while they get it out and treat him. He will be fine but has to stay for a while. Jess just came to relieve me and I will be in as soon as possible. again I am so sorry.Kind Regards,T',
      '2': "Mom,I am sorry to worry you, I know you haven't been able to get in contact with me. I am in the hospital now recovering from a terrible car accident. It was bad, but please don't worry too much. I am recovering fine, and you can come visit soon if you want. I was leaving The shop at Herman's the other day. I went down the road by the pond that guy built himself. Someone pulled out from that stupid stop sign too far to check for cars. I had to swerve at the last minute to not run into him, but it was a little slippery and my car started to spin. A car coming the opposite direction ran into me and pinned my car between his and a tree. Of course it was the driver side right where I was sitting the tree hit. I had one surgery already, I got some metal in me now. The dr say I should make a good recovery.Love alwaysT",
      '3': "To my team,I am going to have to push back our meeting that was scheduled for today. Allen Sr is in town and Jr is throwing a fit. He wasn't supposed to come back till next weekend, but there was terrible weather in Florida for the rest of the week so he came early. He hasn't been to visit yet. Jr asked me to go down to the old building to clear it out and get it ready for his dads visit. Jr and I will be there all night and most of the day tomorrow. We can try to communicate through emails some of the topics we had planned to discuss. Please keep working on the temple job, and when you are not busy on that make sure the warehouse is being inventoried. We will go over everything else when I get back, and discuss the new warehouse setup once we a detailed list of what there actually is back there.",
      '4': "Jason,I am so sorry to have to tell you this. I really want you to breathe a little before you read any further, and remember all the things we have been through, and all the times I had your back. I crashed the BMW. I really am sorry and so embarrassed. I know your good with cars, but I don't think anyone is fixing this. It was my own stupid fault man. I went right through a red light. I was so excited for tonight and I just wasn't paying attention. Someone coming down the cross street couldn't stop in time. no one got too hurt. We are both at the hospital now. They towed the car down to Ron's. I don't think any of us are going to fix it, but that is where it is if you want to go see it. I just can't apologize enough. I don't have the money to replace it, but lets talk soon and I promise I will do what I can to make it up to you.",
      '5': "I have a tablet for sale. It is not the best tablet obviously looking at the picture. I do have a lot of accessories that go with it. I have a case for it, and some extra screen protectors, even a decent pair of earbuds I can throw in. It has been a great phone to me. I can't promise too much with it. The honest truth is that it will need some work to whoever buys it. I could really use any money I could get for it. It was my sons tablet for playing games on. I was thinking if anyone was interested, I could throw in his google play account with all his games on it. He doesn't play most of them anymore, at least not on that account. He has quite a bit of progress on Mine craft and Roblox both. His prized possession on there was his call of duty account. I don't know a lot about it you would have to talk to him. If there are any gamers out there, I know he put a lot of work into all these games, maybe they are worth something to you too.",
      '6': "Mom,I need the password to the paypal account. I have some bills coming up and I could use to pull some money out of it. I lost the password somewhere, you know me. I am sorry to bother you. Honestly I was also hoping to pull the money out and be able to replace it before you knew. I have looked everywhere for the password though and I just can't find it or remember it. The bill is due tommorrow and If I don't put it through soon it wont go through in time. I really need to take it from the paypal so I can have it move quickly. If you can get back to me as soon as possible. I know I promised I would stop taking so much from the account, but times have been so tough, and I am already behind on so many other bills."
    },
    '6': {
      '0': "Hey Aunt Esme.  I'm sorry to do this via email, but I haven't been able to reach your phone, and I know your business email gets checked hourly.  I hate to ask ANYONE for money, but especially you after everything you've done for our family.  But, Dad fell down and hurt himself pretty bad at work, the insurance won't cover the surgery needed to fix his back.  It's an emergency situation, and they said that they need to do it immediately to prevent permanent damage to him. I have already raised a good portion of the money from my own bank account, and friends, but we're still short $3,000.  The doctor will not start the surgery without it.  If at all possible, you have my venmo, please Aunt Esme!  I'll do everything in my power to pay it back to you as soon as possible, but this is about my dad's future.  I need your help.Love,Your Nephew.",
      '1': 'Honored executives, I don\'t know how best to start.  I have always been told that making an apology and then saying "but" negates the entire apology.  But I\'m going to need to do it anyway, as desperate as the situation is.  I am terribly sorry that your time has been wasted waiting for me to show up, but I assure you, I did everything in my power to arrive on time.  There was a massive holdup about 5 miles away.  It didn\'t happen until I was already on the highway, already committed with no easy way to turn around.  It looked like a pretty big pileup happened, I didn\'t have time to stop and watch because I was rushing to get here as soon as possible.  I should still have left with enough time to get here, and I normally do, but I got held up at home helping my kids get ready for school.  I am so terribly sorry, and this is on my head, but I hope you can at least understand the circumstances and see it in your heart to let me keep my job here.',
      '2': "Hi Mom.  Well, I know you get very upset when something bad happens to me out of my control, so I'm going to tell you some bad news right now.  Before we go on, yes, I'm not in great shape, I was in a car accident.  I was on the highway at night, a drunk driver came out of NOWHERE and smashed into me.  He sideswiped me good, the Kia Optima is totaled, and I'm still recovering from the damage it did to me.  Thankfully, there were some good folks around who called the police, checked on me, made sure I was alright, one of them even stayed at the hospital until Dad got here just so I wasn't alone.  It was a near miss, and I don't want to scare you, but I always try to be honest, things could have ended a lot worse.  I'm going to be holed up at Holy Name Hospital a few days, I can explain a little better in person, but this was the simplest, fastest way to let you know since you never answer your phone.  I love you, I'm safe, I'm going to be ok.",
      '3': "Hello there co-workers and friends!  I'm sorry this is short notice, I know we had a meeting today in the green room at 6:00 PM.  I unfortunately had some personal things come up and need to cancel.  Your time is very valuable to me, and I only do this because there is absolutely no other option I have here.  I'm going to look to reschedule it until 7:30 PM.  That should give me enough time to wrap up what just came up and get back here to talk to you about the harassment claims going on in this company.  I am taking this issue incredibly serious, and I am setting aside as much time as possible to deal with it when I return, you will have my ear until you feel your concerns have been heard.  We take this very seriously, and we will do everything we can to address it, I just hope you aren't too upset I need to push it back.",
      '4': "Hey Tim.  I hate to do this over email, but I admit, I am too cowardly to do it in person right now.  I'm sending this to give you time to cool off before we talk about the situation.  I must first say it is entirely my fault that I got into an accident in your car.  Some kid ran out into the street on New Milford Ave, I swerved to avoid him, and your beautiful camaro got totaled right into a pole on the side of the road.  If I had been paying even slightly more attention, I might have noticed the ball roll into the street and possibly been able to stop.  I don't know what else to say other than I'm terribly sorry, and I will do everything I can to buy you a new one, even if I need to sell my house and move into an apartment or something.  I don't know, we'll figure it out together.  I love you, and I hope you don't hate me forever.",
      '5': "Hello Craigslist buyers.  I am selling a Kindle Fire Tablet.  The retail price for one at the moment is $90.  I find I no longer have use for mine, and there are only one or two problems with it, so I am looking to offload it onto someone else!  So, the screen is still perfectly clear, I also just got done swabbing it down with alcohol and screen cleaner to make it look new and pristine.  One of the issues is, the button to turn it on sometimes sticks, sometimes you have to give it a nice whack against the floor to get it to turn on.  The other issue is that the memory card is broken.  Those two things are not major, and easily reparable, I have upgraded to a different tablet, and I don't think it's worth my time or money to repair.  So, I will sell it for $40, $50 off new retail of this thing, all you need to do is buy a microSD card which is just a few bucks and the tablet will be as good as new minus the power button issue.  It's a great buy!",
      '6': "Hey Mom, you know how you always ask me what are some hot buys on Amazon?  Well, I was going to add a bunch of stuff to your cart so you could see, but unfortunately, I don't have your login info.  I know you hate getting links in the email, so I think this is probably the best way for me to do it.  If you give me your login, Ill fix up your account, put your new address in there, and take care of the account I set up for you to get it all running smoothly.  It shouldn't take long, and if you really want, can change the password right after I finish.  Can you let me know what it is so I can get your wishlist set up, as well as your address and phone number and such?  It's very important to have everything going so the Christmas shopping you're about to do doesn't get too impacted."
    },
    '7': {
      '0': "Hey bro. So as you might have guessed, your little bro is in trouble again. No not that kind. I just got into some financial troubles because i was laid off recently. i didn't see it coming and buying that new car was a mistake. maybe i should've gotten a used one, i don't know really. anyway. i have some interviews lined up already and i'm applying to more jobs next week. i'm applying as many i can find, but you know how it is. meanwhile, my savings is dwindling fast. my guess is that it will probably go to 0 within 2 months. and if i don't find a replacement job before that, i'm going to be homeless. well, not really homeless, i can sell the car but i still owe money on it, and not sure what i'll have left over. so i was wondering if you can help me out. it seems like i'm always asking you for the help. it was always like that ever since we were little. hope you can come through this time too, man.",
      '1': "Dear Mr Boss, I just wanted to let you know I am on my way to the meeting as we speak. I had to be in an emergency room helping out a neighbor get treatment. Apparently my neighbor has some kind of rare disease that gives him seizures, and apparently he was on some kind of medication for it. But it seems something he ate different or some other medication caused him to pass out. His daughter, who is 9 years old, came to my door crying uncontrollably. She was shaking all over because she's the only one at home and she had no idea what to do. And she always trusted me since she came over for the pool party last year when my daughter had it. It's a nice family but the mother has left and it's just the dad and the daughter. I rushed to her house and found the dad passed out on the kitchen floor next to a half made PB&J sandwich. I called 911 and the EMTs came and took him to the ER. But I  couldn't just leave the 9 year child at home by herself after all this. So I drove her to the ER behind the ambulance, and waited for the doctor to treat her dad. He's ok now, and they're back home. And I'm rushing to the meeting as we speak. I'll see you all soon. My sincere apologies.",
      '2': "Hey mom. I know you heard. Yes, I got into an accident. And yes, it damn near killed me. Totaled the car. Let me explain so you don't worry. I am a O.K. OK? So yesterday, I was pulling out of the school entrance in the back near the sign. You know what I'm talking about? Anyway i didn't really pay attention to who was coming down the hill from the left. And apparently this drunken jerk was fleeing from something or someone. Just as I was pulling out the entrance, this guy came out of nowhere doing probably 80 miles an hour on the downhill, and plowed right into the left back seat towards the tire. That sent me rolling down the hill for, I don't know, maybe like 30 ft or so? I had my seat belt on, otherwise, I would probably be dead by now. But all in all, I'm OK. I just got out of the ER. And NO need to drive 500 miles or fly here, mom. I'm OK. Doctors said so. Don't worry, and I'll see next month for Thanskgiving. And yes, I am coming.",
      '3': "Dear all. It appears someone somewhere has bad arithmetic in our department. The last earnings report had a very serious error that affected the budget for our department and it needs to be fixed NOW. It should've been fixed the day before yesterday according to the Vice president. So it will be fixed, and it will be fixed today. And meanwhile, the meeting scheduled for the later this evening has been postponed until further notified. This error has caused a lot losses, and I have been given explicit instruction from the VP to identify the source of the error, and deal with it myself personally. if I don't, I have been informed that he will fire the individual, and then demote me.  As you can all see, this is a serious problem for our department, and we should plan for the worst, ie., termination of the employment of the individual(s) responsible, and perhaps even those who might have been aware of the negligence. Further instructions will follow.",
      '4': "Hey man. I don't even know where I'm going to start. I've always been an idiot. You know that. I've always been pretty reckless you know that too. And you know how careless I am. Better than anyone. Even better than me. Which is WHY i love you, man. What kind of insurance do you have one this car anyway? What happens if it's totaled? Now don't be upset. No need for panick. Because you HAVE insurance, right? This was not even my fault. I was jack-knifed by this crazy dude who ran the red light. But it appears he didn't insurance, so either your insurance pays for it, or I pay for it. and... I don't have money. I'm unemployed man, why did you think I had to borrow your car? Now I now you wish I was dead. I understand. I'll make it up to you. Once I find a job, and get settled, I will buy you the same make and model. I swear. Meanwhile, you might have to file the report saying the car is totaled. Not sure how this is going to go down. But really I can't say how sorry I am.",
      '5': "Almost brand new smartphone for sale. Pros: It's the top of the line released this year. It's got the latest CPU, GPU, and huge storage and room for more with the sd card. It has a tons of movies loaded on to the sd car already. That's about 60 gig of hollywood movies. OK, they're ripped and compressed, so it will not be exactly HD DVD quality, but very close. It's so convenient to watch movies on your phone while riding in public transportation. Just the movies alone will cost anyone looking to buy such thing hefty money. And I'm including it for free with the phone. I paid 750 for it early this year. And I'm only asking 500 for it. Cons: I dropped it a few times on concrete while waiting for the bus. Ok, I dropped it more than a few times, but that's not the point is it? I'm just being honest so you know I'm a honest person not trying to rip you off. So the frame has more than afew dings on it, but they've all been smoothed out so it's not uncomfortable to hold. And the screen is busted. But it's just the screen that's cracked, all functionalities are perfect. First 500 obo gets it.",
      '6': "Hey Mom, EMERGENCY!!!!! You know you've been hacked? Your email was opened on your laptop, so I peeked. I know I shouldn't have, but I was concerned. I would've just closed the email window, but the email you had opened was a phishing email. I have no idea if you actually went into your retirement account using that link. Did you? This is urgent. These keylogging sites can do a lot of damage. I need to know what other sites you have visited, and which accounts you have accessed. I can get it from the history, but I wanted to get your permission before I do this. So write me back ASAP. And the retirement account's email and and the password will both need to be changed ASAP. And the other accounts that might have been compromised also. Write me back immediately with your passwords or call me. IMMEDIATELY!!!!"
    },
    '8': {
      '0': "Hi Aunt Katherine, How have things been going? I'm sorry to write this letter in these circumstances but I'm not sure who else to turn to at this point. Daniel has gotten kicked out of daycare! The teachers said that he was misbehaving too much and too often for him to stay. And now, the only daycare with immediate openings wants a $500 deposit...and that's just too much for my husband and I to afford right now. Would you be able to help us out? I promise we'll pay it back as soon as we can. We just didn't foresee this happening! If you could send it through a check in the mail as soon as possible, that'd be preferred. I'm so sorry to bother you about this - we just don't know where to turn! Feel free to say no, I'd completely understand!Best, Your Niece",
      '1': "Dear Boss, I know that the important meeting with the executives was scheduled for 9am this morning and I do apologize for being tardy to the meeting. Knowing that the meeting was at our downtown office, I stopped by the main office at 8:30am this morning to grab some last minute paperwork. While I was there, though, the electricity cut to the office. It immediately came back on - but it was clear that some of the internet capabilities did not immediately register back on. I had to call the Internet company and see what was going on. That took another 20 minutes. By the time I got that sorted out, got to the car, and drove the 10 minutes to the downtown office, the meeting had already begun. I apologize for the late arrival - but I couldn't let the main office go without Internet in the early day!Best, Employee",
      '2': "Hi Mom, How are you, Mom? All nice and warm in the Florida sun? I am starting to regret the decision to move up North - I had an accident the other day that almost killed me! I was driving to work when a student pedestrian darted across the road. (You know how they cross anywhere that isn't a crosswalk.) I swerved to dodge them and ended up hitting a patch of black ice! The car spun into the median and my side of the car slammed into the concrete. At least - that's what the doctors told me once I woke up from the coma. (Did you notice you didn't hear from me in a few days?) I'm glad the student wasn't hurt, but geesh, it's going to take me a long time to be back to normal. Why can't they just use the crosswalk like they are supposed to?Sorefully yours, Daughter",
      '3': "Dear colleagues, In regards to the meeting originally scheduled for tomorrow at noon, I'm afraid we'll have to postpone it until early next week. The blueprints from the architects that were supposed to be ready by tomorrow are delayed. Without that crucial piece of information, we don't have a meeting. Plainly put: we can't discuss the renovation of our office without the blueprints detailing the renovation. In the meantime, take this as an opportunity to get some additional work done for the meeting. I'd like you to come up with 5 to 10 comments or suggestions for your own departments and detail an explanation for why you've come up with such. If you have any questions on this, let me know. Otherwise, I'll get back with you on an updated meeting time.Best, Supervisor",
      '4': "Hey Chris, Sorry to bother you but something big has happened - something you'll probably hate me for. You know that really nice Ford Flex you have? Well, I've always been jealous of it and I asked your girlfriend if I could borrow it to do some rummage sale shopping on Saturday. I had some great finds - including a small dining room table, which I packed safely in the back of the Flex. Unfortunately, I wasn't able to see well out of the back window with the furniture piled high...and I backed it right into a concrete pole in the middle of the parking lot. The Flex...is ruined, so ruined. I'm going to give you my insurance info but I know I'm going to be severely paying for it. I don't know if you'll ever trust me again, but I sure hope you'll let me make things right. I'm so sorry. Friend",
      '5': "This tablet is being sold AS-IS for PARTS or REPAIR. The screen is shattered but it's still functional. All of the apps and features can still be accessed. I'm the only owner and I bought it new only a year ago. It's not on a contract and is pretty simple to use. The charging port works and I will include a clean case and original charger. BUT it will take about $300 to fully fix the screen. (That's the quote given by Local Repair Shop.) My loss is your gain! The tablet itself can be yours for only $50. So if you pay for the repair, that's $350 total - when the tablet NEW runs for $1200, that's a pretty good deal. No refunds, no returns, you are buying as-is. I will bring the device charged so that you can try it before you buy.",
      '6': "Hey Mom, How are things going? I need your help! I'm trying to upload some bank statements for my financial aid account and they are wanting to see yours, too. Do you remember that Parent Loan that you applied for? They are wanting to see bank statements related to that. I tried to log in myself so I could get it quicker - but I don't know your password. Would you mind letting me know what that is so I can get my account all settled? I don't know that I could wait to have you print it out and send to me - and I'm not sure if I know how to pull bank statements from an email. I promise I'm just going in to get those bank statements! I won't touch anything else, I swear! Please help me, Mom, I'm freaking out!Thank you!!!Daughter"
    },
    '9': {
      '0': "Hello, how have you been? It's been a while since we've talked! I hope all is well with you and the family. I actually wanted to talk to you because I am finally thinking of starting a beer brewing business and was wondering if you'd be interested in investing. I know, after all these years, I finally want to turn my hobby into a profession! I am thinking of going to the bank to get a loan, but wanted to see if you would be interested in helping me get started first before I do that. I have a couple other co founders who are all ready to go, so we're planning to get the process going in a few weeks, so I would need to know fairly soon. If you're interested, let me know, and any form of payment would be greatly appreciated (if you wanted to write a check, or just directly pay for some of the materials we'd need to get started). You would obviously be a partial owner as well, and we can figure those details out when we get started. Hope to hear from you soon!",
      '1': "Good afternoon sir,I am terribly sorry that I am so behind in getting to the meeting today, but unfortunately, my daughter was in bad condition this morning and she fainted, and we had to rush her to the emergency room. I am here at the hospital with her now, but she is starting to come around and seems a lot better, so I will try to leave and get to the office as soon as possible. I know how important the meeting is today, and I would have certainly been there on time if it weren't a life or death situation on our hands here. I hope you can understand the severity of our situation and hope that my absence has not caused any issues that can't be fixed. I will be leaving shortly, so I promise that I will be there soon and will be able to give my part of the presentation.Thanks, and sorry again!",
      '2': "Hi mom,I know that I said I would give you a call when I got home last night, but unfortunately, I got into a bad car accident on the way home from work. There is a blind corner behind a bush at the exit of the parking lot, and when I was pulling out, a car came flying around the corner and smashed into the driver side of the car. I have been saying for years that they need to take that bush down, and hopefully they'll finally listen! I am in the hospital now recovering, but no need to worry! I was in bad condition when I first got in, but I'm doing ok at the moment save for a few broken bones. I should be able to recover fairly soon and come back home, and I promise I will give you a call as soon as I get a chance. Just wanted to let you know so you didn't worry too much. Love you and talk to you soon!",
      '3': "Good morning team,I know we have our quarterly kickoff meeting scheduled for today, but unfortunately I'm not going to be able to make it into the office. I've been feeling sick lately, and felt really terrible this morning. I went to the doctor and it turns out that I have the flu. I must have caught it at the holiday party, I can't believe that people still went even though they were sick! Anyways, we'll have to push the meeting back until I get better, which will probably be next week. In the meantime, think about how you want to set up our schedule for the next quarter so that we can get everything done on time, so that when we have our meeting next week we can get through everything as efficiently as possible.Sorry again, and see you all next week!",
      '4': "Hey man,I really hate to come to you with this kind of news. I know you told me to take care of your Porsche, and I hate to say it, but I did the exact opposite. I was passing an exit ramp on the highway, and some nut job didn't see me I guess and merged over into my lane. I tried to veer out of the way, but lost control and went off the road. Of course he took off, and I couldn't get his license plate number at the time or anything so we won't be able to get him to pay for it. I'm so sorry man, but I promise that I'll cover the cost of the damages. I can drop it off at the shop near my house later today, they usually have some good deals and can get the repairs done pretty quickly. I should be able to get your car to you next week and looking as good as new! Sorry again, and I promise I'll take care of it!",
      '5': "I have a used Samsung Galaxy Tab for sale, selling it for $400. It comes with the keyboard attachment and a stylus, as well as a few other accessories, such as a case, the charger, and a screen protector. I got it earlier this year, $650 for everything, and was planning to use it for school, but it didn't really work all that well for my purposes. I am dropping the price down to $400 since, even though the screen and most of it is in like new condition, there is a problem with the charger port that would require a repair to fix. It would cost about $100 to fix and can be done at any electronic repair shop, which with the $400 cost would still be cheaper than getting everything brand new, and otherwise, everything else is in great condition. Shoot me an email if you're interested.",
      '6': "Hi mom,I hope you are having a great week so far! I wanted to talk to you because I need your password to access our Verizon account. I unfortunately broke my phone the other day, and I need to get a replacement, but I need to be able to sign into the account to see all the replacement options and place the order. I am so sorry, I know you told me to take good care of my phone, but I dropped it in the bath tub by accident the other night! I promise that I will replace it using my own money and such, but I will need to get into the account to get it taken care of. I wouldn't ask you to send me your password over email or by text or anything, so please give me a call when you get a chance so that I can get the password, and please promise not to yell at me too much!Love you and hope to talk to you soon"
    }
  };

  prompts = [
    "You need to ask a relatively wealthy relative (it could be any relative) for some money. Formulate a story/message that is asking that relative what you need the money for, when you need it, why you need it, and how they should give it to you. ",
    "You are extremely late for an important meeting with top-level executives in the company that you work for. Create a story for why you were late that will convince them not to fire you. ",
    "You have gotten into an accident that was nearly fatal. Explain to your mother what/when/where/how/why you got into that accident. ",
    "You are a supervisor and you have to push back an important meeting with your supervisees. What happened and how do you tell them?",
    "You borrowed your friend's favorite expensive car and you crashed it. It is now completely broken. How do you explain what happened? What do you do?",
    "You must sell your cell phone or tablet device. However, the condition of the device is not satisfactory and you currently do not have the funds to fix it. Using any tactic, how would you sell your device?",
    "You need your mom's password to access an important account that you have under her name. What is your plan to convince her to give you her password?"
  ]

  sample = "Oh hey Dad! How's it going? Let me tell you about my day today, you won't believe it. First of all, I woke up late and so I had to hurry and run to the bus stop. On my way to the bus stop I was trying to review for my final when I tripped on air and went flying to the ground! It's okay though, I was still able to make it to the bus stop. I scratched up my legs and arms kind of bad but I had more important things to worry about! So I stood up, dusted myself off and continued my sprint to the bus stop. As I was running and looking at my notes I realized that I had the wrong notebook with me! Everything was still fine though because eventually I made it to the bus stop and I was actually on time for the test! Anyways, the test went okay but I was still scratched up and sore from faceplanting onto the ground. It could've been much worse though! Anyways, hope your day was less stressful than mine Dad!"

  prev_responses = [sample,
    "Hi Auntie! I'm actually really broke right now and I need a lot of money. This is because somebody broke into my house and stole all of valuables and found the safe that I stored all of my money in! Crazy, right? Anyways, I need to get a new car, new furniture, new appliances, and pretty much new everything and I need your help. I was thinking of getting this brand new car that came out that isn't too expensive! It costs like $22,000 if you don't mind fronting that. Also, my fridge does still work but a new one would honestly be great! Like it really does suck that I lost all my money and I could really use all the help I can get. Would you mind just using paypal to wire me maybe $30,000? That shouldn't be too bad right? Thank you!!",
    "Hi everyone! I'm so so sorry that I am late for this meeting! I know that this was very important but I really had no control over why I was late. I can explain why I'm 3 hours late! I hope you enjoyed the lunch I ordered for everyone. So first of all, my dog ate my phone! It had my alarms so I couldn't wake up on time. After that, I rushed to go get ready and went into my car. Then there was so much traffic! The freeway collapsed so I was stuck there for like 2 hours. Then whats crazy is that I was rushing so much that I forgot to fill up my gas tank! So there I was in the middle of the freeway when my car suddenly ran out of gas. I can't make this stuff up. That's when I called the catering services to get everyone lunch. Please understand as I really had no control over the situation and I am still in traffic. Thank you!",
    "Hi mom! Okay, don't be worried, but I just got into a car accident in that new Mercedes Benz you and dad just got me. I'm at the hospital right now in the ICU after they operated on my head. Everything's fine though! So what happened was I was out partying with my friends and I really wanted to go home before curfew. I really didn't drink that much so I drove myself. Then all of a sudden, on the intersection, some bozo showed up out of nowhere and t-boned my car! How dare they! They said their light was green and mine was red but I swear I saw a green light on my side! This was a last night and I have been at the hospital ever since. Man, I hope people are more careful driving, especially since my car was so nice! Would you mind picking me up after i get released? Thanks mom!"
  ];

  //Taken from: https://gist.githubusercontent.com/deekayen/4148741/raw/01c6252ccc5b5fb307c1bb899c95989a8a284616/1-1000.txt
  top_1000_english_words = ['the', 'of', 'to', 'and', 'a', 'in', 'is', 'it', 'you', 'that', 'he', 'was', 'for', 'on', 'are', 'with', 'as', 'I', 'his', 'they', 'be', 'at', 'one', 'have', 'this', 'from', 'or', 'had', 'by', 'hot', 'word', 'but', 'what', 'some', 'we', 'can', 'out', 'other', 'were', 'all', 'there', 'when', 'up', 'use', 'your', 'how', 'said', 'an', 'each', 'she', 'which', 'do', 'their', 'time', 'if', 'will', 'way', 'about', 'many', 'then', 'them', 'write', 'would', 'like', 'so', 'these', 'her', 'long', 'make', 'thing', 'see', 'him', 'two', 'has', 'look', 'more', 'day', 'could', 'go', 'come', 'did', 'number', 'sound', 'no', 'most', 'people', 'my', 'over', 'know', 'water', 'than', 'call', 'first', 'who', 'may', 'down', 'side', 'been', 'now', 'find', 'any', 'new', 'work', 'part', 'take', 'get', 'place', 'made', 'live', 'where', 'after', 'back', 'little', 'only', 'round', 'man', 'year', 'came', 'show', 'every', 'good', 'me', 'give', 'our', 'under', 'name', 'very', 'through', 'just', 'form', 'sentence', 'great', 'think', 'say', 'help', 'low', 'line', 'differ', 'turn', 'cause', 'much', 'mean', 'before', 'move', 'right', 'boy', 'old', 'too', 'same', 'tell', 'does', 'set', 'three', 'want', 'air', 'well', 'also', 'play', 'small', 'end', 'put', 'home', 'read', 'hand', 'port', 'large', 'spell', 'add', 'even', 'land', 'here', 'must', 'big', 'high', 'such', 'follow', 'act', 'why', 'ask', 'men', 'change', 'went', 'light', 'kind', 'off', 'need', 'house', 'picture', 'try', 'us', 'again', 'animal', 'point', 'mother', 'world', 'near', 'build', 'self', 'earth', 'father', 'head', 'stand', 'own', 'page', 'should', 'country', 'found', 'answer', 'school', 'grow', 'study', 'still', 'learn', 'plant', 'cover', 'food', 'sun', 'four', 'between', 'state', 'keep', 'eye', 'never', 'last', 'let', 'thought', 'city', 'tree', 'cross', 'farm', 'hard', 'start', 'might', 'story', 'saw', 'far', 'sea', 'draw', 'left', 'late', 'run', "don't", 'while', 'press', 'close', 'night', 'real', 'life', 'few', 'north', 'open', 'seem', 'together', 'next', 'white', 'children', 'begin', 'got', 'walk', 'example', 'ease', 'paper', 'group', 'always', 'music', 'those', 'both', 'mark', 'often', 'letter', 'until', 'mile', 'river', 'car', 'feet', 'care', 'second', 'book', 'carry', 'took', 'science', 'eat', 'room', 'friend', 'began', 'idea', 'fish', 'mountain', 'stop', 'once', 'base', 'hear', 'horse', 'cut', 'sure', 'watch', 'color', 'face', 'wood', 'main', 'enough', 'plain', 'girl', 'usual', 'young', 'ready', 'above', 'ever', 'red', 'list', 'though', 'feel', 'talk', 'bird', 'soon', 'body', 'dog', 'family', 'direct', 'pose', 'leave', 'song', 'measure', 'door', 'product', 'black', 'short', 'numeral', 'class', 'wind', 'question', 'happen', 'complete', 'ship', 'area', 'half', 'rock', 'order', 'fire', 'south', 'problem', 'piece', 'told', 'knew', 'pass', 'since', 'top', 'whole', 'king', 'space', 'heard', 'best', 'hour', 'better', 'true', 'during', 'hundred', 'five', 'remember', 'step', 'early', 'hold', 'west', 'ground', 'interest', 'reach', 'fast', 'verb', 'sing', 'listen', 'six', 'table', 'travel', 'less', 'morning', 'ten', 'simple', 'several', 'vowel', 'toward', 'war', 'lay', 'against', 'pattern', 'slow', 'center', 'love', 'person', 'money', 'serve', 'appear', 'road', 'map', 'rain', 'rule', 'govern', 'pull', 'cold', 'notice', 'voice', 'unit', 'power', 'town', 'fine', 'certain', 'fly', 'fall', 'lead', 'cry', 'dark', 'machine', 'note', 'wait', 'plan', 'figure', 'star', 'box', 'noun', 'field', 'rest', 'correct', 'able', 'pound', 'done', 'beauty', 'drive', 'stood', 'contain', 'front', 'teach', 'week', 'final', 'gave', 'green', 'oh', 'quick', 'develop', 'ocean', 'warm', 'free', 'minute', 'strong', 'special', 'mind', 'behind', 'clear', 'tail', 'produce', 'fact', 'street', 'inch', 'multiply', 'nothing', 'course', 'stay', 'wheel', 'full', 'force', 'blue', 'object', 'decide', 'surface', 'deep', 'moon', 'island', 'foot', 'system', 'busy', 'test', 'record', 'boat', 'common', 'gold', 'possible', 'plane', 'stead', 'dry', 'wonder', 'laugh', 'thousand', 'ago', 'ran', 'check', 'game', 'shape', 'equate', 'hot', 'miss', 'brought', 'heat', 'snow', 'tire', 'bring', 'yes', 'distant', 'fill', 'east', 'paint', 'language', 'among', 'grand', 'ball', 'yet', 'wave', 'drop', 'heart', 'am', 'present', 'heavy', 'dance', 'engine', 'position', 'arm', 'wide', 'sail', 'material', 'size', 'vary', 'settle', 'speak', 'weight', 'general', 'ice', 'matter', 'circle', 'pair', 'include', 'divide', 'syllable', 'felt', 'perhaps', 'pick', 'sudden', 'count', 'square', 'reason', 'length', 'represent', 'art', 'subject', 'region', 'energy', 'hunt', 'probable', 'bed', 'brother', 'egg', 'ride', 'cell', 'believe', 'fraction', 'forest', 'sit', 'race', 'window', 'store', 'summer', 'train', 'sleep', 'prove', 'lone', 'leg', 'exercise', 'wall', 'catch', 'mount', 'wish', 'sky', 'board', 'joy', 'winter', 'sat', 'written', 'wild', 'instrument', 'kept', 'glass', 'grass', 'cow', 'job', 'edge', 'sign', 'visit', 'past', 'soft', 'fun', 'bright', 'gas', 'weather', 'month', 'million', 'bear', 'finish', 'happy', 'hope', 'flower', 'clothe', 'strange', 'gone', 'jump', 'baby', 'eight', 'village', 'meet', 'root', 'buy', 'raise', 'solve', 'metal', 'whether', 'push', 'seven', 'paragraph', 'third', 'shall', 'held', 'hair', 'describe', 'cook', 'floor', 'either', 'result', 'burn', 'hill', 'safe', 'cat', 'century', 'consider', 'type', 'law', 'bit', 'coast', 'copy', 'phrase', 'silent', 'tall', 'sand', 'soil', 'roll', 'temperature', 'finger', 'industry', 'value', 'fight', 'lie', 'beat', 'excite', 'natural', 'view', 'sense', 'ear', 'else', 'quite', 'broke', 'case', 'middle', 'kill', 'son', 'lake', 'moment', 'scale', 'loud', 'spring', 'observe', 'child', 'straight', 'consonant', 'nation', 'dictionary', 'milk', 'speed', 'method', 'organ', 'pay', 'age', 'section', 'dress', 'cloud', 'surprise', 'quiet', 'stone', 'tiny', 'climb', 'cool', 'design', 'poor', 'lot', 'experiment', 'bottom', 'key', 'iron', 'single', 'stick', 'flat', 'twenty', 'skin', 'smile', 'crease', 'hole', 'trade', 'melody', 'trip', 'office', 'receive', 'row', 'mouth', 'exact', 'symbol', 'die', 'least', 'trouble', 'shout', 'except', 'wrote', 'seed', 'tone', 'join', 'suggest', 'clean', 'break', 'lady', 'yard', 'rise', 'bad', 'blow', 'oil', 'blood', 'touch', 'grew', 'cent', 'mix', 'team', 'wire', 'cost', 'lost', 'brown', 'wear', 'garden', 'equal', 'sent', 'choose', 'fell', 'fit', 'flow', 'fair', 'bank', 'collect', 'save', 'control', 'decimal', 'gentle', 'woman', 'captain', 'practice', 'separate', 'difficult', 'doctor', 'please', 'protect', 'noon', 'whose', 'locate', 'ring', 'character', 'insect', 'caught', 'period', 'indicate', 'radio', 'spoke', 'atom', 'human', 'history', 'effect', 'electric', 'expect', 'crop', 'modern', 'element', 'hit', 'student', 'corner', 'party', 'supply', 'bone', 'rail', 'imagine', 'provide', 'agree', 'thus', 'capital', "won't", 'chair', 'danger', 'fruit', 'rich', 'thick', 'soldier', 'process', 'operate', 'guess', 'necessary', 'sharp', 'wing', 'create', 'neighbor', 'wash', 'bat', 'rather', 'crowd', 'corn', 'compare', 'poem', 'string', 'bell', 'depend', 'meat', 'rub', 'tube', 'famous', 'dollar', 'stream', 'fear', 'sight', 'thin', 'triangle', 'planet', 'hurry', 'chief', 'colony', 'clock', 'mine', 'tie', 'enter', 'major', 'fresh', 'search', 'send', 'yellow', 'gun', 'allow', 'print', 'dead', 'spot', 'desert', 'suit', 'current', 'lift', 'rose', 'continue', 'block', 'chart', 'hat', 'sell', 'success', 'company', 'subtract', 'event', 'particular', 'deal', 'swim', 'term', 'opposite', 'wife', 'shoe', 'shoulder', 'spread', 'arrange', 'camp', 'invent', 'cotton', 'born', 'determine', 'quart', 'nine', 'truck', 'noise', 'level', 'chance', 'gather', 'shop', 'stretch', 'throw', 'shine', 'property', 'column', 'molecule', 'select', 'wrong', 'gray', 'repeat', 'require', 'broad', 'prepare', 'salt', 'nose', 'plural', 'anger', 'claim', 'continent', 'oxygen', 'sugar', 'death', 'pretty', 'skill', 'women', 'season', 'solution', 'magnet', 'silver', 'thank', 'branch', 'match', 'suffix', 'especially', 'fig', 'afraid', 'huge', 'sister', 'steel', 'discuss', 'forward', 'similar', 'guide', 'experience', 'score', 'apple', 'bought', 'led', 'pitch', 'coat', 'mass', 'card', 'band', 'rope', 'slip', 'win', 'dream', 'evening', 'condition', 'feed', 'tool', 'total', 'basic', 'smell', 'valley', 'nor', 'double', 'seat', 'arrive', 'master', 'track', 'parent', 'shore', 'division', 'sheet', 'substance', 'favor', 'connect', 'post', 'spend', 'chord', 'fat', 'glad', 'original', 'share', 'station', 'dad', 'bread', 'charge', 'proper', 'bar', 'offer', 'segment', 'slave', 'duck', 'instant', 'market', 'degree', 'populate', 'chick', 'dear', 'enemy', 'reply', 'drink', 'occur', 'support', 'speech', 'nature', 'range', 'steam', 'motion', 'path', 'liquid', 'log', 'meant', 'quotient', 'teeth', 'shell', 'neck']

  prev_prompts = [];

  /*
  TODO
  -Need to double check; add debugging scripts?
  -Remove newline chars from the responses -done
  -Samples not showing on mturk data
  -Find out how to send turkID
  -test on mturk
  -handle rejection from experiment -done
 */
  slides.single_trial = slide({
    name: "single_trial",

    present: handle_order(),

    present_handle: function (stim) {
      $("#text_response").val('');

      /* //Gets 4 random prompts
      var r_prompts = get_rand_prompts();
      var my_prompt = get_unused_prompt(r_prompts, prev_prompts); */
      samples = [];
      while(samples.length < 3)
      {
        rand = Math.floor(Math.random() * 7)
        if( (String(rand) != stim[1]) && !(samples.includes(String(rand))))
        {
          samples.push(String(rand))
        }
      }
      console.log(samples);
      $(".err").hide();
      $(".err_non_english").hide();
      $(".err_same").hide();
      $(".err_repeat").hide();

      if(stim == "rejected")
      {
        $(".err_repeat").show();
        $(".cont_exp").hide();
        $(".response").hide();
      }
      else
      {
        $(".prompt_1").html(auth_dict[stim[0]][samples[0]]);
        $(".prompt_2").html(auth_dict[stim[0]][samples[1]]);
        $(".prompt_3").html(auth_dict[stim[0]][samples[2]]);
        $(".prompt").html("<b>" + prompts[stim[1]] + "</b>");

        prev_responses.push(auth_dict[stim[0]][samples[0]]);
        prev_responses.push(auth_dict[stim[0]][samples[1]]);
        prev_responses.push(auth_dict[stim[0]][samples[2]]);
      }
    },

    button: function () {
      s1 = $(".prompt_1").val();
      s2 = $(".prompt_2").val();
      s3 = $(".prompt_3").val();
      prompt = $(".prompt").val()
      response = $("#text_response").val().trim();

      $(".err").hide();
      $(".err_non_english").hide();
      $(".err_same").hide();
      $(".err_repeat").hide();

      if (response.replace(/  /g, '').trim().length < 700) {
        $(".err").show();
      }
      else if (check_english(response, top_1000_english_words) == false) {
        $(".err_non_english").show();
      }
      else if (findDifferences(prev_responses, response)) {
        $(".err_same").show();
      }
      else {
        exp.data_trials.push({
          "trial_type": "single_trial",
          "response": response,
          "prompt": prompt,
          "sample_1": s1,
          "sample_2": s2,
          "sample_3": s3
        });
        $(".num_chars").html('0');
        prev_responses.push(response);
        _stream.apply(this);
      }


    },
  });

  slides.subj_info = slide({
    name: "subj_info",
    submit: function (e) {
      //if (e.preventDefault) e.preventDefault(); // I don't know what this means.
      exp.subj_data = {
        language: $("#language").val(),
        enjoyment: $("#enjoyment").val(),
        asses: $('input[name="assess"]:checked').val(),
        age: $("#age").val(),
        gender: $("#gender").val(),
        education: $("#education").val(),
        comments: $("#comments").val(),
        problems: $("#problems").val(),
        fairprice: $("#fairprice").val()
      };
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.thanks = slide({
    name: "thanks",
    start: function () {
      exp.data = {
        "trials": exp.data_trials,
        "catch_trials": exp.catch_trials,
        "system": exp.system,
        "condition": exp.condition,
        "subject_information": exp.subj_data,
        "time_in_minutes": (Date.now() - exp.startT) / 60000
      };
      setTimeout(function () { turk.submit(exp.data); }, 1000);
    }
  });

  return slides;
}

//Make this wait until response is recieved
//Make it send ip address
function handle_order()
{
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:8888", false);
  xhr.send(turk.workerId);
  console.log(xhr.responseText);
  order = xhr.responseText.split(",");
  return order
}

function get_ip_and_order()
{
  return $.getJSON('https://json.geoiplookup.io/api?callback=?', function(data) {
    const ip_info = JSON.stringify(data, null, 2);
    const ip_obj = JSON.parse(ip_info)
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8888", false);
    xhr.send(ip_obj.ip)
    console.log(xhr.responseText);
    order = xhr.responseText.split(",");
    return order
  });
}

function char_count() {
  len = $("#text_response").val().replace(/  /g, '').trim().length;
  $(".num_chars").html(len);
}

function check_english(response, top_1000) {
  //Could count until 5-10 common words show up. 
  var split_res = response.split(" ");
  for (var i = 0; i < split_res.length; i++) {
    //JS String docs; the g specifices all occurences
    var token = split_res[i].toLowerCase().trim().replace(/\W/g, "");
    if (top_1000.includes(token)) {
      return true;
    }
  }
  return false;
}

//Function to get the difference between two strings; taken from stack overflow. 
//https://stackoverflow.com/questions/29573700/finding-the-difference-between-two-string-in-javascript-with-regex
function getDifference(sample_message, new_message) {
  var i = 0;
  var j = 0;
  var result = "";

  while (j < new_message.length) {
    if (sample_message[i] != new_message[j] || i == sample_message.length)
      result += new_message[j];
    else
      i++;
    j++;
  }
  return result;
}

function findDifferences(prev_messages, curr_message) {
  for (var i = 0; i < prev_messages.length; i++) {
    if (getDifference(prev_messages[i], curr_message).length < 100) {
      return true;
    }
  }
  return false;
}

function get_rand_authors() {
  arr_nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  rand_nums = shuffle(arr_nums);
  sliced = rand_nums.slice(0, 5);
  return sliced;
}

function get_rand_prompts() {
  arr_nums = [0, 1, 2, 3, 4, 5, 6];
  rand_nums = shuffle(arr_nums);
  sliced = rand_nums.slice(0, 3);
  return sliced;
}

function get_unused_prompt(sample_prompts, prev_prompts) {
  total_prompts = _.union(sample_prompts, prev_prompts);
  rand = Math.floor(Math.random() * 7);
  while (true) {
    if (total_prompts.includes(rand)) {
      rand = Math.floor(Math.random() * 7);
    }
    else {
      return rand;
    }
  }
}

// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

/// init ///
function init() {
  order = [];
  exp.trials = [];
  exp.catch_trials = [];
  exp.condition = []; //can randomize between subject conditions here
  exp.system = {
    Browser: BrowserDetect.browser,
    OS: BrowserDetect.OS,
    screenH: screen.height,
    screenUH: exp.height,
    screenW: screen.width,
    screenUW: exp.width
  };
  //blocks of the experiment:
  exp.structure = ["i0", "instructions", "single_trial", 'subj_info', 'thanks'];

  exp.data_trials = [];
  //make corresponding slides:
  exp.slides = make_slides(exp);

  exp.nQs = utils.get_exp_length(); //this does not work if there are stacks of stims (but does work for an experiment with this structure)
  //relies on structure and slides being defined

  $('.slide').hide(); //hide everything

  //make sure turkers have accepted HIT (or you're not in mturk)
  console.log(turk.workerId)
  $("#start_button").click(function () {
    if (turk.previewMode) {
      $("#mustaccept").show();
    } else {
      $("#start_button").click(function () { $("#mustaccept").show(); });
      exp.go();
    }
  });

  exp.go(); //show first slide
}
