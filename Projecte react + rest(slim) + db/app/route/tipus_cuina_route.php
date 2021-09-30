<?php
use App\Model\Establiment;
use App\Model\Tipus_cuina;

$app->group('/tipus_cuina/', function () {
   
    /*Cuant posin surti la llista de tots els establiments */
    /* Hi accedim anant a: http://localhost/ServidorDAW20-21/rest/rest/public/tipus_cuina/ */
    
    //treure tots els tipus_cuina
    $this->get('', function ($req, $res, $args) {
        $obj = new Tipus_cuina();   
        return $res
           ->withHeader('Content-type', 'application/json')
           ->getBody()
           ->write(
            json_encode(
                $obj->getAll()
            )
        );         
    });

    //cerca/treure un establiment per id
    $this->get('{id}', function ($req, $res, $args) {
        $obj = new Tipus_cuina();   
        return $res
           ->withHeader('Content-type', 'application/json')
           ->getBody()
           ->write(
            json_encode(
                $obj->get($args["id"])
            )
        );         
    });

    
    // // insertar - se insertaran els atributs del client insertar -> tipus
    // $this->post('', function($req, $res, $args){
    //     $atributs=$req->getParsedBody();  //llista atributs del client
    //     $obj = new Tipus_cuina();   
    //     return $res
    //        ->withHeader('Content-type', 'application/json')
    //        ->getBody()
    //        ->write(
    //         json_encode(
    //             $obj->insert($atributs)
    //         )
    //     );         
    // });

    $this->post('', function($req, $res){
        $obj = new Tipus_cuina();
        return $res
        ->withHeader('Content-type', 'application/json')
        ->getBody()
        ->write(
            json_encode(
                $obj->insert($req->getParsedBody())
            )
            );
    });

    //***Una altre manera de insertar***
    //insertar - se insertaran els atributs del client. El que s'ha d'insertar -> /{tipus_cuina}
    //http://localhost/ServidorDAW20-21/rest/rest/public/tipus_cuina/
    //pasar per x-www-form-urlencoded el tipus
    $this->post('{tipus}', function($req, $res, $args){
        $atributs=$req->getParsedBody();  //llista atributs del client
        $atributs["tipus"]=$args["tipus"]; // Afegim id a la llista d'atributs
        $obj = new Tipus_cuina();   
        return $res
           ->withHeader('Content-type', 'application/json')
           ->getBody()
           ->write(
            json_encode(
                $obj->insert($atributs)
            )
        );         
    });

    //borrar una tupla establiment per id
    //http://localhost/ServidorDAW20-21/rest/rest/public/tipus_cuina/10
    $this->delete('{id}', function ($req, $res, $args) {
        $obj = new Tipus_cuina();
        return $res
           ->withHeader('Content-type', 'application/json')
           ->getBody()
           ->write(
            json_encode(
                $obj->delete($args["id"])
            )
        ); 
    });
        
    //actualitzar
    //http://localhost/ServidorDAW20-21/rest/rest/public/tipus_cuina/8/Argentì
    $this->put('{id}/{tipus_nou}', function ($req, $res, $args) {
        $atributs=$req->getParsedBody();  //llista atributs del client
        $atributs["id"]=$args["id"];
        $atributs["tipus_nou"]=$args["tipus_nou"]; // Afegim id a la llista d'atributs
        $obj = new Tipus_cuina();
        return $res
           ->withHeader('Content-type', 'application/json')
           ->getBody()
           ->write(
            json_encode(
                $obj->update($atributs["id"], $atributs["tipus_nou"])
            )
        ); 
    });  

});
