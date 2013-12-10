// Trigger homepage logo animation when the image is loaded
$(document).ready(function ()
{
	if ($('h1.logo').length > 0)
	{
		$('h1.logo').css('background-image', 'none');

		var logo_img = new Image();
		logo_img.onload = function()
		{
			$('h1.logo').css('background-image', 'url('+logo_img.src+')');
			$('h1.logo').addClass('animation')
		}

		// Make sure image is always loaded so animation gets always displayed
		logo_img.src = '/assets/img/logo.png?v='+(new Date()).getMilliseconds();
	}
});