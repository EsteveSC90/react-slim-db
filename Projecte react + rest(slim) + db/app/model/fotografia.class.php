<?php
//fariem les parts per poder treure les selects

namespace App\Model;

use App\Lib\Database;  // Clase per conectar a la base de dades
use App\Lib\Resposta;  // Clase per generar una resposta
use PDO;
use Exception;

//No he preparat la resposta - sols la conexió
class Fotografia {

    //Conexió amb la base de dades
    private $conn; 

    //Cridant la conexió del constructor
    public function __construct(){
        $this->conn = Database::getInstance()->getConnection(); 
        
    }

    //Llistar totes les tuples
    public function getAll(){
        try{
            $stm = $this->conn->prepare("SELECT * FROM fotografia");
            $stm->execute(); //executa la conexió(la $conn)
            $tuples=$stm->fetchAll(); // es un array
            return $tuples; //torna un array- una base de dades [$tuples] o $tuples
        } catch(Exception $e){
            //return "No ha pogut tornar les dades solicitades";
            echo $e->getMessage();
            return "No ha pogut tornar les dades solicitades";
        }
    }

    // //Cercar una tupla a traves del seu id
    // public function get($id){
    //     try{
    //         $stm = $this->conn->prepare("SELECT * FROM usuari WHERE id_usuari=:id_usuari");
    //         $stm->bindValue(':id_usuari', $id);
    //         $stm->execute();
    //         $tupla=$stm->fetch();
    //         return $tupla; 

    //     }catch(Exception $e){
    //         echo $e->getMessage();
    //         return "No ha pogut tornar les dades solicitades";
    //     }
    // }


    // //Insertar una tupla
    // public function insert($data){

    //     try{
            
    //         // $sql = "SELECT max(id_usuari) as N from usuari";
    //         // $stm = $this->conn->prepare($sql);
    //         // $stm->execute();
    //         // $row=$stm->fetch();
    //         // $id_usuari=$row["N"]+1;
    //         // $nom=$data["nom"];
    //         // $primer_cognom=$data["primer_cognom"];
    //         //$segon_cognom=$data["segon_cognom"];
    //         //$poblacio=$data["poblacio"];
    //         //$carrer=$data["carrer"];
    //         //$numero=intval($data["numero"]);
    //         // $pis=$data["pis"];
    //         //$correuElectronic=$data["correuElectronic"];
    //         //$contrasenya=$data["contrasenya"];
    //         //$boolean_tipus_usuari=intval($data["boolean_tipus_usuari"]);

            
    //         $sql = "INSERT INTO usuari(nom, primer_cognom, segon_cognom, poblacio, carrer, numero, pis, correuElectronic, contrasenya, boolean_tipus_usuari ) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    //         $this->conn->prepare($sql)
    //         ->execute(
    //             array(
    //                 $data["nom"],
    //                 $data["primer_cognom"],
    //                 $data["segon_cognom"],
    //                 $data["poblacio"],
    //                 $data["carrer"],
    //                 $data["numero"],
    //                 $data["pis"],
    //                 $data["correuElectronic"],
    //                 $data["contrasenya"],
    //                 $data["boolean_tipus_usuari"]

    //             )
    //         );

    //         // $stm=$this->conn->prepare($sql);
    //         // $stm->bindValue(':nom', $nom);
    //         // $stm->bindValue(':primer_cognom', $primer_cognom); 
    //        // $stm->bindValue(':segon_cognom', $segon_cognom); 
    //        //$stm->bindValue(':poblacio', $poblacio); 
    //        //$stm->bindValue(':carrer', $carrer); 
    //        //$stm->bindValue(':numero', $numero); 
    //        //$stm->bindValue(':correuElectronic', $correuElectronic);
    //        //$stm->bindValue(':contrasenya', $contrasenya);  
    //        //$stm->bindValue(':boolean_tipus_usuari', $boolean_tipus_usuari); 
    //        $sql = "SELECT max(id_usuari) AS E FROM usuari";
    //        $stm=$this->conn->prepare($sql);
    //         $stm->execute(); 

    //         $ultimaTupla=$stm->fetch();
    //         $ultimoresultadoFinal = $ultimaTupla['E'];

    //         $query = "SELECT * FROM usuari WHERE id_usuari=$ultimoresultadoFinal";
    //         $stm=$this->conn->prepare($query);
    //         $stm->execute();
    //         $resultadoFinal=$stm->fetch();

    //         return $resultadoFinal;

    //     }catch(Exception $e){
    //         echo $e->getMessage();
    //         return "No ha pogut tornar les dades solicitades";
    //     }
    // }

    // //Borrar tupla per ID
    // public function delete($id){
    //     try{
    //         $stm = $this->conn->prepare("DELETE FROM usuari WHERE id_usuari=:id_usuari");
    //         $stm->bindValue(':id_usuari', $id);
    //         $stm->execute();
            
    //         $count = $stm->rowCount();
    //         echo $count;
    //         if($count != 0){
    //            return "Tupla borrada";  
    //         } else {
    //             return "El id indicat no existeix";
    //         }
            
    //     }catch(Exception $e){
    //         echo $e->getMessage();
    //         return "No ha pogut borrar les dades solicitades";
    //     }
    // }

    // //Actualitzar tupla
    // public function update($id, $nom_nou, $primer_cognom, $segon_cognom, $poblacio_nou, $carrer_nou, $numero_nou, $contrasenya_nou, $tipus_usuari_nou ){
        
    //     try{
    //         $stm = $this->conn->prepare("UPDATE usuari SET nom=:nom, primer_cognom=:primer_cognom, segon_cognom=:segon_cognom, poblacio=:poblacio, carrer=:carrer,
    //         numero=:numero, contrasenya=:contrasenya, boolean_tipus_usuari=:boolean_tipus_usuari
    //          WHERE id_usuari =:id_usuari");
    //         $stm->bindValue(':id_usuari', $id);
    //         $stm->bindValue(':poblacio', $poblacio_nou);
    //         $stm->bindValue(':carrer', $carrer_nou);
    //         // $stm->bindValue(':correuElectronic', $correu_nou);
    //         // $stm->bindValue(':pis', $pis_nou);
    //          $stm->bindValue(':nom', $nom_nou);
    //          $stm->bindValue(':primer_cognom', $primer_cognom);
    //          $stm->bindValue(':segon_cognom', $segon_cognom);
    //          $stm->bindValue(':numero', $numero_nou);
    //          $stm->bindValue(':contrasenya', $contrasenya_nou);
    //          $stm->bindValue(':boolean_tipus_usuari', $tipus_usuari_nou);

    //         $stm->execute();
    //         $count = $stm->rowCount();
    //         echo $count;
    //         if($count != 0){
    //            return "Tupla actualitzada";  
    //         } else {
    //             return "El id indicat no existeix";
    //         }

    //     }catch(Exception $e){
    //         echo $e->getMessage();
    //         return "No ha pogut actualitzar les dades solicitades";
    //     }
    // }

}