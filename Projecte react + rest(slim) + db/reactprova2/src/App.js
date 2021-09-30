//import logo from './logo.svg';
//import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from "react-bootstrap";
import SelectOptionsNomComercial from './components/SelectOption';
import TreurePerID from './components/TreurePerID';
import Taula from './components/Taula';
import Login from './components/Login';
import BootstrapCarousel2 from './components/BootstrapCarousel2';
import LoginBackEstabliments from './components/LoginBackEstabliments';
import Establiment from "./components/EstablimentEditar";
import EstablimentEditar from "./components/EstablimentEditar";
import EstablimentBorrar from "./components/EstablimentBorrar";
import EstablimentInsertar from "./components/EstablimentInsertar";
import Cookies from 'universal-cookie';
import LoginBackUsuaris from './components/LoginBackUsuaris';
import UsuariInsertar from "./components/UsuariInsertar";
import UsuariEditar from "./components/UsuariEditar";
import UsuariBorrar from "./components/UsuariBorrar";
import UsuariPerfil from "./components/UsuariPerfil";
import LoginBackTipusEstabliments from './components/LoginBackTipusEstabliment';
import TipusEstablimentInsertar from "./components/TipusEstablimentInsertar";
import TipusEstablimentEditar from "./components/TipusEstablimentEditar";
import TipusEstablimentBorrar from "./components/TipusEstablimentBorrar";
import LoginBackPreus from './components/LoginBackPreus';
import PreusInsertar from "./components/PreusInsertar";
import PreusEditar from "./components/PreusEditar";
import PreusBorrar from "./components/PreusBorrar";

function App(props) {
  const cookies = new Cookies();
  var cooki1 = cookies.get('idUser');
  var cooki2 = cookies.get('admin');
  console.log(cookies.get('idUser')); // idUsuari
  console.log(cookies.get('admin')); // admin
  // alert(cooki1);
  // alert(cooki2);

  // return (
  //   <Router basename="/react">
  //   <div>
  //     <Navbar bg="light" variant="light">
  //       <Navbar.Brand href="/">App Establiments</Navbar.Brand>
  //       <Nav className="mr-auto">
  //         <Nav.Link href="/">Principal</Nav.Link>
  //         {/* <Nav.Link href="/contacte">Contacte</Nav.Link> */}
  //         {/* vvvvvvvvvv */}
  //         <Nav.Link href="/selectOptions">Informació sobre un establiment</Nav.Link>
  //         {/* <Nav.Link href="/treurePerID">treurePerID</Nav.Link> */}
  //         <Nav.Link href="/taula">Taula Establiments</Nav.Link>
  //         <Nav.Link href="/login">Login</Nav.Link>
  //       </Nav>
  //     </Navbar>

  //     {/* <nav>
  //       <ul>
  //         <li>
  //           <Link to="/Principal">Principal</Link>
  //         </li>
  //         <li>
  //           <Link to="/contacte">Contacte</Link>
  //         </li>
  //       </ul>
  //     </nav> */}
      

  //     <Switch>
  //     <Route exact path="/loginBackEstabliments">
  //         <LoginBackEstabliments />
  //       </Route>

  //       <Route exact path="/contacte">
  //         <Contacte />
  //       </Route>

  //       <Route exact path="/selectOptions">
  //         <SelectOptionsNomComercial />
  //         {/* <TreurePerID id={6} /> */}
  //       </Route>

  //       {/* <Route exact path="/treurePerID">
  //         <TreurePerID />
  //       </Route> */}

  //       <Route exact path="/Taula">
  //         <Taula />
  //       </Route>

  //       <Route exact path="/Login">
  //         <Login />
  //       </Route>
        

  //       <Route exact path="/">
  //         {/* Així crid la funció */}
          
  //         <Principal />
  //         <BootstrapCarousel2 />
  //       </Route>

  //       {/* crid el /establiment/1 i el envii al component establiment per editar */}
  //       <Route exact path="/establimentInsertar/:id_establiment" component={EstablimentInsertar}/>
        
  //       {/* crid el /establiment/1 i el envii al component establiment per editar */}
  //       <Route exact path="/establimentEditar/:id_establiment" component={EstablimentEditar}/>

  //       {/* crid el /establiment/1 i el envii al component establiment per insertar */}
  //       <Route exact path="/establimentBorrar/:id_establiment" component={EstablimentBorrar}/>

  //     </Switch>
  //   </div>
  //   </Router>

  // );
  
  function handleClick(e) {
    e.preventDefault();
    cookies.remove("idUser");
    cookies.remove("admin");
    window.location.href="http://localhost:3000/";
  }

  

  var loginText = 'Login';
  var loginUrl = 'login';
  //ESTA LOGUEAT!!
  if(typeof cooki1 !== 'undefined' ){
    //alert("estas logueat");
    console.log("estas logueat");
    loginText = 'Logout';
    loginUrl = 'http://localhost:3000/';
   
    
    
    

    //ES UN ADMIN!!
    if(cookies.get('admin') == 1){
      //alert("es un admin");
      console.log("es un admin");
      
      
      return (
        <Router basename="/react">
        <div>
          <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">App Establiments</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Principal</Nav.Link>
              {/* <Nav.Link href="/contacte">Contacte</Nav.Link> */}
              {/* vvvvvvvvvv */}
              <Nav.Link href="/selectOptions">Informació sobre un establiment</Nav.Link>
              {/* <Nav.Link href="/treurePerID">treurePerID</Nav.Link> */}
              <Nav.Link href="/taula">Taula Establiments</Nav.Link>
              
              {/* <Nav.Link href="/loginBackEstabliments">Admin Establiments</Nav.Link>
              <Nav.Link href="/loginBackUsuaris">Admin Usuaris</Nav.Link> */}

              <Nav.Link href="/usuariPerfil">Usuari Perfil</Nav.Link>
              <Nav.Link href={loginUrl} onClick={handleClick}>{loginText} </Nav.Link>

            </Nav>
          </Navbar>

          <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">Admin</Navbar.Brand>
            <Nav className="mr-auto">
              
              <Nav.Link href="/loginBackEstabliments">Admin Establiments</Nav.Link>
              <Nav.Link href="/loginBackUsuaris">Admin Usuaris</Nav.Link>
              <Nav.Link href="/loginBackTipusEstabliment">Admin Tipus Establiment</Nav.Link>
              <Nav.Link href="/loginBackPreus">Admin Preus</Nav.Link>
              

            </Nav>
          </Navbar>
    
          {/* <nav>
            <ul>
              <li>
                <Link to="/Principal">Principal</Link>
              </li>
              <li>
                <Link to="/contacte">Contacte</Link>
              </li>
            </ul>
          </nav> */}
          
    
          <Switch>
          <Route exact path="/loginBackEstabliments">
              <LoginBackEstabliments />
            </Route>

            <Route exact path="/loginBackUsuaris">
              <LoginBackUsuaris />
            </Route>

            <Route exact path="/loginBackTipusEstabliment">
              <LoginBackTipusEstabliments />
            </Route>

            <Route exact path="/loginBackPreus">
              <LoginBackPreus />
            </Route>
    
            <Route exact path="/contacte">
              <Contacte />
            </Route>
    
            <Route exact path="/selectOptions">
              <SelectOptionsNomComercial />
              {/* <TreurePerID id={6} /> */}
            </Route>
    
            {/* <Route exact path="/treurePerID">
              <TreurePerID />
            </Route> */}
    
            <Route exact path="/Taula">
              <Taula />
            </Route>
    
            <Route exact path="/Login">
              <Login />
            </Route>
            
    
            <Route exact path="/">
              {/* Així crid la funció */}
              
              <Principal />
              <BootstrapCarousel2 />
            </Route>
    
            {/* crid el /establiment/1 i el envii al component establiment per editar */}
            <Route exact path="/establimentInsertar/:id_establiment" component={EstablimentInsertar}/>
            
            {/* crid el /establiment/1 i el envii al component establiment per editar */}
            <Route exact path="/establimentEditar/:id_establiment" component={EstablimentEditar}/>
    
            {/* crid el /establiment/1 i el envii al component establiment per insertar */}
            <Route exact path="/establimentBorrar/:id_establiment" component={EstablimentBorrar}/>
    
            {/* crid el /usuari/1 i el envii al component usuari per editar */}
            <Route exact path="/usuariInsertar/:id_usuari" component={UsuariInsertar}/>

            {/* crid el /usuari/1 i el envii al component usuari per editar */}
            <Route exact path="/usuariEditar/:id_usuari" component={UsuariEditar}/>

            {/* crid el /usuari/1 i el envii al component usuari establiment per insertar */}
            <Route exact path="/usuariBorrar/:id_usuari" component={UsuariBorrar}/>

            {/* crid el /usuari/1 i el envii al component tipus establiment per editar */}
            <Route exact path="/tipusEstablimentInsertar/:id_tipus_cuina" component={TipusEstablimentInsertar}/>

            {/* crid el /usuari/1 i el envii al component tipus establiment per editar */}
            <Route exact path="/tipusEstablimentEditar/:id_tipus_cuina" component={TipusEstablimentEditar}/>

            {/* crid el /usuari/1 i el envii al component tipus establiment per borrar */}
            <Route exact path="/tipusEstablimentBorrar/:id_tipus_cuina" component={TipusEstablimentBorrar}/>

            
            <Route exact path="/preuInsertar/:id_preu" component={PreusInsertar}/>
            <Route exact path="/preuEditar/:id_preu" component={PreusEditar}/>
            <Route exact path="/preuBorrar/:id_preu" component={PreusBorrar}/>

            <Route exact path="/usuariPerfil">
              <UsuariPerfil />
            </Route>

          </Switch>
        </div>

        




        </Router>
    
      );


    } else {
      // ES UN USUARI NORMAL!!
      //alert("es un usuari normal");
      console.log("es un usuari normal");

      loginText = 'Logout';
      loginUrl = 'http://localhost:3000/';

      return (
        <Router basename="/react">
        <div>
          <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">App Establiments</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Principal</Nav.Link>
              {/* <Nav.Link href="/contacte">Contacte</Nav.Link> */}
              {/* vvvvvvvvvv */}
              <Nav.Link href="/selectOptions">Informació sobre un establiment</Nav.Link>
              {/* <Nav.Link href="/treurePerID">treurePerID</Nav.Link> */}

              <Nav.Link href="/taula">Taula Establiments</Nav.Link>
              <Nav.Link href="/usuariPerfil">Usuari Perfil</Nav.Link>
              <Nav.Link href={loginUrl} onClick={handleClick}>{loginText} </Nav.Link>
            </Nav>
          </Navbar>
    
          {/* <nav>
            <ul>
              <li>
                <Link to="/Principal">Principal</Link>
              </li>
              <li>
                <Link to="/contacte">Contacte</Link>
              </li>
            </ul>
          </nav> */}
          
    
          <Switch>
          <Route exact path="/loginBackEstabliments">
              <LoginBackEstabliments />
            </Route>
    
            <Route exact path="/contacte">
              <Contacte />
            </Route>
    
            <Route exact path="/selectOptions">
              <SelectOptionsNomComercial />
              {/* <TreurePerID id={6} /> */}
            </Route>
    
            {/* <Route exact path="/treurePerID">
              <TreurePerID />
            </Route> */}
    
            <Route exact path="/Taula">
              <Taula />
            </Route>
    
            <Route exact path="/Login">
              <Login />
            </Route>
            
    
            <Route exact path="/">
              {/* Així crid la funció */}
              
              <Principal />
              <BootstrapCarousel2 />
            </Route>
    
            {/* crid el /establiment/1 i el envii al component establiment per editar */}
            {/* <Route exact path="/establimentInsertar/:id_establiment" component={EstablimentInsertar}/> */}
            
            {/* crid el /establiment/1 i el envii al component establiment per editar */}
            {/* <Route exact path="/establimentEditar/:id_establiment" component={EstablimentEditar}/> */}
    
            {/* crid el /establiment/1 i el envii al component establiment per insertar */}
            {/* <Route exact path="/establimentBorrar/:id_establiment" component={EstablimentBorrar}/> */}


            <Route exact path="/usuariPerfil">
              <UsuariPerfil />
            </Route>
    
          </Switch>
        </div>
        </Router>
    
      );
    }

    
  } else {
    //USUARI NO LOGUEAT!!
    //alert("no logueat");
    console.log("no logueat");
    return (
      <Router basename="/react">
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="/">App Establiments</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Principal</Nav.Link>
            {/* <Nav.Link href="/contacte">Contacte</Nav.Link> */}
            {/* vvvvvvvvvv */}
            <Nav.Link href="/selectOptions">Informació sobre un establiment</Nav.Link>
            {/* <Nav.Link href="/treurePerID">treurePerID</Nav.Link> */}
            <Nav.Link href="/taula">Taula Establiments</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar>
  
        {/* <nav>
          <ul>
            <li>
              <Link to="/Principal">Principal</Link>
            </li>
            <li>
              <Link to="/contacte">Contacte</Link>
            </li>
          </ul>
        </nav> */}
        
  
        <Switch>
        <Route exact path="/loginBackEstabliments">
            <LoginBackEstabliments />
          </Route>
  
          <Route exact path="/contacte">
            <Contacte />
          </Route>
  
          <Route exact path="/selectOptions">
            <SelectOptionsNomComercial />
            {/* <TreurePerID id={6} /> */}
          </Route>
  
          {/* <Route exact path="/treurePerID">
            <TreurePerID />
          </Route> */}
  
          <Route exact path="/Taula">
            <Taula />
          </Route>
  
          <Route exact path="/Login">
            <Login />
          </Route>
          
  
          <Route exact path="/">
            {/* Així crid la funció */}
            
            <Principal />
            <BootstrapCarousel2 />
          </Route>
  
          {/* crid el /establiment/1 i el envii al component establiment per editar */}
          {/* <Route exact path="/establimentInsertar/:id_establiment" component={EstablimentInsertar}/> */}
          
          {/* crid el /establiment/1 i el envii al component establiment per editar */}
          {/* <Route exact path="/establimentEditar/:id_establiment" component={EstablimentEditar}/> */}
  
          {/* crid el /establiment/1 i el envii al component establiment per insertar */}
          {/* <Route exact path="/establimentBorrar/:id_establiment" component={EstablimentBorrar}/> */}
  
        </Switch>
      </div>
      </Router>
  
    );
  }
}




function Principal() {
  return <h2 class="centrat">Establiments de restauració a Mallorca</h2>;
}


function Contacte(){
  return <h2>Contacte</h2>
}



export default App;
