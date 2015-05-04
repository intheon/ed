<?php

require_once("swift/swift_required.php");

if (isset($_POST['from']) && isset($_POST['to']) && isset($_POST['msg']) && isset($_POST['email']))
{
	$from  			= $_POST['from'];
	$to  			= $_POST['to'];
	$msg  			= $_POST['msg'];
	$email  		= $_POST['email'];

	// vars from POST

	// this crap plays nice with the swiftmailer plugin

	$transport = Swift_SmtpTransport::newInstance("smtp.gmail.com", 465)
		->setUsername("edhallsmtpmailer@gmail.com")
		->setPassword("edhallsmtpmailer11")
		->setEncryption("ssl");

	$mailer = Swift_Mailer::newInstance($transport);

	$message = Swift_Message::newInstance()
		->setSubject("Ed someone messaged you from your website")
		->setFrom(array($email => $from))
		->setTo(array("allobon@gmail.com" => "Ed Hall"))
		->setBody($msg);

	$result = $mailer->send($message);

}
?>