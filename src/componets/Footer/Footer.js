import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (

        <div className="text-center bg-dark text-light p-5">

            <span>
                <i class="fab fa-facebook pe-2"></i>
                <i class="fab fa-instagram pe-2"></i>
                <i class="fab fa-youtube pe-2"></i>
                <i class="fab fa-twitter pe-2"></i>
            </span>
            <div>
                <h5>
                    <Link to='/home'>Home</Link>/<Link to='/about'>About</Link>/<Link to='/home#service'>Service</Link>/<Link to='/contact'>Contact</Link>/<Link to='/home#doctor'>Contact</Link>
                </h5>
                <p>
                ©CopyRight/taluderprince
                </p>
            </div>
        </div>
    );
};

export default Footer;