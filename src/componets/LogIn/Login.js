import React from 'react';
import useAuth from '../../hooks/useAuth';
import Header from '../page/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';


const Login = () => {
    const { signInUseingGoogle } = useAuth();
    return (
        <div>
            <Header></Header>
            <div className='text-center'>
                <h2>please Log in</h2>
               

                <div>------------ or -----------</div>
                <br />
                <br />
                <Link to='/register'>email</Link>
                <button onClick={signInUseingGoogle}>google Sign in</button>
            </div>
            
        </div>
    );
};

export default Login;