import React, {Component} from 'react';
import OrderForm from '../common/OrderForm';
import pic from '../../assets/beeVector.svg';

class Packages extends Component {

    render(){
        return(
            <div className="queensContainer container-fluid animated bounceInLeft">
            <div className="card">
            <h1 className="display-1">Packages</h1>
                <div className="row row-space text-center">
                    
                    <div className="col-md-6 col-xs-12">
                    <img className="displayProduct" src={pic}/>
                        <h1 className="display-4">Our packages...</h1>
                        <p className="lead">this and that and this and that and this and that and this and that</p>
                    </div>
                        
                    
                    <div className="col-md-6 col-xs-12">
                    <OrderForm orderType='packages'/>
                </div>
                </div>
                </div>
            </div>
        );
    }
}
export default Packages;