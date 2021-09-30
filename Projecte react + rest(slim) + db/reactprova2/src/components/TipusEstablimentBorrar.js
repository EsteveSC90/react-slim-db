import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ListGroup, Button, Container} from "react-bootstrap";
import axios from 'axios';


export default class UsuariBorrar extends Component {
    constructor(props){
        super(props);
        this.state = {
            id_tipus_cuina: '',
            tipus_cuina: '',
            
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id_tipus_cuina)
        var id = this.props.match.params.id_tipus_cuina;
        console.log(id);
        this.descarrega(id);
    }


    descarrega=(id)=>{
        axios.get('http://localhost/ServidorDAW20-21/rest/rest/public/tipus_cuina/' + id)
        .then(response=> {
            console.log(response);
            console.log(response.data);
            console.log(response.data.dades.id_tipus_cuina);
            console.log(response.data.dades.tipus);
            
            this.setState({
                id_tipus_cuina:response.data.dades.id_tipus_cuina,
                tipus_cuina:response.data.dades.tipus,
               
            });
        })
        .catch(function (error){
            console.log(error);
        })

}

onSubmit=(e)=>{
    e.preventDefault();
    //Modificar al servidor REST
    let form_data=new FormData();
    form_data.append('id_tipus_cuina', this.state.id_tipus_cuina);
    form_data.append('tipus_cuina', this.state.tipus_cuina);
    
    

    //'http://34.234.155.213/quepassaeh/server/public/provausuari/' + this.state.codiusuari

    axios.delete('http://localhost/ServidorDAW20-21/rest/rest/public/tipus_cuina/' + this.state.id_tipus_cuina,
        form_data,
        { headers: {'content-type':'multipart/form-data'} }
    ).then(resposta=>
        {   
            
            console.log(resposta);
            console.log(resposta.data);
            window.location.href = "http://localhost:3000/loginBackTipusEstabliment";
            
        }
    ).catch(error => {
        console.log(error);
    });
}




    render() {
        return (
            <Container>
                {
                    <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <label>id tipus cuina:</label>
                    <input type="text" className="form-control" value={this.state.id_tipus_cuina} readOnly/>
                    </div>
                    <div className="form-group">
                    <label>tipus cuina:</label>
                    <input type="text" className="form-control" readOnly value={this.state.tipus_cuina} />
                    </div>
                    
                    <div className="form-group">
                    <input type="submit" className="btn btn-primary" value="Borrar" />
                    </div>
                    </form>
                }
            </Container>
        );
    }
}

