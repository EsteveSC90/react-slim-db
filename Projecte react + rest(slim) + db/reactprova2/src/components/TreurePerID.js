//Aixó es una vista per utilitzar a una Llista
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ListGroup, Button, Container} from "react-bootstrap";
import axios from 'axios';
import ReactTable from 'react-table-v6';
import "react-table-v6/react-table.css";
// import {FaBeer} from 'react-icons/fa';
// import {Link} from 'react-router-dom';


//per importar de un altre component

//console.log(document.getElementsByTagName("p")[1]);
//console.log(document.getElementById("idOption"));

export default class TreurePerID extends Component{
    constructor(props) {
        super(props);
        console.log(props);
        this.state={
            id:props.id,
            nom_comercial: '', 
            horari_obertura: '',
            descripcio_general: '',
            web: '',
            poblacio: '',
            carrer: '',
            numero: '',
            telefon: ''
        }

    }


    //cuant faci el onchange li ha de arribar un estat aquí

    componentDidUpdate(prevProps, prevState){
        if(prevProps.id != this.props.id){
            // console.log(this.props.id);
            // console.log(this.props);
            if (this.props.id != -1) {
                this.descarrega(this.props.id);
            }

        }
        
       

    }


    descarrega=(id)=>{
        console.log(this.props);
        axios.get('http://localhost/ServidorDAW20-21/rest/rest/public/establiment/'+id)
        //http://localhost/ServidorDAW20-21/rest/rest/public/establiment/6 No ho treu perque sols te un registre, supos.
        .then((response) => {
            this.setState({
                nom_comercial:response.data.nom_comercial,
                horari_obertura:response.data.horari_obertura,
                descripcio_general:response.data.descripcio_general,
                web:response.data.web,
                poblacio:response.data.poblacio,
                carrer:response.data.carrer,
                numero:response.data.numero,
                telefon:response.data.telefon
            });
            
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                <p id="idOption"> id: {this.props.id}</p>
                <p><strong>Nom Comercial:</strong> {this.state.nom_comercial}</p>
                <p><strong>Horari Obertura:</strong> {this.state.horari_obertura}</p>
                <p><strong>Descripció General:</strong> {this.state.descripcio_general}</p>
                <p><strong>Poblacio:</strong> {this.state.poblacio}</p>
                <p><strong>Carrer:</strong> {this.state.carrer}</p>
                <p><strong>Numero:</strong> {this.state.numero}</p>
                <p><strong>Telefon:</strong> {this.state.telefon}</p>
                <p><strong>Web:</strong> <a href={this.state.web}>{this.state.nom_comercial}</a></p>
            </div>
        );
    }
}