import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../page/Header';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, updateProfile } from '@firebase/auth';
import { Link } from 'react-router-dom';


const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const auth = getAuth();

    const handelName = e => {
        setName(e.target.value)
    }
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
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
            })
            .catch(error => {
                setError(error.massage)
            })

    }

    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                setError('');
                setUserName()
                verifyEmail();
            })
            .catch((error) => {
                setError(error.message);
            });
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {

            })
    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result)
            })
    }

    return (
        <div >
            <Header></Header>
            <div className='text-center m-5 p-5 bg-light '>
                <h3>Please {isLogin ? 'logIn' : "Register"}</h3>
                <form action="onSubmit={handelRegister}">
                    {!isLogin && <div className='pb-3'> 
                        <input className='border-top-0 pe-4 ps-4 pt-2 pb-2  bg-light rounded' onChange={handelName} type="text" name="name" id="" placeholder="Your Name"  required/>
                    </div>}
                    <div className='pb-3'>
                        <input className='border-top-0 pe-4 ps-4 pt-2 pb-2  bg-light rounded' onChange={handelEmail} type="email" name="email" id="" placeholder='Your email'  required/>
                    </div>
                    <div  className='pb-3'>
                        <input className='border-top-0 pe-4 ps-4 pt-2 pb-2  bg-light rounded'  onChange={handelPassword} type="password" name="password" id="" placeholder="Your Password" required/>
                        <br />
                        <span id="passwordHelpInline" class="form-text">
                           
                        </span>
                    </div>

                    <div className="text-danger">{error}
                    </div>
                    <p><input onChange={toggleLogin} type="checkbox" name="" id="" />Already Register</p>
                    <button className="bg-danger pe-4 ps-4 border-0 rounded" onClick={handelRegister}>{isLogin ? 'Login' : 'Register'}</button>
                    
                </form>
               
            </div>
        </div>
    );
};

export default Register;