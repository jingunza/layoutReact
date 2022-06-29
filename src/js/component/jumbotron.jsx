import React from "react";

//create your first component
const Jumbotron = (props) => {
	return (
		<div className="container px-1 pt-4 pb-0">
			<div id="jumbotron" className="container pt-3 px-5 pb-5 mb-4">
				<h1 className="display-4">{props.title}</h1>
				<p>{props.description}</p>
				<a className="btn btn-primary btn-lg" href={props.botonUrl} role="button">{props.boton}</a>
			</div>
		</div>
	);
};

export default Jumbotron;