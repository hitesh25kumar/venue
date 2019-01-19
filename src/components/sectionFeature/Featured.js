import React from 'react';
import Carrousel from './Crousel';
import TimeUntill from './TimeUntill';

const Featured = () => {
    return (
        <div style={{position: 'relative'}}>
            <Carrousel/>
            <div className="artist_name">
            <div className="wrapper">
            Rider</div>
            </div>
            <TimeUntill/>
        </div>
    );
};

export default Featured;