import React from 'react';

export default class MenuElement extends React.Component {

	constructor(props){
        super(props);
    }

  	componentDidMount() {
    	console.log("Cargó");
  	}

	render() {
		return (
			<ul>Lista de Opciones</ul>
		);
	}
}