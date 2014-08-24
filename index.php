<?PHP
// Redirect based on accept_language
if (ereg("nl", $_SERVER['HTTP_ACCEPT_LANGUAGE']))
{
	header("Location: http://www.builtinbruges.com/nl/home");
}
else
{
	header("Location: http://www.builtinbruges.com/en/home");
}
