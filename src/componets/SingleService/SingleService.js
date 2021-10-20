import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../page/Header';

const SingleService = () => {
    const { serviceId } = useParams();
    const [serviceData, setServiceData] = useState([]);
    const [service, setService] = useState({});
    useEffect(()=>{
        fetch('/fackData.JSON')
        .then(res=>res.json())
        .then(data => setServiceData(data));
    },[]);
    useEffect(()=>{
        const showData = serviceData.find(newData => newData.id === serviceId);
        console.log(showData);
        setService(showData);  
    },[service]);
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