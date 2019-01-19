import React, { Component } from 'react';
import './resources/styles.css';
import {Element} from 'react-scroll';


import Header from './components/header_footer/Header';
import Featured from './components/sectionFeature/Featured';
import VenueInfo from './components/VenueInfo/VenueInfo';
import Highlight from './components/Highlights/highlights';
import Pricing from './components/Pricing/Pricing';
import Location from './components/Location/Location';
import Footer from './components/header_footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
    <Header/>

    <Element name="featured">
    <Featured/>
    </Element>
    
    <Element name="venueInfo">
    <VenueInfo/>
    </Element>
    
    <Element name="highlights">
    <Highlight/>
    </Element>
    <Element name="pricing">
    <Pricing/>
    </Element>
    <Element name="location">
    <Location/>
    </Element>
    <Footer/>
   
    </div>
    );
  }
}

export default App;
