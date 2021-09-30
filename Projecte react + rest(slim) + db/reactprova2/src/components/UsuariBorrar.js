import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ListGroup, Button, Container} from "react-bootstrap";
import axios from 'axios';


export default class UsuariBorrar extends Component {
    constructor(props){
        super(props);
        this.state = {
            id_usuari: '',
            nom: '',
            primer_cognom: '',
            segon_cognom: '',
            poblacio: '',
            carrer: '',
            numero: '',
            pis: '',
            correuElectronic: '',
            contrasenya: '',
            boolean_tipus_usuari: ''
        }
    }

    componentDidMount() {
        //console.log(this.props.match.params.id_establiment)
        var id = this.props.match.params.id_usuari;

        this.descarrega(id);
    }


    descarrega=(id)=>{
        axios.get('http://localhost/ServidorDAW20-21/rest/rest/public/usuari/' + id)
        .then(response=> {
            console.log(response);
            console.log(response.data);
            console.log(response.data.id_usuari);
            console.log(response.data.nom);
            console.log(response.data.primer_cognom);
            console.log(response.data.segon_cognom);
            this.setState({
                id_usuari:response.data.id_usuari,
                nom:response.data.nom,
                primer_cognom:response.data.primer_cognom,
                segon_cognom:response.data.segon_cognom,
                poblacio:response.data.poblacio,
                carrer:response.data.carrer,
                numero:response.data.numero,
                pis:response.data.pis,
                correuElectronic:response.data.correuElectronic,
                contrasenya:response.data.contrasenya,
                boolean_tipus_usuari:response.data.boolean_tipus_usuari
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
    form_data.append('id_usuari', this.state.id_usuari);
    form_data.append('nom', this.state.nom);
    form_data.append('primer_cognom', this.state.primer_cognom);
    form_data.append('segon_cognom', this.state.segon_cognom);
    form_data.append('poblacio', this.state.poblacio);
    form_data.append('carrer', this.state.carrer);
    form_data.append('numero', this.state.numero);
    form_data.append('pis', this.state.pis);
    form_data.append('correuElectronic', this.state.correuElectronic);
    form_data.append('contrasenya', this.state.contrasenya);
    form_data.append('boolean_tipus_usuari', this.state.boolean_tipus_usuari);
    

    //'http://34.234.155.213/quepassaeh/server/public/provausuari/' + this.state.codiusuari

    axios.delete('http://localhost/ServidorDAW20-21/rest/rest/public/usuari/' + this.state.id_usuari,
        form_data,
        { headers: {'content-type':'multipart/form-data'} }
    ).then(resposta=>
        {   
            
            console.log(resposta);
            console.log(resposta.data);
            window.location.href = "http://localhost:3000/loginBackUsuaris";
            
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
                    <label>Codi Usuari:</label>
                    <input type="text" className="form-control" value={this.state.id_usuari} readOnly/>
                    </div>
                    <div className="form-group">
                    <label>Nom:</label>
                    <input type="text" className="form-control" readOnly value={this.state.nom} />
                    </div>
                    <div className="form-group">
                    <label>primer_cognom: </label>
                    <input type="text" className="form-control" readOnly value={this.state.primer_cognom} />
                    </div>
                    <div className="form-group">
                    <label>segon_cognom: </label>
                    <input type="text" className="form-control" readOnly value={this.state.segon_cognom} />
                    </div>

                    <div className="form-group">
                    <label>poblacio: </label>
                    <input type="text" className="form-control" readOnly value={this.state.poblacio} />
                    </div>

                    <div className="form-group">
                    <label>carrer: </label>
                    <input type="text" className="form-control" readOnly value={this.state.carrer} />
                    </div>

                    <div className="form-group">
                    <label>numero: </label>
                    <input type="text" className="form-control" readOnly value={this.state.numero} />
                    </div>

                    <div className="form-group">
                    <label>pis: </label>
                    <input type="text" className="form-control" readOnly value={this.state.pis} />
                    </div>

                    <div className="form-group">
                    <label>correuElectronic: </label>
                    <input type="text" className="form-control" readOnly value={this.state.correuElectronic} />
                    </div>

                    <div className="form-group">
                    <label>contrasenya: </label>
                    <input type="text" className="form-control" readOnly value={this.state.contrasenya} />
                    </div>

                    <div className="form-group">
                    <label>boolean_tipus_usuari: </label>
                    <input type="text" className="form-control" readOnly value={this.state.boolean_tipus_usuari} />
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

