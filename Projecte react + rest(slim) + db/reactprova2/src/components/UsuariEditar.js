import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ListGroup, Button, Container} from "react-bootstrap";
import axios from 'axios';
import { MD5 } from 'crypto-js';


export default class UsuariEditar extends Component {
    constructor(props){
        super(props);
        this.state = {
            error:false,
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
        console.log(this.props.match.params.id_usuari)
        var id = this.props.match.params.id_usuari;
        this.descarrega(id);
    }


    descarrega=(id)=>{
        axios.get('http://localhost/ServidorDAW20-21/rest/rest/public/usuari/' + id)
        .then(response=> {
            console.log(response);
            console.log(response.data);
            console.log(response.data.id_usuari);
            // console.log(response.data.nom);
            // console.log(response.data.primer_cognom);
            // console.log(response.data.segon_cognom);
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

    axios.put('http://localhost/ServidorDAW20-21/rest/rest/public/usuari/' + this.state.id_usuari +"/"+ this.state.nom 
    +"/"+ this.state.primer_cognom +"/"+ this.state.segon_cognom +"/"+ this.state.poblacio +"/"+ this.state.carrer +"/"+ this.state.numero
    +"/"+ this.state.pis +"/"+ this.state.correuElectronic + "/" +  MD5(this.state.contrasenya) + "/" + this.state.boolean_tipus_usuari,
    
    //axios.put('http://localhost/ServidorDAW20-21/rest/rest/public/usuari/5/Esteve/S/C/Inca/Sol/125/bjs/esc1@gmail.com/202cb962ac59075b964b07152d234b70/1',
        form_data,
        { headers: {'content-type':'multipart/form-data'} }
    ).then(response=>
        {
            console.log(response);
            console.log(response.data);
            //console.log(response.data.correcta);
            if(response.data != '\"Tupla actualitzada\"1'){
                // this.setState({
                //     error:true
                // });
                console.log("adeu"); 
            } else{
                console.log("hola");
                //Si s'ha insertat be te du al crud de Establiments, per si vols fer més operacions
                window.location.href = "http://localhost:3000/loginBackUsuaris";
            }
        }
    ).catch(error => {
        console.log(error);
        // this.setState({
        //     error:true
        // });
    });
}

onChangeNom=(e)=>{
    this.setState({
        nom:e.target.value
    })
}

onChangePrimer_cognom=(e)=>{
    this.setState({
        primer_cognom:e.target.value
    })
}

onChangeSegon_cognom=(e)=>{
    this.setState({
        segon_cognom:e.target.value
    })
}

onChangeId_preu=(e)=>{
    this.setState({
        // horari_obertura:e.target.value
        id_preu:e.target.value
    })
}

onChangePoblacio=(e)=>{
    this.setState({
        // horari_obertura:e.target.value
        poblacio:e.target.value
    })
}

onChangeBooleanDestacat=(e)=>{
    this.setState({
        // horari_obertura:e.target.value
        boolean_destacat:e.target.value
    })
}

onChangeCarrer=(e)=>{
    this.setState({
        // horari_obertura:e.target.value
        carrer:e.target.value
    })
}

onChangeNumero=(e)=>{
    this.setState({
        // horari_obertura:e.target.value
        numero:e.target.value
    })
}

onChangePis=(e)=>{
    this.setState({
        // horari_obertura:e.target.value
        pis:e.target.value
    })
}

onChangeCorreuElectronic=(e)=>{
    this.setState({
        // horari_obertura:e.target.value
        correuElectronic:e.target.value
    })
}

onChangeContrasenya=(e)=>{
    this.setState({
        // horari_obertura:e.target.value
        contrasenya:e.target.value
    })
}

onChangeBoolean_tipus_usuari=(e)=>{
    this.setState({
        // horari_obertura:e.target.value
        boolean_tipus_usuari:e.target.value
    })
}






    render() {
        return (
            <Container>
                {
                    <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <label>id usuari:</label>
                    <input type="text" className="form-control" value={this.state.id_usuari} readOnly/>
                    </div>
                    <div className="form-group">
                    <label>Nom:</label>
                    <input type="text" className="form-control" onChange={this.onChangeNom} value={this.state.nom}/>
                    </div>
                    <div className="form-group">
                    <label>Primer cognom:</label>
                    <input type="text" className="form-control" onChange={this.onChangePrimer_cognom} value={this.state.primer_cognom} />
                    </div>
                    <div className="form-group">
                    <label>Segon cognom: </label>
                    <input type="text" className="form-control" onChange={this.onChangeSegon_cognom} value={this.state.segon_cognom} />
                    </div>
                    <div className="form-group">
                    <label>Poblacio: </label><br/>
                    <input type="text" className="form-control" onChange={this.onChangePoblacio} value={this.state.poblacio} />
                    </div>  

                    <div className="form-group">
                    <label>Carrer </label>
                    <input type="text" className="form-control" onChange={this.onChangeCarrer} value={this.state.carrer} />
                    </div>

                    <div className="form-group">
                    <label>Numero:  </label><br/>
                    <input type="number" className="form-control" onChange={this.onChangeNumero} value={this.state.numero} />
                    </div>


                    <div className="form-group">
                    <label>Pis:  </label>
                    <input type="text" className="form-control" onChange={this.onChangePis} value={this.state.pis} />
                    </div>

                    <div className="form-group">
                    <label>Correu Electronic:  </label>
                    <input type="text" className="form-control" onChange={this.onChangeCorreuElectronic} value={this.state.correuElectronic} />
                    </div>

                    <div className="form-group">
                    <label>Contrasenya: (Alerta!!) </label>
                    <input type="password" className="form-control" onChange={this.onChangeContrasenya} value={this.state.contrasenya}/>
                    </div>

                    <div className="form-group">
                    <label>Boolean_tipus_usuari: (0: Usuari normal, 1: Usuari Admin) </label>
                    <input type="number" min="0" max="1" className="form-control" onChange={this.onChangeBoolean_tipus_usuari} value={this.state.boolean_tipus_usuari} />
                    </div>

                    {/* <div className="form-group">
                    <label>Foto:</label>
                    <input type="file" className="form-control" />
                    </div> */}
                    <div className="form-group">
                    <p>
                    <input type="submit" className="btn btn-primary" value="Actualitzar" />
                    
                    {this.state.error?" No s'ha pogut actualitzar":""}</p>
                    </div>

                    
                    </form>
                    
                }
            </Container>
        );
    }
}

