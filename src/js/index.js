//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
//import Home from "./component/home.jsx";
import Navbar from "./component/navbar.jsx";
import Jumbotron from "./component/jumbotron.jsx";
import Card from "./component/card.jsx";
import Footer from "./component/footer.jsx";

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(
    <>
        <Navbar />
        <div class="container">
            <Jumbotron />
            <Card />
        </div>
        <Footer />

    </>
);

