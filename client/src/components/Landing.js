import React,{Component} from 'react';

class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {
      isHovered:false
    }
  }

  handleHover = () => {
    
    let hovered = !this.state.isHovered;
    console.log(hovered);
    this.setState(
      {isHovered:hovered}
    )
  }
  render (){
    const btnClass = this.state.isHovered?"bounce error animated" : "";
    return(
      
        <div className="contentContainer">
          <div className="buttons">
            <h1>B&K BEES</h1>
            <p className="tagline">have some fun with your bees</p>
            <button onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} className={btnClass + "btn btn-lg btn-dark"}>Order Bees</button>
            <button onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} className={ "btn btn-lg btn-dark"}>Watch Videos</button>
            
          </div>
        </div>
    )
  }
    
}

export default Landing;