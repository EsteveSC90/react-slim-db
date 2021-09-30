//Aixó es una vista per utilitzar a una Llista
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ListGroup, Button, Container} from "react-bootstrap";
import axios from 'axios';
import ReactTable from 'react-table-v6';
import "react-table-v6/react-table.css";
// import {FaBeer} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie';
import '.././estils/usuariPerfilEstil.css';
import { MD5 } from 'crypto-js';


//per importar de un altre component
export default class Taula extends Component{
    // if(cookies.get('idUser')< 0){
    //     window.location.href = "http://localhost:3000/";
    // }

    constructor(props) {
        super(props);
        const cookies = new Cookies();
        // alert(cookies.get('idUser'));
        // alert(cookies.get('admin'));
        var cooki1 = cookies.get('idUser');
        //var cooki2 = cookies.get('admin');
        console.log('idUser' + cookies.get('idUser')); // idUsuari
        console.log(cookies.get('admin')); // admin 1 o 0

        //usuaris id menors a 0 o undefined no poden entrar
        if(cookies.get('idUser') < 0 || typeof cookies.get('idUser') === 'undefined'){
            window.location.href = "http://localhost:3000/";
        }
        this.state={
            cookie_id_usuari: cookies.get('idUser'),
            id_usuari: '',
            nom: '',
            primer_cognom: '',
            segon_cognom: '',
            poblacio: '',
            carrer: '',
            numero: '',
            pis: '',
            correuElectronic: '',
            contrasenya: '',
            boolean_tipus_usuari: '',
        }



    }

    componentDidMount(){
        var id = this.state.cookie_id_usuari;
        console.log(id);
        this.descarrega(id);

    }

    descarrega=(id)=>{
        axios.get('http://localhost/ServidorDAW20-21/rest/rest/public/usuari/'+id)
        //http://localhost/ServidorDAW20-21/rest/rest/public/establiment/6 No ho treu perque sols te un registre, supos.
        .then((response) => {
            // handle success
            console.log(response);
            console.log(response.data);
            console.log(response.data.id_usuari);
            this.setState({
                id_usuari:response.data.id_usuari,
                nom:response.data.nom,
                primer_cognom:response.data.primer_cognom,
                segon_cognom:response.data.segon_cognom,
                poblacio:response.data.poblacio,
                carrer:response.data.carrer,
                numero:response.data.numero,
                pis:response.data.pis,
                correuElectronic:response.data.correuElectronic,
                // contrasenya:response.data.contrasenya,
                boolean_tipus_usuari:(response.data.boolean_tipus_usuari==1)?'Administrador':'Usuari',
                
                
            });
            
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

    onSubmit=(e)=>{
        e.preventDefault();
        //Modificar al servidor REST
        let form_data=new FormData();
        form_data.append('id_usuari', this.state.id_usuari);
        form_data.append('nom', this.state.nom);
        form_data.append('primer_cognom', this.state.primer_cognom);
        form_data.append('segon_cognom', this.state.segon_cognom);
        form_data.append('poblacio', this.state.poblacio);
        form_data.append('carrer', this.state.carrer);
        form_data.append('numero', this.state.numero);
        form_data.append('pis', this.state.pis);
        form_data.append('correuElectronic', this.state.correuElectronic);
        form_data.append('contrasenya', this.state.contrasenya);
        //alert(this.state.contrasenya);
        form_data.append('boolean_tipus_usuari', this.state.boolean_tipus_usuari);

    
    
        //'http://34.234.155.213/quepassaeh/server/public/provausuari/' + this.state.codiusuari
    
        

        axios.put('http://localhost/ServidorDAW20-21/rest/rest/public/usuari/' + this.state.id_usuari +"/" +  (this.state.contrasenya!=""?(this.state.contrasenya):0) ,
        
        //axios.put('http://localhost/ServidorDAW20-21/rest/rest/public/usuari/5/Esteve/S/C/Inca/Sol/125/bjs/esc1@gmail.com/202cb962ac59075b964b07152d234b70/1',
            form_data,
            { headers: {'content-type':'multipart/form-data'} }
        ).then(response=>
            {
                //alert(this.state.contrasenya);
                console.log(response);
                console.log(response.data);
                //console.log(response.data.state);
                console.log(response.status);
                //console.log(response.data.correcta);
                //alert(response.data);
                if(response.data == 0){
                    // this.setState({
                    //     error:true
                    // });
                    //console.log("adeu"); 
                    alert("Contrasenya no actualitzada!!")
                } else{
                    //console.log("hola");
                    alert("Contrasenya actualitzada!!")
                    //Si s'ha insertat be te du al crud de Establiments, per si vols fer més operacions
                    //window.location.href = "http://localhost:3000/loginBackUsuaris";
                }
            }
        ).catch(error => {
            console.log(error);
            // this.setState({
            //     error:true
            // });
        });
    }


    onChangeContrasenya=(e)=>{
        this.setState({
            // horari_obertura:e.target.value
            contrasenya:e.target.value
            
        })
    }


    render() {
        return (
            <div>

                <div class="container">
                    <div class="main-body">
                    
                        <div class="row gutters-sm">
                            <div class="col-md-4 mb-3">
                            <div class="card">
                                <div class="card-body">
                                <div class="d-flex flex-column align-items-center text-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"/>
                                    <div class="mt-3">
                                        <h4>{this.state.nom}</h4>
                                        <p class="text-secondary mb-1">{this.state.primer_cognom}</p>
                                        <p class="text-muted font-size-sm">{this.state.segon_cognom}</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            
                            </div>
                            <div class="col-md-8">
                            <div class="card mb-3">
                                <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-3">
                                    <h6 class="mb-0">Nom: </h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                    {this.state.nom} {this.state.primer_cognom} {this.state.segon_cognom}
                                    </div>
                                </div>
                                {/* <hr> */}
                                <div class="row">
                                    <div class="col-sm-3">
                                    <h6 class="mb-0">Email: </h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                    {this.state.correuElectronic}
                                    </div>
                                </div>
                                {/* </hr> */}
                                <div class="row">
                                    <div class="col-sm-3">
                                    <h6 class="mb-0">Poblacio: </h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                    {this.state.poblacio}
                                    </div>
                                </div>
                                {/* <hr> */}
                                <div class="row">
                                    <div class="col-sm-3">
                                    <h6 class="mb-0">Adreça: </h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                    Carrer: {this.state.carrer}, Nº{this.state.numero}, Pis: {this.state.pis}
                                    </div>
                                </div>
                                {/* </hr> */}
                                <div class="row">
                                    <div class="col-sm-3">
                                    <h6 class="mb-0">Tipus Usuari</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                    {this.state.boolean_tipus_usuari}
                                    </div>
                                </div>
                                </div>

                                
                            </div>

                                <div class="col-md-8">
                            <div class="card mb-3">
                                <div class="card-body">
                                <div class="row">

                                    <form onSubmit={this.onSubmit}>
                                        <div class="col-sm-12">
                                        <h6 class="mb-0">Contrasenya: </h6>
                                        </div>

                                        <div class="col-sm-9 text-secondary">
                                        <input type="password" className="form-control" onChange={this.onChangeContrasenya} />
                                        <br/>
                                            <input type="submit" className="btn btn-primary" value="Canviar contrasenya" />
                                        </div>
                                    </form>
                                    
                                </div>
                                
                                
                                </div>
                            </div>
                            </div>

                            </div>

                

                            

                        </div>	

                    </div>

                </div>

            </div>

            
        );
    }
}