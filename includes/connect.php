<?php 
    $db_dsn = array( 
        'host' => 'mysql.rainshadowportfolio.com', // this will change when you go live
        'dbname' => 'db_rsdportfolio', // update this with your database name
        'charset' => 'utf8'
    );

    $dsn = 'mysql:'.http_build_query($db_dsn, '', ';');

    //This is the DB credentials

    $db_user = 'rsd_db_portfolio';
    $db_pass = 'dragon*FIREton05'; 

    try {
        $pdo = new PDO($dsn, $db_user, $db_pass);
        // var_dump($pdo);
        // echo (in this case) is almost like console.log
        // echo "you're in! enjoy the show";
    } catch (PDOException $exception){
        echo 'Connection Error:'.$exception->getMessage();
        exit();
    }