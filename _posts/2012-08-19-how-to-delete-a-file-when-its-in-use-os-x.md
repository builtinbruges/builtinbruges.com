---
title: How to delete a file when it's in use on OS X
description: This post describes how you can easily delete a file that's in use on OS X using a few simpel terminal commands

layout: post
wrapper: true
---
I'm sure everyone has experienced this problem at one point: you want to delete a file in the Finder but you can't because it tells you it's in use. Here's how you can handle that problem.

In this short how-to I'll show you how you can delete the file using a few simple Unix commands

### Identify the process that's using the file

First thing you'll want to do is identify what process is using your file. You can do this by opening the Terminal and using the `lsof` command. `lsof` is a utility [that can display files that are currently opened](http://en.wikipedia.org/wiki/Lsof).

So if you'll open the Terminal, type `lsof`, and press the enter key, you will notice that it outputs a *big* list of files that are currently opened by all processes that are currently active on your mac.

You could scroll through the list trying to find the line that identifies the file you want to delete, but a more handy way would be to filter the `lsof` output with `grep` by using [UNIX pipes](http://en.wikipedia.org/wiki/Pipeline_(Unix)). If you want to learn more about this, I suggest you you read [the wikipedia page](http://en.wikipedia.org/wiki/Pipeline_(Unix)), but in short, this mechanism allows you to pass the output of a command to another command.

`grep` is [a command that can filter text](http://en.wikipedia.org/wiki/Grep). Text from files, or from other commands by using ... UNIX pipelines! So if we would like to filter the output of `lsof` with `grep`, our final command would look something like this:

    lsof | grep "unremovablefile.png"

Note how the pipeline allows the output of `lsof` to be passed to `grep`, which then can filter the incoming text and look for a line that contains "unremovablefile.png"

### Killing the process that is using your file

If everything went well, a line with the following information should be printed in the Terminal after you executed `lsof` and `grep`:

    Tweetbot  4351 bert  txt      REG           1,2   4518 32903365 /Users/bert/unremovablefile.png

The important parts of this line are the first two columns. The first column shows the *process name*, and the second column shows the *process ID*. You could easily start up Activity Monitor and kill the process from there by selecting it and pressing the "Quit Process" toolbar button, but since we are working in the Terminal, you can also easily use the command `kill`.

`kill` allows you to ... well, [kill a given process](http://en.wikipedia.org/wiki/Kill_(command)). So to do this, we can use the following command:

    kill -9 4351

Note how *4351* is the *process ID* of Tweetbot, the application that is using my file "unremovablefile.png", and the reason I can't delete it.

The *-9* switch means that the `kill` command won't be nice, and kill the given process ID with a headshot. If you want to read more about the switches you can pass to `kill`, I suggest you read about them in the manpages by using the command `man kill`.

### Done!

So that's it! If we go back to the Finder, we'll be able to delete our file "unremovablefile.png" without the Finder complaining that the file is in use!
