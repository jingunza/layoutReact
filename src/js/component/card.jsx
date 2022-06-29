import React from "react";

//create your first component
const Card = (props) => {
	return (
        <div className="container d-flex justify-content-center col col-sm-6 col-lg-3 mb-3">
            <div className="card" style={{width: "16rem"}}>
                <img src="http://via.placeholder.com/500x325" className="card-img-top" alt="placeholder" />
                <div className="card-body justify-content-center">
                    <h5 className="card-title text-center">{props.title}</h5>
                    <p className="card-text text-center">{props.description}</p>
                    <div className="row justify-content-center">
                        <div className="col-10"><a href={props.botonUrl} className="btn btn-primary d-block ">{props.boton}</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;