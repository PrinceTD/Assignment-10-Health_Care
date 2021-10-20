import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner from "../../img/1.png"
import './NewBanner.css'


const NewBanner = () => {
    return (
        <div className="banner">
            <div className="container mt-2 mb-3" >
                <div className='row '>
                    <div className="col-md-9 pt-5 mt-5 ps-4">
                        <p className="fs-1 pt-5 pb-3" >
                            We are providing <br />
                            <strong className='text-info'>Best Medical Services</strong>
                        </p>
                        <p className='text-secondary pb-5 pb-3'>
                            Contented continued any happiness instantly objection yet her allowance. Diversified screening / examination services in the most remote areas in the fastest way. Optima Technic designs and manufactures mobile units according to the end user’s needs. Use correct day new brought tedious decay begin which.

                        </p>

                    </div>
                    <div className="col-md-3 text-center">
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewBanner;