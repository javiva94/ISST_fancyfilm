import React from 'react';
import Tabla from './Tabla';


export default class Cines extends React.Component {

	constructor(props){
        super(props);
    }

  	componentDidMount() {
    	console.log("Cargó");
  	}

	render() {
		return (
			<div>
			<Tabla /*sines={this.props.sines}*//>
			</div>
		);
	}
}