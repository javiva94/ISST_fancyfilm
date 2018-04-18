import React from 'react';
import img1 from './imagen1.png';
import img2 from './imagen2.jpg';
import img3 from './imagen3.jpg';


export default class Publi extends React.Component {

	constructor(props){
        super(props);
    }

  	componentDidMount() {
    	console.log("Cargó");
  	}

  	getRandomArbitrary(min,max){
  		return Math.floor(Math.random()*(max-min))+min;
  	}
 
	render() {
		var imagenes = [img1,img2,img3]
		var numero = this.getRandomArbitrary(0,3);
		var resultado = imagenes[numero];
		return (
			<div className = "publi">
			  <img src={resultado} alt='logo' /> 
			</div>
		);
	}
}