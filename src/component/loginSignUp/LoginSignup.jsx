import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import './LoginSignup.css';

import user_icon from '../assets/Assets/person.png';
import email_icon from '../assets/Assets/email.png';
import password_icon from '../assets/Assets/password.png';

const LoginSignup = () => {
    const navigate = useNavigate(); // Access the navigate function

    const [action , setAction] = useState("Sign up");

    // A fuction for login 
    const handleLogin = () => {
     
        const loginSuccessful = true; // Replace this with your actual logic

        if (loginSuccessful) {
            navigate("/home");// if can login, then it will navigate to the home screen
        }

    };

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt=""/>
                    <input type="text" placeholder="Firstname"/>
                </div>
            </div>
                <div className="input">
                    <img src={user_icon} alt=""/>
                    <input type="text" placeholder="Lastname"/>
            </div>
            <div className="input">
                <img src={email_icon} alt=""/>
                <input type="email" placeholder="Email Address"/>
            </div>
            <div className="input">
                <img src={password_icon} alt=""/>
                <input type="password" placeholder="Password"/>               
            </div>

            <div className="forgot-password">Forgot password? <span>Click Here!</span></div>
            <div className="gohomepg">Home? <span>Return Here</span></div>
        
            <div className="submit-container">
                <div className={action === "Login" ?"submit gray" : "submit"} onClick={() => {setAction("Sign Up")}}> Sign Up</div>
                <div className={action === "Sign Up"?"submit gray":"submit"} onClick={handleLogin}>Login</div>
            </div>

        </div>
    );
};

export default LoginSignup;