<?php header('Location: ' . $_SERVER['HTTP_REFERER']);
?>
<?php 

require 'class.phpmailer.php';

$nombre = $_POST['nombre'];
$mailContacto = $_POST['mail'];
$empresa = $_POST['empresa'];





$mail = new PHPMailer;

$mail->IsSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'mail.viridis.cl;';  // Specify main and backup server
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'msuarez@viridis.cl';                            // SMTP username
$mail->Password = 'viridi5';                           // SMTP password
$mail->Port = '25';
$mail->From = $contact;
$mail->FromName = 'Contacto Web';
$mail->AddAddress('qvdz.grafica@gmail.com', 'Contacto MD');  // Add a recipient
$mail->WordWrap = 50;                                 // Set word wrap to 50 characters
$mail->IsHTML(true);                                  // Set email format to HTML

$mensaje = "Este mensaje fue enviado por " . $nombre . ",
 de la empresa " . $empresa . " \r\n";
$mensaje .= "Su e-mail es: " . $mailContacto . " \r\n";
$mensaje .= "Mensaje: " . $_POST['mensaje'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());
$mail->Subject = 'Contacto MD';
$mail->Body    = $mensaje;
$mail->AltBody = $mensaje;

if(!$mail->Send()) {
   echo 'Message could not be sent.';
   echo 'Mailer Error: ' . $mail->ErrorInfo;
   exit;
}
//echo "mensaje enviado";


?>