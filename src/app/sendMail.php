<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header('Access-Control-Allow-Origin: https://www.dany-hudson.com');
        header('Access-Control-Allow-Methods: POST, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type');
        http_response_code(204);
        exit;
        case("POST"): //Send the email;
            header('Access-Control-Allow-Origin: https://www.dany-hudson.com');
            header('Content-Type: text/plain; charset=utf-8');
            // Payload is not send to $_POST Variable,
            // is send to php:input as a text
            $json = file_get_contents('php://input');
            //parse the Payload from text format to Object
            $params = json_decode($json);
    
            $email = $params->userEmail ?? '';
            $name = $params->userName ?? '';
            $message = $params->message ?? '';
    
            $recipient = 'mail@dany-hudson.com';
            $subject = "Contact Form <$email>";
            $messageBody = 'From: ' . htmlspecialchars($name) . '<br><br>' . nl2br(htmlspecialchars($message));

            $headers = [];
            $headers[] = 'MIME-Version: 1.0';
            $headers[] = 'Content-type: text/html; charset=utf-8';
            $headers[] = 'From: noreply@dany-hudson.com';
            $headers[] = 'Reply-To: ' . $email;

            if (mail($recipient, $subject, $messageBody, implode("\r\n", $headers))) {
                echo 'Message sent';
            } else {
                http_response_code(500);
                echo 'Message could not be sent';
            }
            exit;

            default:
                header('Allow: POST, OPTIONS', true, 405);
            exit;
}



//     for own emai adress:
//         <?php
// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\Exception;

// require 'path/to/PHPMailer/src/Exception.php';
// require 'path/to/PHPMailer/src/PHPMailer.php';
// require 'path/to/PHPMailer/src/SMTP.php';

// $mail = new PHPMailer(true);
// try {
//     $mail->isSMTP();
//     $mail->Host = 'send.one.com';
//     $mail->SMTPAuth = true;
//     $mail->Username = 'your@email.com';
//     $mail->Password = 'yourpassword';
//     $mail->SMTPSecure = 'ssl'; // or 'tls'
//     $mail->Port = 465; // or 587 for TLS

//     $mail->setFrom('your@email.com', 'Your Name');
//     $mail->addAddress('recipient@email.com');
//     $mail->Subject = 'Subject here';
//     $mail->Body    = 'Message body here';

//     $mail->send();
//     echo 'Message has been sent';
// } catch (Exception $e) {
//     echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
// }
