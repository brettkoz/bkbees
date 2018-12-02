import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class ThankYou extends Component {
    componentWillReceiveProps(nextProps){
        if (!nextProps.order){
            this.props.history.push('/bees')
        }
    }
  render(){
      let name;
      if (!this.props.order.order){
          name = '';
      } else{
        name = this.props.order.order.name;
      }
      return(
          <div><h1 className="display-4">Thank You {name}</h1></div>
      )
  }
}
ThankYou.propTypes ={
    order: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    order:state.order
})

export default connect(mapStateToProps)(withRouter(ThankYou));
