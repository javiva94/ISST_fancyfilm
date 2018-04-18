import React from 'react';
import Identidad from './Identidad';
import logo from './LOGO.png';
import './App.css'


export default class Cabecera extends React.Component {

	constructor(props){
        super(props);
    }

  	componentDidMount() {
    	console.log("Cargó");
  	}

	render() {
		return(
			<div className = "Cabecera">
					<h2 className = "mover-der">
						<button className="App-boton"> Registrarse </button> 
						<button className="App-boton"> LOGIN </button> 
					</h2>
					<h1 className = "App-title"> FANCYFILM </h1>
					<img className = "App-foto" src={logo} alt='logo' /> 
					
					
			</div>
		);
	}
}