import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Important = () => {
    return (
        <div className='container mb-5 mt-5 pt-5'>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col text-center">
                    <div className="card h-100 p-5 border-0 shadow">
                        <h1> <i className="fas fa-ambulance"></i></h1>
                        <div className="card-body">
                            <h5 className="card-title text-info">Emergency Case</h5>
                            <p className="card-text text-secondary">Moment he at on wonder at season little. Six garden result summer set family.</p>
                            <p>
                                <strong>
                                    Phone: 
                                </strong>
                                <span className='text-secondary'>
                                     (+987)98765432
                                </span>
                            </p>
                        </div>

                    </div>
                </div>
                <div className="col text-center">
                    <div className="card h-100 p-5 border-0 shadow">
                        <h1><i className="far fa-clock"></i></h1>
                        <div className="card-body">
                            <h5 className="card-title text-info">Opening Hours</h5>
                            <div>
                                <p className="d-flex justify-content-between text-secondary">
                                    <strong>
                                        Mon - Tue :
                                    </strong>
                                    <span>
                                        8:00 - 17:30
                                    </span>
                                </p>
                                <p className="d-flex justify-content-between text-secondary">
                                    <strong>
                                        Wed - Thu :
                                    </strong>
                                    <span>
                                        10:45 - 15:00
                                    </span>
                                </p>
                                <p className="d-flex justify-content-between text-secondary">
                                    <strong>
                                        Sun :
                                    </strong>
                                    <span>
                                        <button className='border-0 text-light bg-dark rounded ps-2 pe-2'>Close</button>
                                    </span>
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col text-center">
                    <div className="card h-100 p-5 border-0 shadow">
                        <h1><i className="fas fa-procedures"></i></h1>
                        <div className="card-body">
                            <h5 className="card-title text-info">Cancer Care</h5>
                            <p className="card-text text-secondary">He at on wonder at season little. Six garden result summer set family.</p>
                            <p>
                                <strong>
                                    Phone:
                                </strong>
                                <span className='text-secondary'>
                                    (+987)98765432
                                </span>
                            </p>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    );
};

export default Important;