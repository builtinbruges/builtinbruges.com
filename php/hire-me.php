<?PHP
function is_email($str)
{
	return (filter_var($str, FILTER_VALIDATE_EMAIL) === false) ? false : true;
}

$name    = (isset($_POST['name'])) ? $_POST['name'] : '';
$company = (isset($_POST['company'])) ? $_POST['company'] : '-';
$email   = (isset($_POST['email'])) ? $_POST['email'] : '';
$message = (isset($_POST['message'])) ? $_POST['message'] : '';

if (empty($name) || empty($message) || !is_email($email))
{
	header('Location: /');
	die(0);
}

$message = '
<div style="font: 14px/30px Helvetica Neue, Helvetica, Arial, Verdana, sans-serif;">
Message from: '.htmlspecialchars($name).' <br />
Email: '.htmlspecialchars($email).'
<hr />
'.nl2br(htmlspecialchars($message)).'
</div>';

$to      = 'hello@builtinbruges.com';
$subject = 'Contact Request from builtinbruges.com';

//
$headers  = 'MIME-Version: 1.0'."\r\n";
$headers .= 'Content-type: text/html; charset=UTF-8'."\r\n";

// Additional headers
$headers .= 'To: Built in Bruges <hello@builtinbruges.com>'."\r\n";
$headers .= 'From: Built in Bruges Mail Monkey <mailmonkey@builtinbruges.com>'."\r\n";
$headers .= 'Reply-To: '.$email."\r\n" .

mail($to, $subject, $message, $headers);

header('Location: /thanks/');
die(0);
