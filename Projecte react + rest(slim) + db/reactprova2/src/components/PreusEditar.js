import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ListGroup, Button, Container} from "react-bootstrap";
import axios from 'axios';


export default class PreusEditar extends Component {
    constructor(props){
        super(props);
        this.state = {
            id_preu: '',
            categoria_preus: '',
            error:false,
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
    // form_data.append('horari_obertura', this.state.horari_obertura);
    // form_data.append('descripcio_general', this.state.descripcio_general);

    //'http://34.234.155.213/quepassaeh/server/public/provausuari/' + this.state.codiusuari

    axios.put('http://localhost/ServidorDAW20-21/rest/rest/public/preu/' + this.state.id_preu +"/"+ this.state.categoria_preus,
        form_data,
        { headers: {'content-type':'multipart/form-data'} }
    ).then(response=>
        {
            console.log(response);
            console.log(response.data);
            console.log(response.data.correcta);
            if(response.data.correcta == false){
                this.setState({
                    error:true
                });
                console.log("adeu"); 
            } else{
                console.log("hola");
                //Si s'ha insertat be te du al crud de Establiments, per si vols fer més operacions
                window.location.href = "http://localhost:3000/loginBackPreus";
            }
        }
    ).catch(error => {
        console.log(error);
        this.setState({
            error:true
        });
    });
}

onChangeId_preu=(e)=>{
    this.setState({
        id_preu:e.target.value
    })
}

onChangeCategoria_preus=(e)=>{
    this.setState({
        categoria_preus:e.target.value
    })
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
                    <input type="text" className="form-control" onChange={this.onChangeCategoria_preus} value={this.state.categoria_preus} />
                    </div>
                    
                    <div className="form-group">
                    <p>
                    <input type="submit" className="btn btn-primary" value="Modificar" />
                    {this.state.error?"No s'ha pogut modificar":""}</p>
                    
                    </div>

                    
                    </form>
                    
                }
            </Container>
        );
    }
}

