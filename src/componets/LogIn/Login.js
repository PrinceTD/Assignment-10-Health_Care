import React from 'react';
import useAuth from '../../hooks/useAuth';
import Header from '../page/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import './Login.css'


const Login = () => {
    const { signInUseingGoogle } = useAuth();
    return (
        <div>
            <Header></Header>
            <div className='text-center mt-5 mb-5 pt-5 background-img'>
              <h2 className='mb-4'>Plase Login</h2>
              <h5 className='pb-2'>
                  sign up / Register
              </h5>
                <Link to='/register'><button className='bg-danger border-0 text-light p-2'>
                <i className="fas fa-envelope text-light pe-3"></i>
                Sign in with email</button></Link>
                <br />
                <button className='bg-light border-0 p-2' onClick={signInUseingGoogle}><i className="fab fa-google pe-2"></i> Sign in with google</button>
            </div>
            
        </div>
    );
};

export default Login;