import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../Utils/MyButton';


class Discount extends Component {

  
state = {
    discountStart:0,
    discountEnd:30
}

  porcentage = () => {
      if(this.state.discountStart < this.state.discountEnd){
this.setState({
    discountStart: this.state.discountStart + 1
})
      }
      else{
        this.discountStart =  1 ; 
      }
      console.log('discountStart',this.state.discountStart);
  }
componentDidUpdate(){
    setTimeout(() => {
        this.porcentage()
    },30)
}

    render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
        <Fade onReveal={()=> this.porcentage()}>
        <div className="discount_porcentage">
        <span>{this.state.discountStart}%</span>
        <span>OFF</span>
        </div>
        </Fade>
    
      <Slide right>
      <div className="discount_description">
        <h3>Purchase it on 30% discount</h3>
        <p>It is a long established fact that a reader to using 'Content here, content here', making it look li</p>
       <MyButton text="Purchase tickets" bck="#ffa880" color="#ffffff" link="http://google.com"/>
        </div>
    
      </Slide>
        </div>
      </div>
    )
  }
}

export default Discount;