---
title: Remove last GIT commit

layout: post
wrapper: true
---
When you work with a versioning system like Git or Subversion, you'll sometimes commit stuff and notice right after you did so that your commit is, well... *garbage*.

Maybe because you forgot something, or maybe because your commit message needs some extra work... Stuff like that happens.

## git reset

I'd like to share a handy command with my fellow GIT users. If you haven't pushed your code, you still can easily remove your last commit, without losing your changes.

    git reset --soft HEAD~1

`HEAD~1` is a shorthand for the commit right *before* the HEAD. So when you execute this `git reset` command, your last commit gets removed. Your changes however, are not. This means you can easily re-stage your changes and commit them properly! Rejoice!