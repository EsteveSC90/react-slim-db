import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ListGroup, Button, Container, ResponsiveEmbed} from "react-bootstrap";
import axios from 'axios';


export default class EstablimentInsertar extends Component {
    constructor(props){
        super(props);
        this.state = {
            tipus:'',
            error:false,
        }
    }

    // componentDidMount() {
    //     //console.log(this.props.match.params.id_establiment)
    //     //var id = this.props.match.params.id_establiment;
    //     this.descarregaPreus();
    //     this.descarregaBoolean();
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
    form_data.append('tipus', this.state.tipus);
    

    //'http://34.234.155.213/quepassaeh/server/public/provausuari/' + this.state.codiusuari
    
    if( (this.state.id_tipus_cuina != -1) ){
        axios.post('http://localhost/ServidorDAW20-21/rest/rest/public/tipus_cuina/',{
                tipus:this.state.tipus,
                
        
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
                    window.location.href = "http://localhost:3000/loginBackTipusEstabliment";
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
onChangeTipus=(e)=>{
    this.setState({
        tipus:e.target.value
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
                    <label>tipus_cuina:</label>
                    <input type="text" className="form-control" onChange={this.onChangeTipus} value={this.state.tipus}/>
                    </div>
                    
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



