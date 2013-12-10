// Trigger homepage logo animation when the image is loaded
$(document).ready(function ()
{
	if ($('h1.logo').length > 0)
	{
		var logo_img = new Image();
		logo_img.onload = function() {
			$('h1.logo').addClass('animation')
		}

		logo_img.src = '/assets/img/logo.png';
	}

})