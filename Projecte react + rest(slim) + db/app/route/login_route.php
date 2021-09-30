<?php
use App\Model\Usuari;

$app->group('/login/', function() {
        
    $this->post('', function($req, $res, $args) {
        $input=$req->getParsedBody();
        $correuElectronic = $input['correuElectronic'];
        $contrasenya = md5($input['contrasenya']);
        
        $obj = new Usuari();   
        return $res
           ->withHeader('Content-type', 'application/json')
           ->getBody()
           ->write(
            json_encode(
                $obj->login($correuElectronic,$contrasenya)
            ));
    });
});