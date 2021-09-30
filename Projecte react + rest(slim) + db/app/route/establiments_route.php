<?php
use App\Model\Establiment;

$app->group('/establiment/', function () {
   
    /*Cuant posin surti la llista de tots els establiments */

    /* Hi accedim anant a: http://localhost/ServidorDAW20-21/rest/rest/public/establiment/ */
    
    //get
    //treure tots els establiments
    //http://localhost/ServidorDAW20-21/rest/rest/public/establiment/
    $this->get('booleanDestacat', function ($req, $res, $args) {

        $obj = new Establiment();   
        return $res
           ->withHeader('Content-type', 'application/json')
           ->getBody()
           ->write(
            json_encode(
                $obj->getAllBoolean()
            )
        );         
    });


    //get
    //treure tots els establiments
    //http://localhost/ServidorDAW20-21/rest/rest/public/establiment/booleanDestacat
    $this->get('', function ($req, $res, $args) {

        $obj = new Establiment();   
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
    //http://localhost/ServidorDAW20-21/rest/rest/public/establiment/1
    $this->get('{id}', function ($req, $res, $args) {
        $obj = new Establiment();   
        return $res
           ->withHeader('Content-type', 'application/json')
           ->getBody()
           ->write(
            json_encode(
                $obj->get($args["id"])
            )
        );         
    });

    
    // // insertar - se insertaran els atributs del client /{latitud}/{longitud}/{nom_comercial}/{id_preu}
    // $this->post('', function($req, $res, $args){
    //     $atributs=$req->getParsedBody();  //llista atributs del client
    //     $obj = new Establiment();   
    //     return $res
    //        ->withHeader('Content-type', 'application/json')
    //        ->getBody()
    //        ->write(
    //         json_encode(
    //             $obj->insert($atributs)
    //         )
    //     );         
    // });

    // post - insertar
    //http://localhost/ServidorDAW20-21/rest/rest/public/establiment/
    //per x-www-form-urlencoded li pasam latitud, longitud, nom_comercial, horari_obertura, boolean_destacat, poblacio, carrer, numero, telefon, id_preu
    $this->post('', function($req, $res){
        $obj = new Establiment();
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
    // insertar - se insertaran els atributs del client. El que s'ha d'insertar -> /{latitud}/{longitud}/{nom_comercial}/{id_preu}
    $this->post('{latitud}/{longitud}/{nom_comercial}/{id_preu}', function($req, $res, $args){
        $atributs=$req->getParsedBody();  //llista atributs del client
        $atributs["latitud"]=$args["latitud"];
        $atributs["longitud"]=$args["longitud"];
        $atributs["nom_comercial"]=$args["nom_comercial"];
        $atributs["id_preu"]=$args["id_preu"];     // Afegim id a la llista d'atributs
        $obj = new Establiment();   
        return $res
           ->withHeader('Content-type', 'application/json')
           ->getBody()
           ->write(
            json_encode(
                $obj->insert($atributs)
            )
        );         
    });

    // delete
    //borrar una tupla establiment per id
    //http://localhost/ServidorDAW20-21/rest/rest/public/establiment/67
    $this->delete('{id}', function ($req, $res, $args) {
        $obj = new Establiment();
        return $res
           ->withHeader('Content-type', 'application/json')
           ->getBody()
           ->write(
            json_encode(
                $obj->delete($args["id"])
            )
        ); 
    });
    
    //put - actualitzar
    //http://localhost/ServidorDAW20-21/rest/rest/public/establiment/20/nouNomComercial/21:00h/descripcio nova
    $this->put('{id}/{nom_comercial}/{horari_obertura_nou}/{descripcio_general_nou}', function ($req, $res, $args) {
        $atributs=$req->getParsedBody();  //llista atributs del client
        $atributs["id"]=$args["id"];
        $atributs["nom_comercial"]=$args["nom_comercial"];
        $atributs["horari_obertura_nou"]=$args["horari_obertura_nou"];
        $atributs["descripcio_general_nou"]=$args["descripcio_general_nou"];     // Afegim id a la llista d'atributs
        $obj = new Establiment();
        return $res
           ->withHeader('Content-type', 'application/json')
           ->getBody()
           ->write(
            json_encode(
                $obj->update($atributs["id"], $atributs["nom_comercial"], $atributs["horari_obertura_nou"], $atributs["descripcio_general_nou"])
            )
        ); 
    });  


});

