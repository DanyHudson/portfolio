<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): 
        header('Access-Control-Allow-Origin: https://www.dany-hudson.com');
        header('Access-Control-Allow-Methods: POST, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type');
        http_response_code(204);
        exit;
        case("POST"): 
            header('Access-Control-Allow-Origin: https://www.dany-hudson.com');
            header('Content-Type: text/plain; charset=utf-8');
            $json = file_get_contents('php://input');
           
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
