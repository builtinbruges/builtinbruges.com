---
title: Repeat last terminal command
layout: en/post
lang: en
---
Ever executed a command for which you needed root permissions (e.g. via `sudo`) but find yourself needing to retype the whole thing?

I just found a very useful terminal command: If you want to repeat your last used command, you can just type `!!` in the terminal.

This is very useful in the form

    sudo !!

This way, you can easily re-execute a command for which you did not have enough permissions, *with* the required root permissions.

I found this tip in a [Stackoverflow](http://stackoverflow.com/questions/68372/what-is-your-single-most-favorite-command-line-trick-using-bash) discussion which contains some other good commands as well. Check it out!