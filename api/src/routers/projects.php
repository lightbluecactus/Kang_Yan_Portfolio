<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

// to fetch the data with specific ID
    // {movies_id} is a dynamic content. with dynamic data, add third param $args
    // everything inside [] is optional - Slim can run with or without it
$app->get('/data/[{project_id}/]', function (Request $request, Response $response, $args) {
    $query_args = $request->getQueryParams();
    // check if 'project_id' exists
    $project_id   = isset($args['project_id']) ? $args['project_id'] : '';

    $db      = new db();
    $db_conn = $db->connect();
   
    $query   = 'SELECT * FROM tbl_projects';
        // if there is $project_id, change the query to get specific id row of data
        if (!empty($project_id)) {
            $query .= ' WHERE m.movies_id = :id';
        }

    // this is for debugging, copy the query shown on page and paste to phpmyadmin to test the query
    // echo $query;
    // exit;

    $stmt    = $db_conn->prepare($query);
         // if there is $project_id, bind the column "movies_id" with $project_id
        if (!empty($project_id)) {
            $stmt->bindParam(':id', $project_id);
        }

    $stmt->execute();
    $project_data = json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));

    $response->getBody()->write($project_data);

    return $response->withHeader('Content-Type', 'application/json');
});

// additional function: pagination system
    // by default, any API endpoint without specific limit qill return to 5 per page
    // user can set ?limit=X but the limit should not be more than 10
    //if uer want to see more, they can add ?page=X to jump to different pages
    //if the page query parameter is more than the actual total pages, renturn the last page

$app->run();