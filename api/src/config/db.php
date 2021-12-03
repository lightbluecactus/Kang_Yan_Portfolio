<?php

class db
{
    private $host = 'localhost';

    private $db_name = 'db_portfolio';

    private $username = 'root';

    private $password = '';

    public function connect(){

        $db_dsn = array(
            'host' => $this->host,
            'dbname' => $this->db_name,
            'charset' => 'utf8',
        );

        // for Docker uers only
        if (getenv('IDP_ENVIRONMENT') === 'docker') {
            $db_dsn['host'] = 'mysql';
            $this->username = 'docker_u';
            $this->password = 'docker_p';
        }

        // in the "try" block, some codes may have issue
        // if it fails, runthe code block in "catch" block to handle them
        try{
            // this is database connection
            // PDO is the modern way to connect db
            $dsn     = 'mysql:' . http_build_query($db_dsn, '', ';');
            $db_conn = new PDO($dsn, $this->username, $this->password);
        } catch (PDOException $exception) {
            echo json_encode(array(
                'error'   => 'Database connection failed',
                'message' => $exception->getMessage(),
            ));
            exit;
        }

        $db_conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        return $db_conn;
    }
}