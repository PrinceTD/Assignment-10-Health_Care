import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
    return (
        <div className='row bg-dark text-light mt-5 text-center p-5'>
            <div className='col-12 col-md-3 mt-4'>
                <h4>Location</h4>
                <p>
                    <span>
                        <i class="fas fa-map-marker-alt"></i>
                    </span>
                    <small>
                        424, New GIDC, Kabilpore,
                        <br />
                        Navsari, Gujarat, India.
                    </small>
                </p>
            </div>
            <div className='col-12 col-md-4 mt-4'>
                <h4>
                    Around the web
                </h4>
                <span>
                    <i class="fab fa-facebook pe-2"></i>
                    <i class="fab fa-instagram pe-2"></i>
                    <i class="fab fa-youtube pe-2"></i>
                    <i class="fab fa-twitter pe-2"></i>
                </span>
            </div>
            <div className='col-12 col-md-5 mt-4'>
                <h4>
                    About
                </h4>
                <p>
                    <small>
                        A Great Place to Work..
                    </small>
                </p>
            </div>
        </div>
    );
};

export default Footer;