// Trigger homepage logo animation when the image is loaded
$(document).ready(function ()
{
	if ($('.index h1').length > 0)
	{
		$('.index h1').removeClass('no-js')

		var logo_img = new Image();
		logo_img.onload = function()
		{
			// $('.index h1').css('background-image', 'url('+logo_img.src+')');
			$('.index h1').addClass('animation')
		}

		// Make sure image is always loaded so animation gets always displayed
		logo_img.src = '/assets/img/logo-white@2x.png?v='+(new Date()).getMilliseconds();
	}
});