import React, { useState, useEffect } from 'react';
import Input from "comps/input";
import Button from "comps/button";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';


const Login = () => {

    const history = useHistory(); 

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const HandleLogin = async()=>{
        var resp = await axios.post("https://greenpix.herokuapp.com/api/users/login", {username:username, password:password});
        console.log(resp);
        if (resp.data !== "incorrect username" && resp.data !== "incorrect password"){
            const token = resp.data.token;
            sessionStorage.setItem("token", token);
            axios.defaults.headers.common['Authorization'] = token;
            history.push("/upload");
        } else {
            setError("Incorrect username/password");
        }
    }

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
            <Input placeholder="Password" type="password" minWidth="210px" borderRadius="6px" border="none"
                onChange={(e)=>{
                    setPassword(e.target.value);
                }}
            />
            <Button text="LOGIN" padding="15px 30px" borderRadius="8px" border="none" margin="20px"
                onClick={HandleLogin}
            />
        </div>
        <div>
            {error}
        </div>
        <div className="login_go_to_signup">
        <Link to="/signup"><button className="login_signup_btn">Don't have an account? Sign up.</button></Link>
        </div>

    </div>
}

export default Login;