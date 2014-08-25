---
title: Using Ajax Content in Jekyll websites - Updated for universal analytics
description: This post explains how you can easily load pages through AJAX in your jekyll project, and how to push pageviews to Google's universal analytics.
layout: en/post
lang: en
date: 2014-08-25T23:57:26+02:00
---
This post is a follow-up to my previous post, ["Using Ajax Content in Jekyll websites"][previous-post-url]. In that post I explained how you can easily use [History.js][History-js] to integrate ajax loading of pages while still making sure your page url changes in the location bar and you don't break your back/forward history buttons in your jekyll website project.

The code snippet also contained code that pushed a new pageview to Google Analytics. However, things have changed a bit since that last blogpost and you probably switched to universal analytics.

So I updated the snippet to make sure it also works with universal analytics. You can find the new snippet below. Make sure you're also using jQuery on the page!

```javascript
jQuery(document).ready(function($) {
	var siteUrl = 'http://'+(document.location.hostname||document.location.host);

	// Make sure that all clicked links that link to your internal website
	// don't just reload the page but execute a History.pushState call
	$(document).delegate('a[href^="/"],a[href^="'+siteUrl+'"]', "click", function(e) {
		e.preventDefault();
		History.pushState({}, "", this.pathname);
	});

	// Catch all History stateChange events
	History.Adapter.bind(window, 'statechange', function(){
		var State = History.getState();

		// Load the new state's URL via an Ajax Call
		$.get(State.url, function(data){
			// Replace the "<title>" tag's content
			document.title = $(data).find("title").text();

			// Replace the content of the main container (.content)
			// If you're using another div, you should change the selector
			$('.content').html($(data).find('.content'));

			// If you're using Google analytics, make sure the pageview is registered!
			ga('send', 'pageview', {
				'page': State.url,
				'title': document.title
			});
		});
	});
});
```

[previous-post-url]: /2013/08/using-ajax-content-in-jekyll/
[history-js]: https://github.com/browserstate/history.js
