---
title: Using Ajax Content in Jekyll websites
layout: post
---
This post is a follow-up to my previous post, ["Using traditional URLs in Javascript web applications"][previous-post-url].

When building a Jekyll site, sometimes it's desirable to have the page content loaded through an ajax call. One requirement would be that, when clicking a link, the URL in the address bar also changes, so your visitor can still easily copy/paste or share the current page  he's viewing.

I came across a pretty simple solution on GitHub: '[Jekyl-AJAX][jekyll-ajax]'. I even contributed [a little bit][jekyll-ajax-contributions]. By adding the following code to your page, you can fairly easy implement this behaviour in your Jekyll website:

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
            _gaq.push(['_trackPageview', State.url]);
        });
    });
});
```

Note: the above snippet asumes you're also using jQuery on your website.

Extra additions or feedback? Check out [the repository on GitHub][jekyll-ajax]!

[previous-post-url]: /2013/07/why-javascript-web-applications-should-embrace-traditional-urls/
[jekyll-ajax]: https://github.com/joelhans/Jekyll-AJAX
[jekyll-ajax-contributions]: https://github.com/joelhans/Jekyll-AJAX/graphs/contributors