import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import axios from 'axios';
import Cookies from 'universal-cookie';
import MD5 from "crypto-js/md5";


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error:false,
            correuElectronic:'',
            contrasenya:''
        }
    }

    restLogin = () => {
        axios.post("http://localhost/ServidorDAW20-21/rest/rest/public/login/", {
            correuElectronic: this.state.correuElectronic,
            contrasenya: this.state.contrasenya

          })
            .then(response => {
                console.log(response);
                console.log(response.data);
                
                if (response.data.correcta) {
                    let dadeslogin={'id_usuari':response.data.dades.id_usuari,'nom':response.data.dades.nom,'valid':response.data.dades.correcta, 'boolean_tipus_usuari':response.data.dades.boolean_tipus_usuari }
                    console.log(dadeslogin); //Em torna les dades del login correcte
                    //alert(MD5("Message").toString());
                   
                        const cookies = new Cookies();
                        cookies.set('idUser', response.data.dades.id_usuari, {path: '/'}); //RUTA DE COOKIE A CUALSEVOL PAGINA
                        cookies.set('admin', response.data.dades.boolean_tipus_usuari, {path: '/'}); //RUTA DE COOKIE A CUALSEVOL PAGINA
                        // alert(cookies.get('idUser'));
                        // alert(cookies.get('admin'));
                        console.log(cookies.get('idUser')); // idUsuari
                        console.log(cookies.get('admin')); // admin

                        if(dadeslogin.boolean_tipus_usuari == 1){
                            
                            window.location.href = "http://localhost:3000/loginBackEstabliments";
                        } else {
                            window.location.href = "http://localhost:3000/";
                        }
                    
                    //this.props.accio(dadeslogin);
                } else {
                    //console.log("tenim error");
                    this.setState({
                        error:true
                    });   
                }

            })
            .catch(function (error) {
                //handle error
                console.log(error);
            })
    }

    
    onSubmit = (e) => {
        e.preventDefault();
        this.restLogin();
    }

    onChangeEmail = (e) => {
        this.setState({
            correuElectronic: e.target.value
        })
    }

    onChangePassword = (e) => {
        this.setState({
            contrasenya: e.target.value
        })
    }

    render() {
        return (
            <Container>
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="text" className="form-control" onChange={this.onChangeEmail} value={this.state.correuElectronic} />
                    </div>
                    </div>
                    <div className="row">

                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" className="form-control" onChange={this.onChangePassword} value={this.state.contrasenya} />
                    </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary"
                            value="Login" />
                    </div>
                </form>
                <p>{this.state.error?"Login incorrecta":""}</p>
            </Container>
        );
    }
}

