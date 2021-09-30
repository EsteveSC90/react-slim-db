<?php

use App\Model\Preu;
//use App\Model\Preu;

$app->group('/preu/', function () {
   
    /*Cuant posin surti la llista de tots els establiments */
    /* Hi accedim anant a: http://localhost/ServidorDAW20-21/rest/rest/public/preu/ */
    
    //treure totes les fotografies
    $this->get('', function ($req, $res, $args) {
        $obj = new Preu();   
        return $res
           ->withHeader('Content-type', 'application/json')
           ->getBody()
           ->write(
            json_encode(
                $obj->getAll()
            )
        );         
    });

    //http://localhost/ServidorDAW20-21/rest/rest/public/preu/{id}
    //cerca/treure un establiment per id
    $this->get('{id}', function ($req, $res, $args) {
        $obj = new Preu();   
        return $res
           ->withHeader('Content-type', 'application/json')
           ->getBody()
           ->write(
            json_encode(
                $obj->get($args["id"])
            )
        );         
    });

    
    // insertar - se insertaran els atributs del client /{latitud}/{longitud}/{nom_comercial}/{id_preu}
    $this->post('', function($req, $res, $args){
        $atributs=$req->getParsedBody();  //llista atributs del client
        $obj = new Preu();   
        return $res
           ->withHeader('Content-type', 'application/json')
           ->getBody()
           ->write(
            json_encode(
                $obj->insert($atributs)
            )
        );         
    });

    // //http://localhost/ServidorDAW20-21/rest/rest/public/usuari/
    // //PER X.WWW.FORM.URLENCODED li passam nom, primer_cognom, segon_cognom, poblacio, carrer, numero, pis, correuElectronic, contrasenya, boolean_tipus_usuari
    // $this->post('', function($req, $res){
    //     $obj = new Usuari();
    //     return $res
    //     ->withHeader('Content-type', 'application/json')
    //     ->getBody()
    //     ->write(
    //         json_encode(
    //             $obj->insert($req->getParsedBody())
    //         )
    //         );
    // });

    //http://localhost/ServidorDAW20-21/rest/rest/public/usuari/2
    //borrar una tupla establiment per id
    $this->delete('{id}', function ($req, $res, $args) {
        $obj = new Preu();
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
    //http://localhost/ServidorDAW20-21/rest/rest/public/preu/4/aasd
    $this->put('{id_preu}/{categoria_preus}', function ($req, $res, $args) {
        $atributs=$req->getParsedBody();  //llista atributs del client
        $atributs["id_preu"]=$args["id_preu"];
        $atributs["categoria_preus"]=$args["categoria_preus"];
       

        // Afegim id a la llista d'atributs
        $obj = new Preu();
        return $res
           ->withHeader('Content-type', 'application/json')
           ->getBody()
           ->write(
            json_encode(
                $obj->update($atributs["id_preu"], $atributs["categoria_preus"])
            )
        ); 
    });  

});
