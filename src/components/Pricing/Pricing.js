import React, { Component } from 'react';
import MyButton from '../Utils/MyButton';

class Pricing extends Component {

    state = {
        prices:[100,150,250],
        positions:['Balcony','Medium','Star'],
        desc:['lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum1',
    'lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum2',
    'lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum3'],
    linkto:['http://sales/b','http://sales/m','http://sales/s']
    }
    
    showBoxes = () => (
      
           this.state.prices.map((box,i) => (
               (
<div className="pricing_item">
<div className="pricing_inner_wrapper">
<div className="pricing_title">
<span>${this.state.prices[i]}</span>
<span>{this.state.positions[i]}</span>
</div>
<div className="pricing_description">
{this.state.desc[i]}
</div>
<div className="pricing_buttons">
<MyButton text="Purchase" bck="#ffa800" color="#ffffff">

</MyButton>
</div>
</div>
</div>
               )
           ))
    )
    


    render() {
        return (
            <div className="bck_black">
        <div className="center_wrapper pricing_section">
<h2>Pricing</h2>
<div className="pricing_wrapper">
{this.showBoxes()}
</div>
        </div>
      </div>
        );
    }
}

export default Pricing;