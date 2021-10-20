import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../page/Header';

const SingleService = () => {
    const { serviceId } = useParams();
    const [serviceData, setServiceData] = useState([]);
    useEffect(() => {
    fetch('/fackData.json')
        .then(res=>res.json())
        .then(data => setServiceData(data))
    }, []);
    const extraData = serviceData.filter(td => td._id == serviceId);
    console.log(extraData);

    return (

        <div>
            <Header></Header>
            <div className="container">
                <p>this is {serviceId}</p>
            </div>

        </div>
    );
};

export default SingleService;