<?php
//fariem les parts per poder treure les selects

namespace App\Model;

use App\Lib\Database;  // Clase per conectar a la base de dades
use App\Lib\Resposta;  // Clase per generar una resposta
use PDO;
use Exception;


//No he preparat la resposta - sols la conexió
class Tipus_cuina {
    private $conn; //conexió a la base de dades (PDO)
    private $resposta;
    
    public function __construct(){
        $this->conn = Database::getInstance()->getConnection(); //Esta cridant la conexió del constructor
        $this->resposta = new Resposta();
    }

    //llistar totes les tuples
    public function getAll(){
        try{
            $stm = $this->conn->prepare("SELECT * FROM tipus_cuina ");
            $stm->execute(); //executa la conexió(la $conn)
            $tuples=$stm->fetchAll(); // es un array
            $this->resposta->SetDades($tuples);
            $this->resposta->SetCorrecta(true);
            return $this->resposta; //torna un array- una base de dades [$tuples] o $tuples
        } catch(Exception $e){
            //return "No ha pogut tornar les dades solicitades";
            //echo $e->getMessage();
            $this->resposta->SetCorrecta(false, $e->getMessage());
            return $this->resposta;
        }
    }

    //treure una tupla donada la seva clau
    public function get($id){
        try{
            $stm = $this->conn->prepare("SELECT * FROM tipus_cuina WHERE id_tipus_cuina=:id_tipus_cuina");
            $stm->bindValue(':id_tipus_cuina', $id);
            $stm->execute();
            $tupla=$stm->fetch();
            $this->resposta->SetDades($tupla);
            $this->resposta->SetCorrecta(true);
            return $this->resposta; 

        }catch(Exception $e){
            // echo $e->getMessage();
            // return "No ha pogut tornar les dades solicitades";
            $this->resposta->SetCorrecta(false, $e->getMessage());
            return $this->resposta;
        }
    }

    //insertar tupla
    public function insert($data){
        //var_dump($data);
        try{
            $sql = "SELECT max(id_tipus_cuina) as N from tipus_cuina";
                $stm=$this->conn->prepare($sql);
                $stm->execute();
                $row=$stm->fetch();
                $maxId=$row["N"]+1;


            //TODO: FUNCION TRANSACCIÓN - O TODO O NADA SI EL DATO ES CORRECTO O NO!!
            //$tipus=$data["tipus"];
            //strval($data["tipus"]);
            //$sql = "INSERT INTO tipus_cuina(id_tipus_cuina, tipus) VALUES(:id_tipus_cuina, :tipus)";
            $sql = "INSERT INTO tipus_cuina(id_tipus_cuina, tipus) VALUES($maxId, ?)";
            $this->conn->prepare($sql)
            ->execute(
                array(
                    $data["tipus"]
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

    //borra tupla per id
    public function delete($id){
        try{
            $stm = $this->conn->prepare("DELETE FROM tipus_cuina WHERE id_tipus_cuina=:id_tipus_cuina");
            $stm->bindValue(':id_tipus_cuina', $id);
            $stm->execute();
            //var_dump($stm);
            $count = $stm->rowCount();
            //echo $count; //no li podem fer un echo perque ens treurà $count i ja no es veu el json i veurem el resultat de $count en format normal
            if($count != 0){
                $this->resposta->SetDades($count);
                $this->resposta->SetCorrecta(true);
                return $this->resposta;

               //return "Tupla borrada";  
            } 
            
            // else {
            //     return "El id indicat no existeix";
            // }
            
        }catch(Exception $e){
            // echo $e->getMessage();
            // return "No ha pogut borrar les dades solicitades";
            $this->resposta->SetCorrecta(false, $e->getMessage());
            return $this->resposta;
        }
    }

    //actualitza una tupla donada una id("la id mai es modificarà, sols les noves dades")
    
    // $web_nou, $mitja_puntuacio_nou, $boolean_destacat_nou, $poblacio_nou, $carrer_nou, $numero_nou, $pis_nou, 
    // $telefon_nou
    public function update($id, $tipus_nou){
        //, web=:web, mitja_puntuacio=:mitja_puntuacio, boolean_destacat=:boolean_destacat, poblacio:poblacio, carrer:carrer, numero=:numero, pis=:pis, telefon=:telefon
        try{
            $stm = $this->conn->prepare("UPDATE tipus_cuina SET tipus=:tipus WHERE id_tipus_cuina =:id_tipus_cuina");
            $stm->bindValue(':id_tipus_cuina', $id);
            $stm->bindValue(':tipus', $tipus_nou);
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