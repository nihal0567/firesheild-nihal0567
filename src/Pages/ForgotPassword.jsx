
import React, { useContext, useRef } from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, useLocation } from 'react-router';

import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
    const location = useLocation();
    const {email, setEmail } = useContext(AuthContext)
    console.log(location);
    const emailRef = useRef();
    
    const passwordReset = (e) => {
        e.preventDefault()
        toast("Password has been Reset")
        window.open("https://mail.google.com", "_blank");
    }
    return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Helmet>
                <title>Reset Password | Kidstuff</title>
                <meta name="description" content="Reset Password to get back your account" />
            </Helmet>
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Forgot Password</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                onChange={(e)=>setEmail(e.target.email.value)}
                                value={email}
                                name="email"
                                ref={emailRef}
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2
            focus:ring-blue-500"
                                required
                            />
                        </div>
                        <button 
                            onClick={passwordReset}
                            type='submit'
                            className=' btn btn-secondary '
                        >
                            Reset Password
                        </button>
                    </form>
                </div>
            </div>
    );
};

export default ForgotPassword;