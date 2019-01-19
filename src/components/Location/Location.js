import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15126.262252706392!2d73.79391417261145!3d18.593614797862198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b91b0dd95daf%3A0xa6cb6e3796a09978!2sPimple+Saudagar%2C+Pimpri-Chinchwad%2C+Maharashtra!5e0!3m2!1sen!2sin!4v1546088225873" width="100%" height="500px" frameBorder="0" allowFullScreen></iframe> 
       <div className="location_tag">
       Location
       </div>
        </div>
    );
};

export default Location;