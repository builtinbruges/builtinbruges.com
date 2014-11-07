---
title: Getting Gitbox to run properly on Mac OS X 10.10 Yosemite
description: How to get Gitbox to run nicely on Mac OS X 10.10 Yosemite. It's been so long since an update and it the app became abandonware. These tips will help you to run Gitbox as smooth as possible on Yosemite.
layout: en/post
lang: en
---

As described in my previous guide, [getting Gitbox to run on OS X 10.9 Mavericks][previous-guide], it's been a long time since one of the (once) best OS X Git applications has received an update. The last update dates from Apr 16, 2012. That's almost **two and a half years** ago!

A few weeks ago, OS X 10.10 arrived and Gitbox did not see **any** updates during my OS X 10.9 usage period.

To get Gitbox running, all steps from my [previous guide][previous-guide] remain valid:

- Remove Gitbox preferences when your main windows doesn't show up.
- Disable app nap for Gitbox.

To find **more information** about these steps I gladly forward you to the "[Getting Gitbox to run on OS X 10.9 Mavericks][previous-guide]" guide.

However, that being said, since I've updated, some new issues seems to be surfacing and a long awaited update of the app seems even more necessary.

The new, extra set of issues the 3 year old Gitbox is experiencing, are related to the [user interface refresh][yosemite-design] of Yosemite. The toolbar and sidebar don't seem to handle the refresh that well.

## New GUI issues

The Gitbox toolbar's "Add Repository" button seems to be weirdly positioned to the left, while it should be positioned in the center.

![Gitbox Toolbar](/img/blog/2014/gitbox-toolbar.jpg)

In the sidebar, activity indicators don't seem to be prepared for the transparent Yosemite sidebars.

![Gitbox Sidebar Spinners](/img/blog/2014/gitbox-sidebar.jpg)

## What now?

Although most users would be happy to pay for *any* update of this application, I have given up hope, and started looking for alternatives.

Right now, the three best git applications on OS X seem to be [Sourcetree][sourcetree], [Tower][tower] and the [GitHub Mac app][github-mac]. Please, [let me know][twitter] if I missed other alternatives...

For me, the simplicity of Gitbox was one of the main usage reasons. So for now I seem to be leaning to **Tower**, which has seen some nice user interface updates in version 2, looks great on Yosemite, and is, in contrary to Gitbox, still under active development.

What about you? What are your issues with Gitbox? Did you switch to another application? [Follow me on twitter and let me know][twitter]!

[previous-guide]: http://www.builtinbruges.com/2014/04/gitbox-on-os-x-mavericks/
[yosemite-design]: http://www.apple.com/osx/design/
[sourcetree]: http://www.sourcetreeapp.com/
[tower]: http://www.git-tower.com/
[github-mac]: https://mac.github.com/
[twitter]: http://www.twitter.com/brtdv
