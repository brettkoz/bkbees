import React, {Component} from 'react';

class ActiveOrder extends Component {
constructor(props){
    super(props);
    this.state ={
        order:{},
        modify:false
    }
}

showModify = () =>{
    this.setState({modify:true});
}
    render(){
        let orderContent,modifyOrderContent,displayContent;
        if (this.props.order == null){
            displayContent = (<h1>NO ACTIVE ORDER</h1>);
            orderContent = (<h1>NO ACTIVE ORDER</h1>);
        } else {
            orderContent = (
                <div className="order-display">
                <h1 className="display-5">Selected Order</h1>
                <ul className="activeOrderList">
                <li>{this.props.order.name}</li>
                    <li>{this.props.order.type}</li>
                    <li>{this.props.order.date}</li>
                    <li>{this.props.order.phone}</li>
                    <li>{this.props.order.email}</li>
                    <li>{this.props.order.quantity}</li>
                    <li>{this.props.order.notes}</li>
                </ul>
                <button className="btn btn-primary" onClick={()=>this.showModify()}>Modify Order</button>
                </div>
            );
            modifyOrderContent = (
<form className=" modifyOrderForm">
  <div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="text" className="form-control" id="name" placeholder={this.props.order.name}/>
  </div>
  <div className="form-group">
    <label htmlFor="name">Date</label>
    <input type="date" className="form-control" id="date" placeholder={this.props.order.date}/>
  </div>
  <div className="form-group">
    <label htmlFor="emailInput">Email address</label>
    <input type="email" className="form-control" id="emailInput" placeholder={this.props.order.email}/>
  </div><div className="form-group">
    <label htmlFor="phone">Phone</label>
    <input type="number" className="form-control" id="phone" placeholder={this.props.order.phone}/>
  </div><div className="form-group">
    <label htmlFor="emailInput">Quantity</label>
    <input type="email" className="form-control" id="emailInput" placeholder={this.props.order.email}/>
  </div><div className="form-group">
    <label htmlFor="emailInput">Email address</label>
    <input type="email" className="form-control" id="emailInput" placeholder={this.props.order.email}/>
  </div>
</form>
            );
        }
            console.log('Order Content:' + orderContent);

            if (this.state.modify == true){
                displayContent = modifyOrderContent;
            } else {
                displayContent = orderContent;
            }
        
      return (
        <div>
          {displayContent}
        </div>
      )
    }
    
}

export default ActiveOrder;