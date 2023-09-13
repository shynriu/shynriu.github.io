<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "jimmy.tran@epitech.eu";
    $subject = "Contact Form Submission";

    $fullname = $_POST["fullname"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    $messageBody = "Full Name: $fullname\n";
    $messageBody .= "Email: $email\n";
    $messageBody .= "Phone Number: $phone\n\n";
    $messageBody .= "Message:\n$message";

    $headers = "From: $email";

    if (mail($to, $subject, $messageBody, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Email sending failed. Please try again later.";
    }
}
?>
