import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './Services';

const Service = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch(`./fackData.json`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div id='service' className='container pt-5'>
            <div className='row mt-5 pt-3'>
                <div className="text-center">
                   <div>
                   <h4 className='text-info'>SERVICES</h4>
                    <h2 className='pt-3'>Our Department</h2>
                    
                    <p className='text-secondary'>
                        While mirth large of on front. Ye he greater related adapted proceed entered an. Through it  <br />examine express promise no. Past add size game cold girl off how old
                    </p>
                   </div>
                </div>
               
                <div className='row row-cols-1 row-cols-md-3 g-4 '>
                    {
                        service.map(service=> <Services
                        service={service}>
                        </Services>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Service;