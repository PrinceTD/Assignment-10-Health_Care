import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Services = (props) => {
    const {id, name, img, title } = props.service
    return (
        <div>
            <div class="">
                <div class="col">
                    <div class="card h-100 border-0 shadow">
                    <img className='d-flex justify-content-center' src={img} alt=""  height='240px'/>
                        <div class="card-body">
                            <h5 class="card-title ps-3 text-info fw-bold">{name}</h5>
                            <p class="card-text p-3">{title.slice(0, 150)}...</p>
                        </div>
                        <div className='ps-3 pb-3'>
                        <Link to={`/booking/:${id}`}>
                        <button className='btn btn-info opacity-75 text-light fs-6 fw-bold'> Appointment now</button></Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;