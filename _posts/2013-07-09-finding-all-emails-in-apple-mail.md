---
title: Extract all e-mails stored in Apple Mail

layout: post
wrapper: true

source_url: http://www.dontstopthesignal.com/2010/10/extracting-e-mail-addresses-from-apple.html
---
We needed an app or script today for a client that could help us extract all e-mail adresses that are stored in Apple Mail. After some googling we found these [three simple commands][post-url] on the [Don't stop the Signal blog][blog-url].

    cd ~/Library/Mail
    find . -name *.emlx -print0 | xargs -0 perl -wne'while(/[\w\.]+@[\w\.]+/g){print "$&\n"}' * > ~/Desktop/extracted_emails.txt
    sort ~/Desktop/extracted_emails.txt | uniq > ~/Desktop/sorted_emails.txt

[post-url]: http://www.dontstopthesignal.com/2010/10/extracting-e-mail-addresses-from-apple.html
[blog-url]: http://www.dontstopthesignal.com/