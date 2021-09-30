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
            usuaris:[]
        }

    }

    componentDidMount(){
        this.descarrega();

    }

    descarrega=()=>{
        axios.get('http://localhost/ServidorDAW20-21/rest/rest/public/usuari/')
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
                <Link to={"usuariInsertar/-1"} className="btn btn-primary">Insertar</Link>
                <ReactTable columns={
                    [
                        {Header:"id_usuari",accessor:"id_usuari"},
                        {Header:"nom",accessor:"nom"},
                        {Header:"primer_cognom",accessor:"primer_cognom"},
                        {Header:"segon_cognom",accessor:"segon_cognom"},
                        {Header:"poblacio",accessor:"poblacio"},
                        {Header:"carrer",accessor:"carrer"},
                        {Header:"numero",accessor:"numero"},
                        {Header:"pis",accessor:"pis"},
                        {Header:"correuElectronic",accessor:"correuElectronic"},
                        {Header:"contrasenya",accessor:"contrasenya"},
                        {Header:"boolean_tipus_usuari",accessor:"boolean_tipus_usuari"},
                       
                        // {
                        //     Header: '', 
                        //     accessor: 'id_usuari', 
                        //     sortable: false, 
                        //     filterable: false, 
                        //     style: { cursor: 'pointer' }, 
                        //     Cell: (props) => <Link to={"usuariInsertar/" + props.value} className="btn btn-primary">Insertar</Link>
                        // },

                        {
                            Header: '', 
                            accessor: 'id_usuari', 
                            sortable: false, 
                            filterable: false, 
                            style: { cursor: 'pointer' }, 
                            Cell: (props) => <Link to={"usuariEditar/" + props.value} className="btn btn-primary">Editar</Link>
                        }
                        
                        ,

                        {
                            Header: '', 
                            accessor: 'id_usuari', 
                            sortable: false, 
                            filterable: false, 
                            style: { cursor: 'pointer' }, 
                            Cell: (props) => <Link to={"usuariBorrar/" + props.value} className="btn btn-primary">Borrar</Link>
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
                data={this.state.usuaris}
                filterable
                multisort
                defaultPageSize={10}

                />

                

            </div>

            

          
        );
    }
}