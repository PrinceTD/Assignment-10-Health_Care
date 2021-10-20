import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner from "../../img/1.png"
import './NewBanner.css'


const NewBanner = () => {
    return (
        <div className="banner">
            <div className="container mt-2 " >
                <div className='row '>
                    <div className="col-md-5 pt-5 mt-5 ps-4">
                        <p className="fs-1">
                            We are providing <br />
                            <strong className='text-info'>Best Medical Services</strong>
                        </p>
                        <p className='text-secondary'>
                            Contented continued any happiness instantly objection yet her allowance. Use correct day new brought tedious decay begin which.

                        </p>

                    </div>
                    <div className="col-md-7 text-center">
                        <img src={banner} alt="" height="380px" width='320px' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewBanner;