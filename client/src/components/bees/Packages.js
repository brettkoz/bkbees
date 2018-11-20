import React, {Component} from 'react';
import OrderForm from './../OrderForm';

class Packages extends Component {

    render(){
        return(
            <div className="container">
            <h1>Packages</h1>
            <OrderForm/>
            </div>
        );
    }
}
export default Packages;