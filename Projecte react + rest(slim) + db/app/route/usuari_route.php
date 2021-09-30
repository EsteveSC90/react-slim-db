<?php
use App\Model\Usuari;

$app->group('/usuari/', function () {
   
    /*Cuant posin surti la llista de tots els establiments */
    /* Hi accedim anant a: http://localhost/ServidorDAW20-21/rest/rest/public/usuari/ */
    
    //treure tots els establiments
    $this->get('', function ($req, $res, $args) {
        $obj = new Usuari();   
        return $res
           ->withHeader('Content-type', 'application/json')
           ->getBody()
           ->write(
            json_encode(
                $obj->getAll()
            )
        );         
    });

    //http://localhost/ServidorDAW20-21/rest/rest/public/usuari/{id}
    //cerca/treure un establiment per id
    $this->get('{id}', function ($req, $res, $args) {
        $obj = new Usuari();   
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


    //http://localhost/ServidorDAW20-21/rest/rest/public/usuari/
    //PER X.WWW.FORM.URLENCODED li passam nom, primer_cognom, segon_cognom, poblacio, carrer, numero, pis, correuElectronic, contrasenya, boolean_tipus_usuari
    $this->post('', function($req, $res){
        $obj = new Usuari();
        return $res
        ->withHeader('Content-type', 'application/json')
        ->getBody()
        ->write(
            json_encode(
                $obj->insert($req->getParsedBody())
            )
            );
    });

    //http://localhost/ServidorDAW20-21/rest/rest/public/usuari/2
    //borrar una tupla establiment per id
    $this->delete('{id}', function ($req, $res, $args) {
        $obj = new Usuari();
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
    //http://localhost/ServidorDAW20-21/rest/rest/public/usuari/48/aasd/fasa/twew/lloseta/lluna/12/bjs/aasd@gmail.com/123/0
    $this->put('{id}/{nom}/{primer_cognom}/{segon_cognom}/{poblacio}/{carrer}/{numero}/{pis}/{correuElectronic}/{contrasenya}/{boolean_tipus_usuari}', function ($req, $res, $args) {
        $atributs=$req->getParsedBody();  //llista atributs del client
        $atributs["id"]=$args["id"];
        $atributs["nom"]=$args["nom"];
        $atributs["primer_cognom"]=$args["primer_cognom"];
        $atributs["segon_cognom"]=$args["segon_cognom"];
        $atributs["poblacio"]=$args["poblacio"];
        $atributs["carrer"]=$args["carrer"];
        $atributs["numero"]=$args["numero"];
        $atributs["pis"]=$args["pis"];
        $atributs["correuElectronic"]=$args["correuElectronic"];
        $atributs["contrasenya"]=$args["contrasenya"];
        $atributs["boolean_tipus_usuari"]=$args["boolean_tipus_usuari"];

        // Afegim id a la llista d'atributs
        $obj = new Usuari();
        return $res
           ->withHeader('Content-type', 'application/json')
           ->getBody()
           ->write(
            json_encode(
                $obj->update($atributs["id"], $atributs["nom"], $atributs["primer_cognom"], $atributs["segon_cognom"], $atributs["poblacio"], $atributs["carrer"], $atributs["numero"], $atributs["pis"], $atributs["correuElectronic"], $atributs["contrasenya"], $atributs["boolean_tipus_usuari"])
            )
        ); 
    });  



    //actualitzar
    //http://localhost/ServidorDAW20-21/rest/rest/public/usuari/48/123/
    $this->put('{id}/{contrasenya}', function ($req, $res, $args) {
        $atributs=$req->getParsedBody();  //llista atributs del client
        $atributs["id"]=$args["id"];
        $atributs["contrasenya"]=$args["contrasenya"];

        // Afegim id a la llista d'atributs
        $obj = new Usuari();
        return $res
           ->withHeader('Content-type', 'application/json')
           ->getBody()
           ->write(
            json_encode(
                $obj->updateContrasenya($atributs["id"], $atributs["contrasenya"])
            )
        ); 
    });  

});



