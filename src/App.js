import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import Nav from './Components/Nav'
import Contact from './Components/Contact'
import Footer from './Components/footer'
import Professors from './Components/Professors'
import {BrowserRouter, Router, Route, Switch ,link} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div className="container-fluid Page-main-container">
    <BrowserRouter>
    <div>
      <Nav/>
    <Switch>
<Route exact path="/" component={Home}/>
<Route exact path="/Professors" component={Professors}/>



    </Switch>
    <Footer/>
    </div>
    </BrowserRouter>
      </div>
    );
  }
}

export default App;
