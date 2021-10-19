import React from 'react';

const DoctorDataLoad = (props) => {
    const { img, name, expart } = props.data
    return (
        <div>

            <div class="col">
                <div class="card h-100 border-0 shadow">
                    <img src={img} height='300px' alt="" />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p className='text-success'>{expart}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DoctorDataLoad;