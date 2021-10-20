import React from 'react';

const DoctorDataLoad = (props) => {
    const { img, name, expart } = props.data
    return (
        <div>

            <div className="col">
                <div className="card h-100 border-0 shadow">
                    <img src={img} height='300px' alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className='text-success'>{expart}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DoctorDataLoad;