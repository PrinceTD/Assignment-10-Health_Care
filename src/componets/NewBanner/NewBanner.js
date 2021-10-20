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
                            <strong>Best Medical Services</strong>
                        </p>
                        <p>
                            Contented continued any happiness instantly objection yet her allowance. Use correct day new brought tedious decay begin which.
                        </p>
                    </div>
                    <div className="col-md-7 ps-5 text-center">
                        <img src={banner} alt="" height="430px" width='400px' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewBanner;