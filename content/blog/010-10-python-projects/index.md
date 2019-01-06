---
title: Python Jumpstart by Building 10 Apps Review
date: "2018-07-12T09:13:03.284Z"
---

When I first got into programming one of the languages everyone touted was Python and while I did enjoy the little I did in the beginning I never got fully into it that with school having me use Java, C, C++ and work being Javascript. I have about 6 months before school starts again and after 3 years of developing I have decided to get back into it because it has always called me. I listen to podcasts on my runs in the morning and so I decided to look up great Python podcasts and one of the staples is Michael Kennedy’s Talk Python. So naturally I follow him on twitter and one of his followers put up a tweet about this course he took and so I decided to look into it and figured who better to learn from then THE Python Podcast guru so I took the plunge. This is just a quick break down of each project and my experience.

Just some notes, I come from a Javascript background because that is what I use at work so I’m not 100% new to programming as I have gotten an AS in Computer Science and have been working with Javascript for the last 3 years. That is not to say that even beginners can’t be successful with these projects but even I spent time during and after to try to dig more into some of the concepts but I found that it does a amazing job to atleast let you some of what is possible which is more important in my opinion to trying to remember how to do everything. You can always look up what you know is possible and how to accomplish it.

So now back to my experience. Spoiler alert, they were all really awesome.

#### App 1 — Hello (you Pythonic) World:
This is a simple little project to just get a simple Hello World working but even better, you actually ask input from the user which is a crucial part for any interactive program. Not much to say here but on top of that, you learn a little bit about how to use the IDE, which I used PyCharm. I hear Visual Studio Code is good but I like PyCharm better, just a personal choice.

#### App 2 — Guess that number game:
This app introduces using modules which is I think is universally agreed on that Python has an amazing library, both built in and external. In this project we use random to randomize a number and then get into loops as well as conditional statements if and elif. Unlike other languages like Javascript or lower level languages like C++ and C, Python uses 4 spaces which is typically used by tabs to terminate a line of code, but I’m not here to explain what Michael does great already.

#### App 3 — Birthday Countdown:
I enjoyed this project because it uses the datetime library to grab the current time and compare it to your birthday. You can use datetime in many different projects which is why the versatility of this can’t be understated. It also teaches about to modularize your functions which helps for debugging and clarity.

#### App 4 — Journal App and file I/O:
I think this was the first one that actually began to challenge me because it dealt with creating a file and saving to it. This also consisted of using the os library to see if files exist in certain directories regardless of operating system. I’d recommending slowing down on this one and really taking the time to understand the concepts.

#### App 5 — Realtime weather client:
This was the one that got me excited because we were dealing with real live data but it also became the one that challenged me because I ended up doing it completely different since the site that Michael uses no longer had easy access to there markup html. I actually used a site api.openweather.com and pull Json data from there and started hacking my way around to figure out how to use the Json data in Python which made me come across the built in json library. Part of the journey is googling and trial and error. It can get frustrating but once I got it working I was very excited. This is the only one I worry might be difficult for some since Michael does it with scraping but I’ll share my code to show how I did it.

#### App 6 — LOLCat Factory:
This one was a little fun project but I have to admit that I still don’t fully remember how exactly it was accomplished nor could I fully explain the code but I already knew I’d have to go back and break it down. Best thing about the videos, you can always go back and watch them again. Still pretty funny pics.

#### App 7 — Wizard Battle
I watched a show called Halt and Catch Fire which was an awesome underrated show but in it one of the characters creates a Dungeons and Dragon type game and this is a simple version but it was pretty nice being able to see what one looks like. My favorite part of this app is that we discuss classes and how they are created. This is another, Take Your Time, type of app because there are a lot of concepts that are introduced but I’ll guarantee you once you get done you’ll feel like a programming god even if only for a couple of minutes. This one really began to solidify classes for me which is an extremely important concept in programming.

#### App 8 — File Searcher:
I found this to be the most useful app because it teaches one of the most confusing but useful concepts in developing, recursion. Now don’t worry if even after this app you don’t understand it, I went to school and learned it and to this day don’t really understand when to use it. I think it just takes experience to foresee it’s usage. Either way, the other more interesting part is is parsing through text files to look for a phrase and not only receiving the number of times it shows but which line number and in sub directories of the directory chosen to scavenge. Again, really great concepts to know about.

#### App 9 — Real Estate Analysis:
CSV files are those files that especially in work environment and databases you will deal with and you definitely want to be able to analyse it and this app does just that. Again, you are opening files, parsing the file, analyzing and closing the file. While I found App 8 to be the most useful generally, I found this one to be the most useful for work. I deal with CSVs all day so it’s nice to know I can write an app to manipulate and analyze all the data. Still one of the harder projects that I didn’t full grasp all the concepts on first run so I’ll be going back to this one for sure.

#### App 10 — Movie Search:
This app did what I did for the RealTime Weather which was use Json data to extract information and display it. This one took it a step further by using try and except which make errors very elegant. Depending on the error, you can put exactly what you want the program to write back. I’m using this more and more even in my javascript programming. Great final app to cap it all off.

So that is it, all in all, I found it so practical and generalized enough for me to get a peak into the power of Python. Ultimately, I wanted to learn Python because I love Raspberry Pi’s and Arduino’s and hope to use Python to run my little home automation projects. You won’t be disappointed with Michael’s course as again, it just has so much compacted into then projects. I do recommend though that you don’t strictly rely on the projects, if you do get lost with a concept, research it, dissect it until you feel comfortable moving on. I found that once I can understand something, even if I forget it later, it truly is like riding a bike. Learn it once and you’ll never truly forget it. Good luck to all who take this badass set of projects.

[Gitlab Projects](https://gitlab.com/RogerDodger-Python/10-Projects)(Ignore all the other ugly beginner code you might see ;)
[Python Jumpstart by Building 10 Apps](https://training.talkpython.fm/courses/explore_python_jumpstart/python-language-jumpstart-building-10-apps) by Michael Kennedy