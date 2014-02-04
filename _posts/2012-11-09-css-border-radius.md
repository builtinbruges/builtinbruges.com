---
title: CSS Border Radius
description: A more convenient way to define CSS border radius rules together with the border size, style and color in one line

layout: post
wrapper: true
---
If you're familiar with CSS, you might know that writing

```css
border: 1px solid #fff
```

is a short form of

```css
border-width: 1px;
border-style: solid;
border-color: #fff;
```

As the example shows, you can easily combine the three `border-width`, `border-style` and `border-color` properties into one simple, *short-form* `border` definition like this: `border: <border-width> <border-style> <border-color>`. Pretty basic, every web developer uses this all the time.

One thing I find annoying lately is constantly having to write CSS like this if I want to use a border radius:

```css
border: 1px solid #fff;
border-radius: 3px;
```

Wouldn't it be nice if we were able to include the `border-radius` in the *short-form* `border` definition, like this:

```css
border: 1px solid #fff 3px;
```

So, what I'm writing here would be a short `border` definition where I can include the `border-radius` in the `border` property like this:

```css
border: <border-width> <border-style> <border-color> <border-radius>;
```

If you try this today, it just breaks the `border` definition and your browser doesn't parse the line. It would be pretty cool if browsers could also parse this kind of *short-form* `border` definition.

Just a thought...