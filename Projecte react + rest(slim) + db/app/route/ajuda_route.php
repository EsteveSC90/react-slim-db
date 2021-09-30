<?php

use App\Model\Ajuda;
use App\Model\Establiment;

$app->group('/ajuda/', function () {

    $this->get('', function ($req, $res, $args) {
        return $res
            ->withHeader('Content-type', 'application/json')
            ->getBody()
            ->write(
                "<!DOCTYPE html>
             <html lang='en'>
             <head>
                 <meta charset='UTF-8'>
                 <meta name='viewport' content='width=device-width, initial-scale=1.0'>
                 <title>Document</title>
             </head>
             <style>
                body{
                    background-color: Beige;
                }

                 table, th, td {
                     border: 1px solid black;
                 }

                 .ajuda{
                    background-color: green;
                 }

                 .nom_taula{
                    background-color: CornflowerBlue;
                 }

                 table{
                    margin: auto;
                }

                

             </style>
             <body>
                     <table>
                         <tbody>
                             <tr class='ajuda'>
                                 <td>Method</td>
                                 <td>URI</td>
                             </tr>
                             <tr class='ajuda'>
                                 <td>AJUDA</td>
                                 <td>http://localhost/ServidorDAW20-21/rest/rest/public/ajuda/</td>
                             </tr>
                             <tr class='nom_taula'>
                                 <td><strong>TAULA</strong></td>
                                 <td><strong>ESTABLIMENT</strong></td>
                             </tr>
                             <tr>
                                 <td>GET - llista tots els establiments</td>
                                 <td>http://localhost/ServidorDAW20-21/rest/rest/public/establiment/</td>
                             </tr>
                             <tr>
                                 <td>GET - treu els numeros de boolean_destacat sense repeticions</td>
                                 <td>http://localhost/ServidorDAW20-21/rest/rest/public/establiment/booleanDestacat</td>
                             </tr>
                             <tr>
                                 <td>GET - llista un establiment cercant per ID</td>
                                 <td>http://localhost/ServidorDAW20-21/rest/rest/public/establiment/{id}</td>
                             </tr>
                             <tr>
                                <td>POST - inserta un establiment. <br/> S'han d'enviar els parametres: latitud, longitud, nom_comercial, id_preu</td>
                                <td>http://localhost/ServidorDAW20-21/rest/rest/public/establiment/</td>
                            </tr>
                            
                            <!--<tr>
                                <td>POST - inserta un establiment *** Una altre manera d'insertar ***</td>
                                <td>http://localhost/ServidorDAW20-21/rest/rest/public/establiment/{latitud}/{longitud}/{nom_comercial}/{id_preu}</td>
                            </tr>-->
                             <tr>
                                 <td>PUT - actualitza un establiment</td>
                                 <td>http://localhost/ServidorDAW20-21/rest/rest/public/establiment/{id}/{nom_comercial}/{horari_obertura}/{descripcio_general}</td>
                             </tr>
                             <tr>
                                 <td>DELETE - borra un establiment</td>
                                 <td>http://localhost/ServidorDAW20-21/rest/rest/public/establiment/{id}</td>
                             </tr>
                             <tr class='nom_taula'>
                                 <td><strong>TAULA</strong></td>
                                 <td><strong>TIPUS_CUINA</strong></td>
                             </tr>
                             <tr>
                                 <td>GET - llista tots els tipus de cuina(tipus_cuina)</td>
                                 <td>http://localhost/ServidorDAW20-21/rest/rest/public/tipus_cuina/</td>
                             </tr>
                             <tr>
                                 <td>GET - llista un tipus_cuina cercant per ID</td>
                                 <td>http://localhost/ServidorDAW20-21/rest/rest/public/tipus_cuina/{id}</td>
                             </tr>
                             
                             <tr>
                                <td>POST - inserta un tipus_cuina. <br/> S'han d'enviar els parametres: tipus</td>
                                <td>http://localhost/ServidorDAW20-21/rest/rest/public/tipus_cuina/</td>
                            </tr>
                            
                            <!--<tr>
                                <td>POST - inserta un tipus_cuina *** Una altre manera d'insertar ***</td>
                                <td>http://localhost/ServidorDAW20-21/rest/rest/public/tipus_cuina/{tipus}</td>
                            </tr>-->
                             <tr>
                                 <td>PUT - actualitza un tipus_cuina</td>
                                 <td>http://localhost/ServidorDAW20-21/rest/rest/public/tipus_cuina/{id}/{tipus_nou}</td>
                             </tr>
                             <tr>
                                 <td>DELETE - borra un tipus_cuina</td>
                                 <td>http://localhost/ServidorDAW20-21/rest/rest/public/tipus_cuina/{id}</td>
                             </tr>




                             <tr class='nom_taula'>
                                 <td><strong>TAULA</strong></td>
                                 <td><strong>USUARI</strong></td>
                             </tr>
                             <tr>
                                 <td>GET - llista tots els usuaris</td>
                                 <td>http://localhost/ServidorDAW20-21/rest/rest/public/usuari/</td>
                             </tr>
                             <tr>
                                 <td>GET - llista un usuari cercant per ID</td>
                                 <td>http://localhost/ServidorDAW20-21/rest/rest/public/usuari/{id}</td>
                             </tr>
                             <tr>
                                <td>POST - inserta un usuari. <br/> S'han d'enviar els parametres: 
                                nom, primer_cognom, segon_cognom, poblacio, carrer, numero, pis, correuElectronic, contrasenya, boolean_tipus_usuari</td>
                                <td>http://localhost/ServidorDAW20-21/rest/rest/public/usuari/</td>
                            </tr>
                            
                             <tr>
                                 <td>PUT - actualitza un usuari</td>
                                 <td>http://localhost/ServidorDAW20-21/rest/rest/public/usuari/{id}/{nom}/{primer_cognom}/{segon_cognom}/{poblacio}/{carrer}/{numero}/{pis}/{correuElectronic}/{contrasenya}/{boolean_tipus_usuari}</td>
                             </tr>
                             <tr>
                                 <td>PUT - actualitza un usuari - actualitza contrasenya</td>
                                 <td>http://localhost/ServidorDAW20-21/rest/rest/public/usuari/{id}/{contrasenya}</td>
                             </tr>
                             <tr>
                                 <td>DELETE - borra un usuari</td>
                                 <td>http://localhost/ServidorDAW20-21/rest/rest/public/usuari/{id}</td>
                             </tr>

                             <tr class='nom_taula'>
                                 <td><strong>TAULA</strong></td>
                                 <td><strong>FOTOGRAFIA</strong></td>
                             </tr>
                             <tr>
                                 <td>GET - llista tots els usuaris</td>
                                 <td>http://localhost/ServidorDAW20-21/rest/rest/public/fotografia/</td>
                             </tr>

                             <tr class='nom_taula'>
                                 <td><strong>TAULA</strong></td>
                                 <td><strong>LOGIN</strong></td>
                             </tr>
                             <tr>
                                 <td>POST - llista tots els usuaris PASAM JSON: correuElectronic, contrasenya </td>
                                 <td>http://localhost/ServidorDAW20-21/rest/rest/public/login/</td>
                             </tr>

                             <tr class='nom_taula'>
                                 <td><strong>TAULA</strong></td>
                                 <td><strong>PREU</strong></td>
                             </tr>
                             <tr>
                                 <td>GET - llista tots els preus: </td>
                                 <td>http://localhost/ServidorDAW20-21/rest/rest/public/preu/</td>
                             </tr>
                             <tr>
                                 <td>GET - treu llista preus per id </td>
                                 <td>http://localhost/ServidorDAW20-21/rest/rest/public/preu/{id}</td>
                             </tr>

                             <tr>
                                 <td>POST - insertar: {categoria_preus} </td>
                                 <td>http://localhost/ServidorDAW20-21/rest/rest/public/preu/</td>
                             </tr>

                             <tr>
                                 <td>PUT - actualitzar: </td>
                                 <td>http://localhost/ServidorDAW20-21/rest/rest/public/preu/</td>
                             </tr>

                             <tr>
                                 <td>DELETE - elimina preu per id:  </td>
                                 <td>http://localhost/ServidorDAW20-21/rest/rest/public/preu/{id}</td>
                             </tr>

                            <tr>
                                 <td>PUT - actualitza:  </td>
                                 <td>http://localhost/ServidorDAW20-21/rest/rest/public/preu/{id}/{categoria_preus}</td>
                             </tr>
                             
                             

                         </tbody>
                     </table>
             </body>
             </html>"
            );
    });

    // $this->get('json', function ($req, $res, $args) {
    //     $obj = new Exemple();   
    //     return $res
    //        ->withHeader('Content-type', 'application/json')
    //        ->getBody()
    //        ->write(
    //         json_encode(
    //             $obj->get()
    //         )
    //     );         
    // });

    // /*Cuant posin /establiment surti la llista de tots els establiments */
    // /* Hi accedim anant a: http://localhost/ServidorDAW20-21/rest/rest/public/exemple/establiment */
    // $this->get('establiment', function ($req, $res, $args) {
    //     $obj = new Establiment();   
    //     return $res
    //        ->withHeader('Content-type', 'application/json')
    //        ->getBody()
    //        ->write(
    //         json_encode(
    //             $obj->getAll()
    //         )
    //     );         
    // });

});
?>