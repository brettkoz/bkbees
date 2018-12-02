import React, { Component } from "react";
import {  Route } from "react-router-dom";
import Main from './Main';
import Queens from './Queens';
import Nucs from './Nucs';
import Packages from './Packages';

import './Bees.css';


class Bees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "categories"
    };
    this.onClickCategory = this.onClickCategory.bind(this);
    console.log('got to bees constructor');
  }
  onClickCategory(e) {
    switch (e) {
      case "queens":
        this.props.history.push("/bees/queens");
        break;
      case "nucs":
        this.props.history.push("/bees/nucs");
        break;
      case "packages":
        this.props.history.push("/bees/packages");
        break;
      default:
        break;
    }
  }
  render() {
    return (
      
      <div className="container-fluid text-center animated bounceIn beesContainer">
         
         <Route exact path="/bees" component={Main}/>
         <Route  exact path="/bees/queens" component={Queens}/>
         <Route exact path="/bees/nucs" component={Nucs}/>
         <Route exact path="/bees/packages" component={Packages}/>
        
      </div>
    );
  }
}

export default Bees;
