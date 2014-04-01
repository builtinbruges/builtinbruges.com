---
title: Getting Gitbox to run properly on Mac OS X 10.9 Mavericks
description: How to get Gitbox to run nicely on Mac OS X 10.9 Mavericks. It's been so long since an update and it seems the app is dead. These tips will help you to run Gitbox smoothly on Mavericks

layout: post_md
wrapper: true
---

[Gitbox][gitbox] is, in my opinion, the simplest and most elegant Git GUI app out there. The app looks great and has the right amount of functionality. It provides functionality for all basic git stuff like commiting, merging, pushing and pulling and even cherry-picking and rebasing, without the need for me to go dive in the command-line to execute git commands for which I don't remember the exact syntax anymore. The app is only $14.99 on the App store, so for a tool I use everyday that's a pretty good price as well.

However, lately the app hasn't seen much love from its [developer][oleganza]. It has now been about 160 days since the last update, and the developer seems to be keeping busy collecting bitcoins lately. There really hasn't been any love for Gitbox at all in the last 6 months.

If the app was running bug free, without problems, I wouldn't see an issue with that. But as you can guess, there *are* issues with Gitbox. Especially on OS X 10.9 Mavericks.

To illustrate: the problem is so big that Gitbox hasn't even received *one* update since Mavericks has been released. A lot of users are [experiencing weird bugs][twitter-search] such as the main window not showing up when launching the app, or the app just hanging / pulling remotes after you've added a repo. Weird behaviour that can be expected when an app isn't updated for a new major OS X release.

In this blog post I'll give you a few commands you can use to reset Gitbox if you're experiencing issues, and hopefully prevent them in the future.

## Main window not showing up after launch

This seems to be the [biggest issue][twitter-main-window], and I've experienced this a few times as well. A lot of twitter users suggest deleting the main Gitbox preference file located in `~/Library/Preferences/com.oleganza.gitbox.plist`, but somehow after deleting this file you still have a pretty big chance of Gitbox not working correctly. The **solution** seems to be to delete the preferences from disk **and** delete the prefs through Apples `defaults` command-line interface tool.

So just run the following commands in the Terminal and Gitbox should start normal again:

	rm ~/Library/Preferences/com.oleganza.gitbox.plist
	defaults delete com.oleganza.gitbox

**Warning: you'll lose all your preferences**, such as the list of repositories on the left, but unfortunately this seems to be the only way to get Gitbox running again right now.

## Disabling app nap

After you've removed all prefs and Gitbox is launching properly again, you'll still have a fairly big chance that this issue might occur again, and Gitbox might lock up or mess up your preferences *again*, which may cause you running into the same problem over and over and having to delete your preferences everytime. This has happened a few times to me as well.

I tried a few things, but one thing that really seemed to work for me that prevented this from happening again, was disabling [app nap][app-nap] for Gitbox. App nap is a new Mavericks technology which suspends applications of whom their windows are not visible. I believe that this seems to be related to the fact that Gitbox sometimes screws up its own preferences file, which causes it to not launch anymore.

You can disable app nap for Gitbox with the following command:

	defaults write com.oleganza.gitbox NSAppSleepDisabled -bool YES

After disabling app nap, I have never experienced the issue where the main window doesn't show up after launch again. So far so good. However, Gitbox does still have a few weird bugs that seem to have gotten worse on Mavericks.

## An update, soon?

These two commands made sure I never have to truncate my preference file and add all my repos again, but this does not mean there are still a few weird bugs left in Gitbox.

Let's hope the [developer][oleganza] breaks the radio silence surrounding Gitbox and releases an update with a whole lot of bugfixes [anytime now][twitter-mavericks-soon].

[gitbox]: http://www.gitboxapp.com
[oleganza]: https://twitter.com/oleganza
[app-nap]: http://www.apple.com/osx/advanced-technologies/
[twitter-main-window]: https://twitter.com/search?q=Gitbox%20main%20window
[twitter-search]: https://twitter.com/search?q=Gitbox%20update
[twitter-mavericks-soon]: https://twitter.com/gitboxapp/status/393259537517789184
