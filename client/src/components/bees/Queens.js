import React, {Component} from 'react';
import OrderForm from '../common/OrderForm';
import pic from '../../assets/beeVector.svg';

class Queens extends Component {

    render(){
        return(
            <div className="queensContainer container-fluid animated bounceInLeft">
            <div className="card">
            <h1 className="display-1">Queens</h1>
                <div className="row row-space text-center">
                    
                    <div className="col-md-6 col-xs-12">
                    <img className="displayProduct" src={pic} alt="Queens"/>
                        <h1 className="display-4">Our queens...</h1>
                        <p className="lead">this and that and this and that and this and that and this and that</p>
                    </div>
                        
                    
                    <div className="col-md-6 col-xs-12">
                    <OrderForm orderType='queens'/>
                </div>
                </div>
                </div>
            </div>
        );
    }
}
export default Queens;