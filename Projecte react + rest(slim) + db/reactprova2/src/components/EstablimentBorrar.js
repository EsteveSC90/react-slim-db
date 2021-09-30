import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ListGroup, Button, Container} from "react-bootstrap";
import axios from 'axios';


export default class EstablimentBorrar extends Component {
    constructor(props){
        super(props);
        this.state = {
            id_establiment: '',
            nom_comercial: '',
            horari_obertura: '',
            descripcio_general: '',
        }
    }

    componentDidMount() {
        //console.log(this.props.match.params.id_establiment)
        var id = this.props.match.params.id_establiment;

        this.descarrega(id);
    }


    descarrega=(id)=>{
        axios.get('http://localhost/ServidorDAW20-21/rest/rest/public/establiment/' + id)
        .then(response=> {
            console.log(response);
            console.log(response.data);
            console.log(response.data.id_establiment);
            console.log(response.data.nom_comercial);
            console.log(response.data.horari_obertura);
            console.log(response.data.descripcio_general);
            this.setState({
                id_establiment:response.data.id_establiment,
                nom_comercial:response.data.nom_comercial,
                horari_obertura:response.data.horari_obertura,
                descripcio_general:response.data.descripcio_general,
                //email:response.data.dades.email,
                // urlFoto:response.data.dades.foto
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
    form_data.append('nom', this.state.id_establiment);
    form_data.append('email', this.state.nom_comercial);
    form_data.append('password', this.state.horari_obertura);
    form_data.append('foto', this.state.descripcio_general);

    //'http://34.234.155.213/quepassaeh/server/public/provausuari/' + this.state.codiusuari

    axios.delete('http://localhost/ServidorDAW20-21/rest/rest/public/establiment/' + this.state.id_establiment,
        form_data,
        { headers: {'content-type':'multipart/form-data'} }
    ).then(resposta=>
        {   
            
            console.log(resposta);
            console.log(resposta.data);
            window.location.href = "http://localhost:3000/loginBackEstabliments";
            
        }
    ).catch(error => {
        console.log(error);
    });
}

onChangeNom_comercial=(e)=>{
    this.setState({
        nom_comercial:e.target.value
    })
}

onChangeHorari_obertura=(e)=>{
    this.setState({
        horari_obertura:e.target.value
    })
}

onChangeDescripcioGeneral=(e)=>{
    this.setState({
        // horari_obertura:e.target.value
        descripcio_general:e.target.value
    })
}



// onChangePassword=(e)=>{
//     this.setState({
//         descripcio_general:e.target.value
//     })
// }

// onChangeFoto=(e)=>{
//     this.setState({
//         foto:e.target.files[0]
//     })
// }


    render() {
        return (
            <Container>
                {
                    <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <label>Codi Establiment:</label>
                    <input type="text" className="form-control" value={this.state.id_establiment} readOnly/>
                    </div>
                    <div className="form-group">
                    <label>Nom Establiment:</label>
                    <input type="text" className="form-control" readOnly onChange={this.onChangeNom_comercial} value={this.state.nom_comercial} />
                    </div>
                    <div className="form-group">
                    <label>Horari obertura: </label>
                    <input type="text" className="form-control" readOnly onChange={this.onChangeHorari_obertura} value={this.state.horari_obertura} />
                    </div>
                    <div className="form-group">
                    <label>Descripció general: </label>
                    <input type="text" className="form-control" readOnly onChange={this.onChangeDescripcioGeneral} value={this.state.descripcio_general} />
                    </div>
                    {/* <div className="form-group">
                    <label>Foto:</label>
                    <input type="file" className="form-control" />
                    </div> */}
                    <div className="form-group">
                    <input type="submit" className="btn btn-primary" value="Borrar" />
                    </div>
                    </form>
                }
            </Container>
        );
    }
}

