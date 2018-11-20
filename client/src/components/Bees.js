import React ,{ Component } from 'react';
import OrderForm from './OrderForm';

class Bees extends Component{
    constructor(props){
        super(props);
        this.state = {
            view: 'categories'
        }
        this.onClickCategory = this.onClickCategory.bind(this);
        
    }
    onClickCategory(e){
        switch(e){
            case 'queens':
            this.props.history.push("/queens")
            break;
            case 'nucs':
            this.props.history.push("/nucs")
            break;
            case 'packages':
            this.props.history.push('packages')
            break;
            default:
            break;
        }
    }
    render(){
         return(
        <div className="container container-fluid text-center">
        <h1>Bees</h1>
        <p className="lead">Create an account for one-click ordering and personalized availability and shipping information</p>
        <div className="categories">
        <div className="category card"  onClick={(e) => {
            this.onClickCategory('queens')
        }} >Queens</div>
        <div className="category card" onClick={() => {
            this.onClickCategory('nucs');
        }}>Nucs</div>
        <div className="category card" onClick={() => {
            this.onClickCategory('packages');
        }}>Packages</div>
        </div>
        </div>
    );
    }
   
}

export default Bees;