---
title: Git tip&#58; resetting file permissions
description: This blog post explains how to reset git file permissions of files you've modified without losing your changes.

layout: post
wrapper: true
---
I'd like to share a little trick I have been using a lot the last few months.

Have you ever been in the situation where you changed file permissions on some files within a certain git repository and where you'd like to reset the permissions, but you can't use `git checkout` because you don't want to lose *actual* changes to the file?

Here's a handy command [I found online][stackoverflow]:

	git diff -p \
	    | grep -E '^(diff|old mode|new mode)' \
	    | sed -e 's/^old/NEW/;s/^new/old/;s/^NEW/new/' \
	    | git apply

This script lists all changed permissions with `git diff -p` (the -p option makes `git diff` only show permission changes) and then uses some clever [UNIX piping][piping] to feed a rewritten git diff log to `git apply`.

You can even create an alias like 'permission-reset' with the following command

	git config --global --add alias.permission-reset '!git diff -p | grep -E "^(diff|old mode|new mode)" | sed -e "s/^old/NEW/;s/^new/old/;s/^NEW/new/" | git apply'

After creating this alias you can use `git permission-reset` to execute the multiple piped commands in one simple, rememberable git commmand.


[stackoverflow]: http://stackoverflow.com/questions/2517339/git-how-to-recover-the-file-permissions-git-thinks-the-file-should-be
[piping]: /2012/08/how-to-delete-a-file-when-its-in-use-os-x