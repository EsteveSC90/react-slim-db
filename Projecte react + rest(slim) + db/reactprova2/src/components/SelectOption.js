import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ListGroup, Button} from "react-bootstrap";
import ReactDOM from 'react-dom';
import axios from 'axios';
import TreurePerID from './TreurePerID';


// const divRoot = document.querySelector('#app');
// ReactDOM.render( <TreurePerID id="6"/>, divRoot);

export default class SelectOptionsNomComercial extends Component{
    constructor(props) {
        super(props);
        this.state={
            nomsComercials:[],
            //nom_comercial_seleccionat:0, 
            id_establiment_seleccionat: ''

        }

    }

    componentDidMount(){
        axios.get('http://localhost/ServidorDAW20-21/rest/rest/public/establiment/')
        .then((response) => {
            // handle success
            console.log(response);
            console.log(response.data);
            console.log(response.data.nom_comercial);
            this.setState({nomsComercials:response.data});
            
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

    //sabrer el que ha seleccionat
    sabrerId=(e)=>{

        //les feines que hi havia mes lo que hi hagui dedins el input es ficara al setState(estat)
        this.setState({id_establiment_seleccionat:e.target.value})
    }

    
   


    render() {
        return (
                <form>
                <select onChange={ this.sabrerId}>
                <option value="-1" key="-1">Selecciona un</option>
                
                {
                    //es un array
                    this.state.nomsComercials.map(
                                //elemento
                        function (establiment, index) {
                            return <option key={index} value={establiment.id_establiment}>{establiment.nom_comercial}</option>
                           
                        }
                        
                    )
                   
                }
            </select>
                {/* Treu id del seleccionat */}
                
                <h1><p id={this.state.id_establiment_seleccionat} >{this.state.id_establiment_seleccionat}</p></h1>
                <TreurePerID id={this.state.id_establiment_seleccionat} />
                
            </form>

            
        );
        
        
    }

    
}

