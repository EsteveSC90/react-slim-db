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
export default class Taula extends Component{
    constructor(props) {
        super(props);
        this.state={
            usuaris:[]
        }

    }

    componentDidMount(){
        this.descarrega();

    }

    descarrega=()=>{
        axios.get('http://localhost/ServidorDAW20-21/rest/rest/public/establiment/')
        //http://localhost/ServidorDAW20-21/rest/rest/public/establiment/6 No ho treu perque sols te un registre, supos.
        .then((response) => {
            // handle success
            console.log(response);
            console.log(response.data);
            this.setState({usuaris:response.data});
            
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                {/* <FaBeer/> */}
                <ReactTable columns={
                    [
                        {Header:"nom_comercial",accessor:"nom_comercial"},
                        {Header:"horari_obertura",accessor:"horari_obertura"},
                        {Header:"descripcio_general",accessor:"descripcio_general"},
                        {Header:"poblacio",accessor:"poblacio"},
                        {Header:"carrer",accessor:"carrer"},
                        {Header:"numero",accessor:"numero"},
                        {Header:"telefon",accessor:"telefon"},
                        {Header:"web",accessor:"web"},
                        // {
                        //     Headers:"",
                        //     accessor:"codiusuari",
                        //     sortable:false,
                        //     filterable:false,
                        //     style: {cursor}
                        // }

                    ]
                } 
                data={this.state.usuaris}
                filterable
                multisort
                defaultPageSize={10}

                />
            </div>
        );
    }
}