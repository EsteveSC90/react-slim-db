<?php
use App\Model\Establiment;

$app->group('/establiment/', function () {


    $this->delete('establimentDelete', function ($id) {
        $obj = new Establiment();   
        return $id
        
           ->withHeader('Content-type', 'application/json')
           ->getBody()
           ->write(
                $obj->delete($id)
        );         
    });
        
});

