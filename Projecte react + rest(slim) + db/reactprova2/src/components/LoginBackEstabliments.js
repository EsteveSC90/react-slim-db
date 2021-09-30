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
        //var cooki1 = cookies.get('idUser');
        var cooki2 = cookies.get('admin');
        console.log(cookies.get('idUser')); // idUsuari
        console.log(cookies.get('admin')); // admin

        //usuaris diferents a 1 no entreran!!
        if(cookies.get('admin') != 1 || typeof cooki2 === 'undefined'){
            window.location.href = "http://localhost:3000/";
        }
        this.state={
            establiments:[]
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
            this.setState({establiments:response.data});
            
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

    render() {
        return (
            <div>
               <Link to={"establimentInsertar/-1"} className="btn btn-primary">Insertar</Link>
                <ReactTable columns={
                    [
                        {Header:"id_establiment",accessor:"id_establiment"},
                        {Header:"nom_comercial",accessor:"nom_comercial"},
                        {Header:"horari_obertura",accessor:"horari_obertura"},
                        {Header:"descripcio_general",accessor:"descripcio_general"},
                        {Header:"web",accessor:"web"},
                        {Header:"mitja_puntuacio",accessor:"mitja_puntuacio"},
                        {Header:"boolean_destacat",accessor:"boolean_destacat"},
                        {Header:"poblacio",accessor:"poblacio"},
                        {Header:"carrer",accessor:"carrer"},
                        {Header:"numero",accessor:"numero"},
                        {Header:"pis",accessor:"pis"},
                        {Header:"telefon",accessor:"telefon"},
                        {Header:"id_localitzacio",accessor:"id_localitzacio"},
                        {Header:"id_preu",accessor:"id_preu"},
                       
                        // {
                        //     Header: '', 
                        //     accessor: 'id_establiment', 
                        //     sortable: false, 
                        //     filterable: false, 
                        //     style: { cursor: 'pointer' }, 
                        //     Cell: (props) => <Link to={"establimentInsertar/" + props.value} className="btn btn-primary">Insertar</Link>
                        // },

                        {
                            Header: '', 
                            accessor: 'id_establiment', 
                            sortable: false, 
                            filterable: false, 
                            style: { cursor: 'pointer' }, 
                            Cell: (props) => <Link to={"establimentEditar/" + props.value} className="btn btn-primary">Editar</Link>
                        }
                        
                        ,

                        {
                            Header: '', 
                            accessor: 'id_establiment', 
                            sortable: false, 
                            filterable: false, 
                            style: { cursor: 'pointer' }, 
                            Cell: (props) => <Link to={"establimentBorrar/" + props.value} className="btn btn-primary">Borrar</Link>
                        }



                        // // {
                        // //     Headers:"",
                        // //     accessor:"codiusuari",
                        // //     sortable:false,
                        // //     filterable:false,
                        // //     style: {cursor}
                        // // }

                    ]
                } 
                data={this.state.establiments}
                filterable
                multisort
                defaultPageSize={10}

                />

                

            </div>

            

          
        );
    }
}