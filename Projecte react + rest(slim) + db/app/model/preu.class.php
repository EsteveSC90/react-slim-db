<?php
//fariem les parts per poder treure les selects

namespace App\Model;

use App\Lib\Database;  // Clase per conectar a la base de dades
use App\Lib\Resposta;  // Clase per generar una resposta
use PDO;
use Exception;

//No he preparat la resposta - sols la conexió
class Preu {

    //Conexió amb la base de dades
    private $conn; 

    //Cridant la conexió del constructor
    public function __construct(){
        $this->conn = Database::getInstance()->getConnection(); 
        $this->resposta = new Resposta();
    }

    //Llistar totes les tuples
    public function getAll(){
        try{
            $stm = $this->conn->prepare("SELECT * FROM preu");
            $stm->execute(); //executa la conexió(la $conn)
            $tuples=$stm->fetchAll(); // es un array
            return $tuples; //torna un array- una base de dades [$tuples] o $tuples
        } catch(Exception $e){
            //return "No ha pogut tornar les dades solicitades";
            echo $e->getMessage();
            return "No ha pogut tornar les dades solicitades";
        }
    }

    //Cercar una tupla a traves del seu id
    public function get($id){
        try{
            $stm = $this->conn->prepare("SELECT * FROM preu WHERE id_preu=:id_preu");
            $stm->bindValue(':id_preu', $id);
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
            $sql = "SELECT max(id_preu) as N from preu";
                $stm=$this->conn->prepare($sql);
                $stm->execute();
                $row=$stm->fetch();
                $maxId=$row["N"]+1;


            //TODO: FUNCION TRANSACCIÓN - O TODO O NADA SI EL DATO ES CORRECTO O NO!!
            //$tipus=$data["tipus"];
            //strval($data["tipus"]);
            //$sql = "INSERT INTO tipus_cuina(id_tipus_cuina, tipus) VALUES(:id_tipus_cuina, :tipus)";
            $sql = "INSERT INTO preu(id_preu, categoria_preus) VALUES($maxId, ?)";
            $this->conn->prepare($sql)
            ->execute(
                array(
                    $data["categoria_preus"]
                )
            );
            // $stm->bindValue(':id_tipus_cuina', $maxId);
            // $stm->bindValue(':tipus', $tipus);
            // $stm->execute();

            $this->resposta->SetCorrecta(true, 2 , "Insertat $maxId" );
            return $this->resposta;

        } catch(Exception $e){
            // echo $e->getMessage();
            // return "No ha pogut tornar les dades de localitzacio";

            $this->resposta->SetCorrecta(false, "Error insertant1: ".$e->getMessage());
            return $this->resposta;
        }

    }


   


    // //Borrar tupla per ID
    public function delete($id){
        try{
            $stm = $this->conn->prepare("DELETE FROM preu WHERE id_preu=:id_preu");
            $stm->bindValue(':id_preu', $id);
            $stm->execute();
            
            $count = $stm->rowCount();
            echo $count;
            if($count != 0){
               return "Tupla borrada";  
            } else {
                return "El id indicat no existeix";
            }
            
        }catch(Exception $e){
            echo $e->getMessage();
            return "No ha pogut borrar les dades solicitades";
        }
    }

    //Actualitzar tupla
    public function update($id, $categoriaPreus){
        //, web=:web, mitja_puntuacio=:mitja_puntuacio, boolean_destacat=:boolean_destacat, poblacio:poblacio, carrer:carrer, numero=:numero, pis=:pis, telefon=:telefon
        try{
            $stm = $this->conn->prepare("UPDATE preu SET categoria_preus=:categoria_preus
             WHERE id_preu =:id_preu");
            $stm->bindValue(':id_preu', $id);
            $stm->bindValue(':categoria_preus', $categoriaPreus);
            $stm->execute();
            $count = $stm->rowCount();
            //echo $count; //no li podem fer un echo perque ens treurà $count i ja no es veu el json i veurem el resultat de $count en format normal
            if($count != 0){
               //return "Tupla actualitzada"; 
               $this->resposta->SetDades($count);
               $this->resposta->SetCorrecta(true);
                
            } else {
                $this->resposta->setCorrecta(false, 0, "dades update incorrecte");
            }
            return $this->resposta; 
            //else {
                //return "El id indicat no existeix";
                
            //}

        }catch(Exception $e){
            // echo $e->getMessage();
            // return "No ha pogut actualitzar les dades solicitades";

            $this->resposta->SetCorrecta(false, 0, $e->getMessage());
            return $this->resposta;
        }
    }


}