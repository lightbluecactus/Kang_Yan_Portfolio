<?php
// this is for debug, see error message in Response. remove it later
// ini_set('display_errors', 1);

header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json; charset=UTF-8');

$end_result = [];
// first-step test: make up a JSON object and check if it loads in Preview
// $end_result = $_POST;

$visitor_name = '';
$visitor_email = '';
$visitor_topic = $_POST['topic'];
$visitor_comment = '';

$not_empty_firstname = $not_empty_lastname = $not_empty_email = false;

// Google reCAPTCHA
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
    $recaptcha_data = [
        'secret' => '6LdHBGAdAAAAACiHs_V6-LZ5IymYa7-9vyHRsa3U',
        'response' => $_POST['token'],
        'remoteip' => $_SERVER['REMOTE_ADDR']
    ];
    $options = array(
        'http' => array(
            'header' => 'Content-type: application/x-www-form-urlencoded\r\n',
            'method' => 'POST',
            'content' => http_build_query($recaptcha_data) // this will add all data together
        )
    );
    $context = stream_context_create($options);
    $recaptcha_response = file_get_contents($recaptcha_url, false, $context); // these two creates the long url

    $recaptcha = json_decode($recaptcha_response, true);

    if ($recaptcha['success'] == 1 && $recaptcha['score'] >= 0.5) {
        // check if reqiured data is filled
        // firstname
        if (empty($_POST['firstname'])) {
            $end_result['message'] = sprintf('Please fill in your first name.');
        } else {
            $not_empty_firstname = true;
        }
        // lastname
        if (empty($_POST['lastname'])) {
            $end_result['message'] = sprintf('Please fill in your last name.');
        } else {
            $not_empty_lastname = true;
        }
        // email
        if (empty($_POST['email'])) {
            $end_result['message'] = sprintf('Please fill in your email.');
        } else {
            $not_empty_email = true;
        }
    } else {
        // fail to pass reCAPTCHA
        $end_result['message'] = sprintf('You did not pass the reCAPTCHA validation. Please try again.');
    }
}

// 1. validate the data
    // the object key 'firstname' comes from <input name="">
    // isset checks if the input has a key (some browers don't have required attribute)
    // then sanitize it into string-only data
if (isset($_POST['firstname'])) {
    $visitor_name = filter_var($_POST['firstname'], FILTER_SANITIZE_STRING);
}  
if (isset($_POST['lastname'])) {
    // combine the first & last name
    $visitor_name .= ' '.filter_var($_POST['lastname'], FILTER_SANITIZE_STRING);
}

if (isset($_POST['email'])) {
    if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        $visitor_email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    } else { 
        $end_result['message'] = sprintf('Please leave a valid email.');
    }
}

if (isset($_POST['comment'])) {
    // prevent inputs like <script> to damage database
    $visitor_comment = filter_var(htmlspecialchars($_POST['comment']), FILTER_SANITIZE_STRING);

    if (strlen($visitor_comment) > 500 ) {
        $end_result['message'] = sprintf('Please make your message shorter.');
    }
}

$end_result['name'] = $visitor_name;
$end_result['email'] = $visitor_email;
$end_result['topic'] = $visitor_topic;
$end_result['comment'] = $visitor_comment;
// $end_result['message'] will be sent to contact.js to generate alert


// 2. prepare the email
    // won't trigger email if any one checks false
if ($not_empty_firstname && $not_empty_lastname && $not_empty_email) {

    $email_subject = 'Inquiry from Portfolio Site';
    $email_recipient = 'rainshadow_site@sample.com'; 
    // %s is a placeholder. format the message in the way defined:
    $email_message = sprintf('Name: %s, Email: %s, Topic: %s, Message: %s', $visitor_name, $visitor_email, $visitor_topic, $visitor_comment);
    // make sure to run the code in PHP 7.4+ to make an array, otherwise change it to a string -> https://www.php.net/manual/en/function.mail.php
    $email_headers = array(
    // best practice to have an email set up in noreply@yourdomain.com
    'From'=>'noreply@rainshadowportfolio.com',
    'Reply-To'=>$visitor_email,
    // if host provider don't give an email, use:
        // 'From'=>$visitor_email
    );

// 3. send out the email
    // mail function returns to TRUE/FALSE value
    $email_result = mail($email_recipient, $email_subject, $email_message, $email_headers);

    if ($email_result) {
        $end_result['message'] = sprintf('Thank you for contacting us. I will reply back soon.');
    } else {
        $end_result['message'] = sprintf('We are sorry but the email did not go through.');
    }
}


echo json_encode($end_result);