import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import Header from '../page/Header';

const SingleService = () => {
    const { serviceId } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`/fackData.JSON`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
const extraData =  data.filter(booking => booking.id === serviceId)
console.log(extraData);
    return (

        <div>
            <Header></Header>
            <div className="container">
                {
                   
                }
            </div>

        </div>
    );
};

export default SingleService;