<?php
//fariem les parts per poder treure les selects

namespace App\Model;

use App\Lib\Database;  // Clase per conectar a la base de dades
use App\Lib\Resposta;  // Clase per generar una resposta
use PDO;
use Exception;

//No he preparat la resposta - sols la conexió
class Establiment {
    private $conn; //conexió a la base de dades (PDO)

    private $resposta;

    public function __construct(){
        $this->conn = Database::getInstance()->getConnection(); //Esta cridant la conexió del constructor
        $this->resposta = new Resposta();
    }

    //treu el valor tipus de boolean_destacat(es un numero no un boolea)
    public function getAllBoolean(){
        try{
            $stm = $this->conn->prepare("SELECT DISTINCT boolean_destacat FROM establiment ");
            $stm->execute(); //executa la conexió(la $conn)
            $tuples=$stm->fetchAll(); // es un array
            return $tuples; //torna un array- una base de dades [$tuples] o $tuples
        } catch(Exception $e){
            //return "No ha pogut tornar les dades solicitades";
            echo $e->getMessage();
            return "No ha pogut tornar les dades solicitades";
        }
    }

    //llistar totes les tuples
    public function getAll(){
        try{
            $stm = $this->conn->prepare("SELECT * FROM establiment ");
            $stm->execute(); //executa la conexió(la $conn)
            $tuples=$stm->fetchAll(); // es un array
            return $tuples; //torna un array- una base de dades [$tuples] o $tuples
        } catch(Exception $e){
            //return "No ha pogut tornar les dades solicitades";
            echo $e->getMessage();
            return "No ha pogut tornar les dades solicitades";
        }
    }

    //treure una tupla donada la seva clau
    public function get($id){
        try{
            $stm = $this->conn->prepare("SELECT * FROM establiment WHERE id_establiment=:id_establiment");
            $stm->bindValue(':id_establiment', $id);
            $stm->execute();
            $tupla=$stm->fetch();

            return $tupla;

        }catch(Exception $e){
            echo $e->getMessage();
            return "No ha pogut tornar les dades solicitades";
        }
    }

    //insertar tupla
    public function insert($data){
        //var_dump($data);
        try{
            //primer insertar a la taula localitzacio perque es una fk a la taula establiment
            //segon treurer el darrer insertat de localitzacio
            //tercer sapiguent el darrer insertat de localitzacio el ficam a establiment perque es una fk

            //ficam el insert de localitzacio
            //ES AUTOINCREMENTAL
            // $sql = "SELECT max(id_localitzacio) as N FROM localitzacio";
            // $stm = $this->conn->prepare($sql);
            // $stm->execute();
            // $row=$stm->fetch();
            // $id_localitzacio = $row["N"]+1;

            //TODO: FUNCION TRANSACCIÓN - O TODO O NADA SI EL DATO ES CORRECTO O NO!!

            // $latitud=$data["latitud"];
            // $longitud=$data["longitud"];
            // $nom_comercial=$data["nom_comercial"];
            // $id_preu=$data["id_preu"];



            //$sql = "INSERT INTO localitzacio(id_localitzacio, latitud, longitud) VALUES(:id_localitzacio, :latitud, :longitud)";
            $sql = "INSERT INTO localitzacio(latitud, longitud) VALUES(?, ?)";
            $this->conn->prepare($sql)
            ->execute(
                array(
                    $data["latitud"],
                    $data["longitud"]
                )
            );

            // $this->resposta->SetCorrecta(true, 2 );
            // return $this->resposta;

            //$this->resposta;

            //$stm->bindValue(':id_localitzacio', $id_localitzacio);
            // $stm->bindValue(':latitud', $latitud);
            // $stm->bindValue(':longitud', $longitud);
            // $stm->execute();


        } catch(Exception $e){
            echo $e->getMessage();
            return "No ha pogut tornar les dades de localitzacio";

            // $this->resposta->setCorrecta(false, $e->getMessage());
            //     return $this->resposta;

        }

        try{
            //treure el darrer insert de localitzacio
            $sql = "SELECT max(id_localitzacio) as N FROM localitzacio";
            $stm=$this->conn->prepare($sql);
            $stm->execute();
            $ultimaTupla=$stm->fetch();
            $posGeo = $ultimaTupla['N'];


            //insertam a la taula establiment
            //ES AUTO-INCREMENTAL
            // $sql = "SELECT max(id_establiment) as N from establiment";
            // $stm = $this->conn->prepare($sql);
            // $stm->execute();
            // $row=$stm->fetch();
            // $id_establiment=$row["N"]+1;

                //$nom_comercial=$data["nom_comercial"];

            // $horari_obertura=$data["horari_obertura"];
            // $descripcio_general=["descripcio_general"];
            // $web=["web"];
            // $mitja_puntuacio=["boolean_destacat"];
            // $poblacio=["poblacio"];
            // $carrer=["carrer"];
            // $numero=["numero"];
            // $pis=["pis"];
            // $telefon=["telefon"];
            //$id_localitzacio=["id_localitzacio"];

                //$id_preu=intval($data["id_preu"]);


            //he de sebrer la darrerà insertada de id_localització per insertar-la
            //$sql = "INSERT INTO establiment(id_establiment, nom_comercial, id_localitzacio, id_preu) VALUES(:id_establiment, :nom_comercial, x, :id_preu)";
            $sql = "INSERT INTO establiment(nom_comercial, horari_obertura, boolean_destacat , id_localitzacio, poblacio, carrer, numero, telefon, id_preu) VALUES(?, ?, ?, $posGeo, ?, ? ,? ,? ,? )";
            
            //$sql = "INSERT INTO establiment(nom_comercial, horari_obertura, boolean_destacat , id_localitzacio, poblacio, carrer, numero, telefon, id_preu) VALUES(?, '1h', 1, 122, 'inca', 'sol', 22, 971500000, 2 )";

            $this->conn->prepare($sql)
            ->execute(
                array(
                    $data["nom_comercial"],
                    $data["horari_obertura"],
                    $data["boolean_destacat"],
                    $data["poblacio"],
                    $data["carrer"],
                    $data["numero"],
                    $data["telefon"],
                    $data["id_preu"]

                )
            );

            //$this->resposta;

            //$stm->bindValue(':id_establiment', $id_establiment);
            // $stm->bindValue(':nom_comercial', $nom_comercial);
            // // el id_localitzacio ha de posar el darrer insertat sempre
            // //$stm->bindValue(':id_localitzacio', $posGeo);
            // $stm->bindValue(':id_preu', $id_preu); //1, 2, o 3
            // $stm->execute();
            // $tupla=$stm->fetch();
            // return $tupla;

            $sql = "SELECT max(id_establiment) as E FROM establiment";
            $stm=$this->conn->prepare($sql);
            $stm->execute();
            $ultimaTupla=$stm->fetch();
            $ultimoEstabliment = $ultimaTupla['E'];


            $query = "SELECT * FROM establiment WHERE id_establiment=$ultimoEstabliment";
            $stm=$this->conn->prepare($query);
            $stm->execute();


            $resultadoFinal=$stm->fetch();
            //$this->resposta->SetCorrecta(true, 2 );

            return $resultadoFinal;

        }catch(Exception $e){
            //echo $e->getMessage();
            //return "No ha pogut tornar les dades solicitades";
            $this->resposta->setCorrecta(false, 0, $e->getMessage());
            return $this->resposta;
        }
    }

    //borra tupla per id
    public function delete($id){
        try{
            $stm = $this->conn->prepare("DELETE FROM establiment WHERE id_establiment=:id_establiment");
            $stm->bindValue(':id_establiment', $id);
            $stm->execute();
            //var_dump($stm);
            $count = $stm->rowCount();
            echo $count;
            if($count != 0){

               return "Tupla borrada";
            } else {
                return "El id indicat no existeix";
            }


        }catch(Exception $e){
            // echo $e->getMessage();
            // return "No ha pogut borrar les dades solicitades";

            $this->resposta->setCorrecta(false, 0, $e->getMessage());
            return $this->resposta;
        }
    }

    //actualitza una tupla donada una id("la id mai es modificarà, sols les noves dades")


    // $web_nou, $mitja_puntuacio_nou, $boolean_destacat_nou, $poblacio_nou, $carrer_nou, $numero_nou, $pis_nou,

    // $telefon_nou
    public function update($id, $nom_comercial_nou, $horari_obertura_nou, $descripcio_general_nou ){
        //, web=:web, mitja_puntuacio=:mitja_puntuacio, boolean_destacat=:boolean_destacat, poblacio:poblacio, carrer:carrer, numero=:numero, pis=:pis, telefon=:telefon
        try{
            $stm = $this->conn->prepare("UPDATE establiment SET nom_comercial=:nom_comercial, horari_obertura=:horari_obertura, descripcio_general=:descripcio_general WHERE id_establiment =:id_establiment");
            $stm->bindValue(':id_establiment', $id);
            $stm->bindValue(':nom_comercial', $nom_comercial_nou);
            $stm->bindValue(':horari_obertura', $horari_obertura_nou);
            $stm->bindValue(':descripcio_general', $descripcio_general_nou);
            // $stm->bindValue(':web', $web_nou);
            // $stm->bindValue(':mitja_puntuacio', $mitja_puntuacio_nou);
            // $stm->bindValue(':boolean_destacat', $boolean_destacat_nou);
            // $stm->bindValue(':poblacio', $poblacio_nou);
            // $stm->bindValue(':carrer', $carrer_nou);
            // $stm->bindValue(':numero', $numero_nou);
            // $stm->bindValue(':pis', $pis_nou);
            // $stm->bindValue(':telefon', $telefon_nou);
            $stm->execute();
            $count = $stm->rowCount();
            echo $count;
            if($count != 0){

               return "Tupla actualitzada";

            } 
            
            // else {
            //     return "El id indicat no existeix";
            // }

        }catch(Exception $e){
            // echo $e->getMessage();
            // return "No ha pogut actualitzar les dades solicitades";

            $this->resposta->setCorrecta(false, 0, $e->getMessage());
            return $this->resposta;
        }
    }

}