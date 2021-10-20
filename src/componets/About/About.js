import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../page/Header';
import './About.css'

const About = () => {
    return (
        <div>
            <Header></Header>
            <div className='text-center'>

                <div className='about-us'>
                    <h1 className="About text-center">About Me</h1>
                    <div className='container'>
                    <h3 className='pt-3'>WHO WE ARE</h3>
                    <hr />
                    <p className="mb-5 pb-5">
                        Established in 1962, Landscaping WP Company proudly serves all major markets, as one of the leading full-service providers for high-end residential estates and commercial landscaping. Landscaping WP is made up of nearly 200 highly skilled landscape experts, including a permanent team of professional turf grass and horticulture managers, landscape designers, chemical technicians, and floriculturists.
                    </p>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;