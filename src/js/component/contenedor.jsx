import React from "react";

//import your own components
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";

//create your component
const Contenedor = () => { 
	return (
    <div className="container bg-white px-0">
        <Jumbotron title="A Warm Welcome!" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti esse natus dolore iste perferendis facere, sed nam cum voluptate quia." boton="Call to Action!" botonUrl="http://www.google.com/" />
        <div className="row d-flex flex-wrap justify-content-evenly">
            <Card title="Card title" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti esse natus dolore iste perferendis facere, sed nam cum voluptate quia." boton="Find Out More!" botonUrl="http://www.google.com/" />
            <Card title="Card title" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti esse natus dolore iste perferendis facere, sed nam cum voluptate quia." boton="Find Out More!" botonUrl="http://www.google.com/" />
            <Card title="Card title" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti esse natus dolore iste perferendis facere, sed nam cum voluptate quia." boton="Find Out More!" botonUrl="http://www.google.com/" />
            <Card title="Card title" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti esse natus dolore iste perferendis facere, sed nam cum voluptate quia." boton="Find Out More!" botonUrl="http://www.google.com/" />
        </div>
    </div>
    );
}
export default Contenedor;