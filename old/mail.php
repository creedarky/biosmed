<?php 
require 'class.phpmailer.php';

echo "1";
$name = $_POST["nombre"];
echo "2";
$contact = $_POST["mail"];
echo "3";
$comment = $_POST["mensaje"];




$mail = new PHPMailer;

$mail->IsSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'mail.viridis.cl;';  // Specify main and backup server
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'msuarez@viridis.cl';                            // SMTP username
$mail->Password = 'viridi5';                           // SMTP password
$maio->Port = '25';
$mail->From = $contact;
$mail->FromName = 'Contacto Web';
$mail->AddAddress('qvdz.grafica@gmail.com', 'Contacto MD');  // Add a recipient
$mail->WordWrap = 50;                                 // Set word wrap to 50 characters
$mail->IsHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Contacto MD';
$mail->Body    = "<p>Lo ha contactado <b>".$name."</b> dirección de correo: ".$contact."</p><p><b>Mensaje:</b><p>".$comment."</p>";
$mail->AltBody = "Lo ha contactado ".$name." dirección de correo: ".$contact."\n".$comment;

if(!$mail->Send()) {
   echo 'Message could not be sent.';
   echo 'Mailer Error: ' . $mail->ErrorInfo;
   exit;
}
echo "mensaje enviado";
?>