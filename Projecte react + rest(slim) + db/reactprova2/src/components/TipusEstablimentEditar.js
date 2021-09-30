import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ListGroup, Button, Container} from "react-bootstrap";
import axios from 'axios';


export default class TipusEstablimentEditar extends Component {
    constructor(props){
        super(props);
        this.state = {
            id_tipus_cuina: '',
            tipus: '',
            error:false,
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
                tipus:response.data.dades.tipus,
                
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
    form_data.append('tipus', this.state.tipus);
    // form_data.append('horari_obertura', this.state.horari_obertura);
    // form_data.append('descripcio_general', this.state.descripcio_general);

    //'http://34.234.155.213/quepassaeh/server/public/provausuari/' + this.state.codiusuari

    axios.put('http://localhost/ServidorDAW20-21/rest/rest/public/tipus_cuina/' + this.state.id_tipus_cuina +"/"+ this.state.tipus,
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
                window.location.href = "http://localhost:3000/loginBackTipusEstabliment";
            }
        }
    ).catch(error => {
        console.log(error);
        this.setState({
            error:true
        });
    });
}

onChangeId_tipus_cuina=(e)=>{
    this.setState({
        id_tipus_cuina:e.target.value
    })
}

onChangeTipus=(e)=>{
    this.setState({
        tipus:e.target.value
    })
}



    render() {
        return (
            <Container>
                {
                    <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <label>Id tipus cuina:</label>
                    <input type="text" className="form-control" value={this.state.id_tipus_cuina} readOnly/>
                    </div>
                    <div className="form-group">
                    <label>Tipus cuina:</label>
                    <input type="text" className="form-control" onChange={this.onChangeTipus} value={this.state.tipus} />
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

