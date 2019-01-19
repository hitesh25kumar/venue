import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_red">
            <Fade delay={500}>
            <div className="font_righteous footer_logo_venue">
            The venue
            <div className="footer_copyright">
            The venue all rights reserved by Rider
            </div>
            </div>
            </Fade>
        </footer>
    );
};

export default Footer;