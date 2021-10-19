import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../page/Header';

const SingleService = () => {
    const {serviceId} = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`/fackData.JSON`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    const ExtraIteam = data.filter(td => td.id == serviceId);
    console.log(ExtraIteam);
    return (
      
        <div>
            <Header></Header>
                <p>single id : {serviceId}</p> 
            
        </div>
    );
};

export default SingleService;