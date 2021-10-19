import React from 'react';
import Doctor from '../Doctor/Doctor';
import Footer from '../Footer/Footer';
import Header from '../page/Header';
import Service from '../Service/Service';
import NewBanner from '../NewBanner/NewBanner'




const Home = () => {
    return (
        <div>
            <Header></Header>
            <NewBanner></NewBanner>
            <Service></Service>
            <Doctor></Doctor>
            
            <Footer></Footer>
           
            
            
        </div>
    );
};

export default Home;