import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DoctorDataLoad from './DoctorDataLoad';


const Doctor = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`./DoctorData.json`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div id='doctor' className="container mb-5">
            <div className="text-center mt-5">
                <h4 className="text-info">DOCTORS</h4>
                <h2>Meet Our Experts</h2>
                <p>Line by line contract review and editing by nation's best healthcare attorneys. Order Online. No Hidden Costs. <br />  Flat Fee Contract Review, Expedited Review Options, Satisfaction Guaranteed</p>
            </div>
            <div class="row row-cols-1 row-cols-md-4 g-4 mb-3 border-0">
            {
                        data.map(data => <DoctorDataLoad
                        data={data}>
                            
                        </DoctorDataLoad>)
                    }
            </div>
        </div>
    );
};

export default Doctor;