import React, { useState, useEffect } from 'react';
import Input from "comps/input";
import Button from "comps/button";
import { Link } from "react-router-dom";


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    return <div className="login_page">
        <div className="welcome_back">
            Welcome Back!
        </div>
        <div className="login_info">
            <Input placeholder="Username" minWidth="210px" borderRadius="6px" border="none" 
                onChange={(e)=>{
                    setUsername(e.target.value);
                }}
            />
            <Input placeholder="Password" minWidth="210px" borderRadius="6px" border="none"
                onChange={(e)=>{
                    setPassword(e.target.value);
                }}
            />
            <Button text="LOGIN" padding="15px 30px" borderRadius="8px" border="none" margin="20px"/>
        </div>
        <div className="login_go_to_signup">
        <Link to="/signup"><button className="login_signup_btn">Don't have an account? Sign up.</button></Link>
        </div>

    </div>
}

export default Login;