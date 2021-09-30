import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ListGroup, Button, Container} from "react-bootstrap";
import axios from 'axios';


export default class UsuariBorrar extends Component {
    constructor(props){
        super(props);
        this.state = {
            id_preu: '',
            categoria_preus: '',
            
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id_preu)
        var id = this.props.match.params.id_preu;
        console.log(id);
        this.descarrega(id);
    }


    descarrega=(id)=>{
        axios.get('http://localhost/ServidorDAW20-21/rest/rest/public/preu/' + id)
        .then(response=> {
            console.log(response);
            console.log(response.data);
            console.log(response.data.id_preu);
            console.log(response.data.categoria_preus);
            
            this.setState({
                id_preu:response.data.id_preu,
                categoria_preus:response.data.categoria_preus,
               
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
    form_data.append('id_preu', this.state.id_preu);
    form_data.append('categoria_preus', this.state.categoria_preus);
    
    

    //'http://34.234.155.213/quepassaeh/server/public/provausuari/' + this.state.codiusuari

    axios.delete('http://localhost/ServidorDAW20-21/rest/rest/public/preu/' + this.state.id_preu,
        form_data,
        { headers: {'content-type':'multipart/form-data'} }
    ).then(resposta=>
        {   
            
            console.log(resposta);
            console.log(resposta.data);
            window.location.href = "http://localhost:3000/loginBackPreus";
            
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
                    <label>Id preu:</label>
                    <input type="text" className="form-control" value={this.state.id_preu} readOnly/>
                    </div>
                    <div className="form-group">
                    <label>Categoria preus:</label>
                    <input type="text" className="form-control" readOnly value={this.state.categoria_preus} />
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

