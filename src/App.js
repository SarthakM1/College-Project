import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from "react-router-dom";
import {} from "react-bootstrap";
import { $ }  from 'react-jquery-plugin';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import SignUp from "./SignUp";




const App = () => {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/" />
    </Switch>
    
    </>
  );
};

export default App;
