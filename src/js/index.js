//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Nav from "./component/nav.jsx";
import Contenedor from "./component/contenedor.jsx";
import Footer from "./component/footer.jsx";

//create your component
const MyMainComponent = () => {
    return (
        <div className="container-fluid mx-0 px-0">
            <Nav />
            <Contenedor />
            <Footer />
        </div>
    );
};

ReactDOM.render(<MyMainComponent />, document.querySelector("#app"));