import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ListGroup, Button, Container, ResponsiveEmbed} from "react-bootstrap";
import axios from 'axios';


export default class UsuariInsertar extends Component {
    constructor(props){
        super(props);
        this.state = {
            nom: '',
            primer_cognom: '',
            segon_cognom: '',
            poblacio: '',
            carrer: '',
            numero: '',
            pis: '',
            correuElectronic: '',
            contrasenya: '',
            boolean_tipus_usuari: '',
            error:false,

           
        }
    }

    // componentDidMount() {
    //     //console.log(this.props.match.params.id_establiment)
    //     //var id = this.props.match.params.id_establiment;
    //     // this.descarregaPreus();
    //     // this.descarregaBoolean();
    // }


    // descarregaPreus=()=>{   
    //     axios.get('http://localhost/ServidorDAW20-21/rest/rest/public/preu/')
    //     .then(response=> {
    //         console.log(response);
    //         console.log(response.data);
    //         console.log(response.data.id_preu);
    //         console.log(response.data.categoria_preus);
    //         this.setState({categoriaPreus:response.data});
    //     })
    //     .catch(function (error){
    //         console.log(error);
    //     })

    // }

    // descarregaBoolean=()=>{   
    //     axios.get('http://localhost/ServidorDAW20-21/rest/rest/public/establiment/booleanDestacat')
    //     .then(response=> {
    //         console.log(response);
    //         console.log(response.data);
    //         console.log(response.data.boolean_destacat);
    //         this.setState({booleansDestacats:response.data});
    //     })
    //     .catch(function (error){
    //         console.log(error);
    //     })

    // }

// sabrerId=(e)=>{

//     //les feines que hi havia mes lo que hi hagui dedins el input es ficara al setState(estat)
//     this.setState({id_establiment_seleccionat:e.target.value})
// }

// sabrerIdBooleanDestacat=(e)=>{

//     //les feines que hi havia mes lo que hi hagui dedins el input es ficara al setState(estat)
//     this.setState({id_booleanDestacat_seleccionat:e.target.value})
// }

onSubmit=(e)=>{
    e.preventDefault();
    //Modificar al servidor REST
    let form_data=new FormData();
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
    
    if( (this.state.id_usuari != -1) ){
        axios.post('http://localhost/ServidorDAW20-21/rest/rest/public/usuari/',{
                nom:this.state.nom,
                primer_cognom:this.state.primer_cognom,
                segon_cognom:this.state.segon_cognom,
                poblacio:this.state.poblacio,
                carrer:this.state.carrer,
                numero:this.state.numero,
                pis:this.state.pis,
                correuElectronic:this.state.correuElectronic,
                contrasenya:this.state.contrasenya,
                boolean_tipus_usuari:this.state.boolean_tipus_usuari,
        
    }).then(response=>
            {
                console.log(response);
                console.log(response.data);
                console.log(response.data.correcta);
                if(response.data.correcta == false){
                    this.setState({
                        error:true
                    });  
                } else{
                    // //Si s'ha insertat be te du al crud de Establiments, per si vols fer més operacions
                    window.location.href = "http://localhost:3000/loginBackUsuaris";
                }

                // console.log(response.data.id_establiment);
                // console.log(response.data.dades);
            }
        ).catch(error => {
            console.log(error);
            console.log(error.data.correcta);

            this.setState({
                error:true
            });  
        });
    }
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



onChangePassword=(e)=>{
    this.setState({
        descripcio_general:e.target.value
    })
}

onChangeFoto=(e)=>{
    this.setState({
        foto:e.target.files[0]
    })
}


    render() {
        return (
            <Container>
                {
                    <form onSubmit={this.onSubmit}>
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
                    <label>Contrasenya:  </label>
                    <input type="password" className="form-control" onChange={this.onChangeContrasenya} value={this.state.contrasenya} />
                    </div>

                    <div className="form-group">
                    <label>Boolean_tipus_usuari: (0-1) </label>
                    <input type="number" className="form-control" onChange={this.onChangeBoolean_tipus_usuari} value={this.state.boolean_tipus_usuari} />
                    </div>

                    {/* <div className="form-group">
                    <label>Foto:</label>
                    <input type="file" className="form-control" />
                    </div> */}
                    <div className="form-group">
                    <p>
                    <input type="submit" className="btn btn-primary" value="Insertar" />
                    
                    {this.state.error?" No s'ha pogut insertat":""}</p>
                    </div>

                    
                    </form>
                    
                }
            </Container>
        );
    }
}



