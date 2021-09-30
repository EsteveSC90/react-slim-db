import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ListGroup, Button, Container, ResponsiveEmbed} from "react-bootstrap";
import axios from 'axios';


export default class EstablimentInsertar extends Component {
    constructor(props){
        super(props);
        this.state = {
            latitud: '',
            longitud: '',
            nom_comercial: '',
            id_preu: '',
            horari_obertura: '',
            boolean_destacat: '',
            poblacio: '',
            carrer: '',
            numero: '',
            telefon: '',
            categoriaPreus:[],
            id_establiment_seleccionat: '',
            booleansDestacats:[],
            id_booleanDestacat_seleccionat: '',
            error:false,
        }
    }

    componentDidMount() {
        //console.log(this.props.match.params.id_establiment)
        //var id = this.props.match.params.id_establiment;
        this.descarregaPreus();
        this.descarregaBoolean();
    }


    descarregaPreus=()=>{   
        axios.get('http://localhost/ServidorDAW20-21/rest/rest/public/preu/')
        .then(response=> {
            console.log(response);
            console.log(response.data);
            console.log(response.data.id_preu);
            console.log(response.data.categoria_preus);
            this.setState({categoriaPreus:response.data});
        })
        .catch(function (error){
            console.log(error);
        })

    }

    descarregaBoolean=()=>{   
        axios.get('http://localhost/ServidorDAW20-21/rest/rest/public/establiment/booleanDestacat')
        .then(response=> {
            console.log(response);
            console.log(response.data);
            console.log(response.data.boolean_destacat);
            this.setState({booleansDestacats:response.data});
        })
        .catch(function (error){
            console.log(error);
        })

    }

sabrerId=(e)=>{

    //les feines que hi havia mes lo que hi hagui dedins el input es ficara al setState(estat)
    this.setState({id_establiment_seleccionat:e.target.value})
}

sabrerIdBooleanDestacat=(e)=>{

    //les feines que hi havia mes lo que hi hagui dedins el input es ficara al setState(estat)
    this.setState({id_booleanDestacat_seleccionat:e.target.value})
}

onSubmit=(e)=>{
    e.preventDefault();
    //Modificar al servidor REST
    let form_data=new FormData();
    form_data.append('latitud', this.state.latitud);
    form_data.append('longitud', this.state.longitud);
    form_data.append('nom_comercial', this.state.nom_comercial);
    form_data.append('id_preu', this.state.id_preu);
    form_data.append('horari_obertura', this.state.horari_obertura);
    form_data.append('boolean_destacat', this.state.boolean_destacat);
    form_data.append('poblacio', this.state.poblacio);
    form_data.append('carrer', this.state.carrer);
    form_data.append('numero', this.state.numero);
    form_data.append('telefon', this.state.telefon);

    //'http://34.234.155.213/quepassaeh/server/public/provausuari/' + this.state.codiusuari
    console.log(this.state.id_booleanDestacat_seleccionat);
    if( (this.state.id_establiment_seleccionat != -1) && (this.state.id_booleanDestacat_seleccionat != -1)){
        axios.post('http://localhost/ServidorDAW20-21/rest/rest/public/establiment/',{
                latitud:this.state.latitud,
                longitud:this.state.longitud,
                nom_comercial:this.state.nom_comercial,
                // id_preu:this.state.id_preu,
                id_preu:this.state.id_establiment_seleccionat,
                horari_obertura:this.state.horari_obertura,
                // boolean_destacat:this.state.boolean_destacat,
                boolean_destacat:this.state.id_booleanDestacat_seleccionat,
                poblacio:this.state.poblacio,
                carrer:this.state.carrer,
                numero:this.state.numero,
                telefon:this.state.telefon,
        
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
                    //Si s'ha insertat be te du al crud de Establiments, per si vols fer més operacions
                    window.location.href = "http://localhost:3000/loginBackEstabliments";
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
onChangeLatitud=(e)=>{
    this.setState({
        latitud:e.target.value
    })
}

onChangeLongitud=(e)=>{
    this.setState({
        longitud:e.target.value
    })
}

onChangeNom_comercial=(e)=>{
    this.setState({
        nom_comercial:e.target.value
    })
}

onChangeId_preu=(e)=>{
    this.setState({
        // horari_obertura:e.target.value
        id_preu:e.target.value
    })
}

onChangeHorari_obertura=(e)=>{
    this.setState({
        // horari_obertura:e.target.value
        horari_obertura:e.target.value
    })
}

onChangeBooleanDestacat=(e)=>{
    this.setState({
        // horari_obertura:e.target.value
        boolean_destacat:e.target.value
    })
}

onChangePoblacio=(e)=>{
    this.setState({
        // horari_obertura:e.target.value
        poblacio:e.target.value
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

onChangeTelefon=(e)=>{
    this.setState({
        // horari_obertura:e.target.value
        telefon:e.target.value
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
                    <label>Latitud:</label>
                    <input type="number" className="form-control" onChange={this.onChangeLatitud} value={this.state.latitud}/>
                    </div>
                    <div className="form-group">
                    <label>Longitud:</label>
                    <input type="number" className="form-control" onChange={this.onChangeLongitud} value={this.state.lo} />
                    </div>
                    <div className="form-group">
                    <label>Nom comercial: </label>
                    <input type="text" className="form-control" onChange={this.onChangeNom_comercial} value={this.state.nom_comercial} />
                    </div>
                    <div className="form-group">
                    <label>Id preu: </label><br/>
                    {/* <input type="text" className="form-control" onChange={this.onChangeId_preu} value={this.state.id_preu} /> */}
                    

                        <select onChange={this.sabrerId}>
                            <option value="-1" key="-1">Selecciona un</option>

                            {
                                //es un array
                                this.state.categoriaPreus.map(
                                    //elemento
                                    function (establiment, index) {
                                        return <option key={index} value={establiment.id_preu}>{establiment.categoria_preus}</option>

                                    }

                                )

                            }
                        </select>
                        {/* <h1><p id={this.state.id_establiment_seleccionat} >{this.state.id_establiment_seleccionat}</p></h1> */}
                    </div>       
                    <div className="form-group">
                    <label>horari_obertura </label>
                    <input type="text" className="form-control" onChange={this.onChangeHorari_obertura} value={this.state.horari_obertura} />
                    </div>

                    <div className="form-group">
                    <label>boolean_destacat:   0 - no destacat / 1 - destacat</label><br/>
                   
                    
                    {/* <input type="text" className="form-control" onChange={this.onChangeBooleanDestacat} value={this.state.boolean_destacat} /> */}
                    <select onChange={this.sabrerIdBooleanDestacat}>
                            <option value="-1" key="-1">Selecciona un</option>

                            {
                                //es un array
                                this.state.booleansDestacats.map(
                                    //elemento
                                    function (establiment, index) {
                                        return <option key={index} value={establiment.boolean_destacat}>{establiment.boolean_destacat}</option>

                                    }

                                )

                            }
                        </select>
                        {/* <h1><p id={this.state.id_booleanDestacat_seleccionat} >{this.state.id_booleanDestacat_seleccionat}</p></h1> */}
                    </div>


                    <div className="form-group">
                    <label>Poblacio:  </label>
                    <input type="text" className="form-control" onChange={this.onChangePoblacio} value={this.state.poblacio} />
                    </div>

                    <div className="form-group">
                    <label>Carrer:  </label>
                    <input type="text" className="form-control" onChange={this.onChangeCarrer} value={this.state.carrer} />
                    </div>

                    <div className="form-group">
                    <label>Numero:  </label>
                    <input type="number" className="form-control" onChange={this.onChangeNumero} value={this.state.numero} />
                    </div>

                    <div className="form-group">
                    <label>Telefon:  </label>
                    <input type="text" className="form-control" onChange={this.onChangeTelefon} value={this.state.telefon} />
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



