import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../page/Header';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from '@firebase/auth';
import { Link } from 'react-router-dom';


const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const auth = getAuth();

    const handelEmail = e => {
        setEmail(e.target.value)
    }
    const handelPassword = e => {
        setPassword(e.target.value)
    }
    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }
    const handelRegister = e => {
        e.preventDefault();

        console.log(email, password);
        if (password.length < 6) {
            return setError('Password Must be at last 6 charaters');
        }
        isLogin ? processLogin(email, password) : createNewUser(email, password)
    }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setError('')
        })
        .catch(error=>{
            setError(error.massage)
        })

    }

    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                setError('');
                verifyEmail();
            })
            .catch((error) => {
                setError(error.message);
            });
    }
    const verifyEmail = ()=>{
        sendEmailVerification(auth.currentUser)
        .then(result =>{
            console.log(result)
        })
    }

    return (
        <div className='text-center'>
            <Header></Header>
            <h3>Please {isLogin ? 'logIn' : "Register"}</h3>
            <form onSubmit={handelRegister}>
                <label htmlFor="email">Email:</label>
                <input onChange={handelEmail} type="email" name="email" id="" required />
                <br />
                <label htmlFor="password">Password</label>
                <input onChange={handelPassword} type="password" name="password" id="" required />
                <br />
                <div className="text-danger">{error}</div>
                <div>
                    <p><input onChange={toggleLogin} type="checkbox" name="" id="" />Are u Already Register</p>
                </div>

                <button>{isLogin ? 'Login' : 'Register'}</button>

            </form>
        </div>
    );
};

export default Register;