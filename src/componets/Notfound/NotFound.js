import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../img/404.jpg"

const NotFound = () => {
    return (
        <div className='text-center'>
            <img src={img} alt=""  />
          
        </div>
    );
};

export default NotFound;