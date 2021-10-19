import React from 'react';
import Doctor from '../Doctor/Doctor';
import Footer from '../Footer/Footer';
import Header from '../page/Header';
import Service from '../Service/Service';




const Home = () => {
    return (
        <div>
            <Header></Header>
            
            <Service></Service>
            <Doctor></Doctor>
            
            <Footer></Footer>
            
            
        </div>
    );
};

export default Home;