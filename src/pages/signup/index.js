import React, { useState } from 'react';
import Input from "comps/input";
import Button from "comps/button";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const SignUp = () => {

    const history = useHistory();

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const HandleSignUp = async()=> {
        const resp = await axios.post("https://greenpix.herokuapp.com/api/users", {
            email:email,
            full_name:name,
            username:username,
            password:password
        });
        console.log(resp);
        history.push("/login");
    }

    return <div className="signup_page">
        <div className="signup_msg">
            <p>Sign up to browse photos<br/>
            from conscious consumers</p>
        </div>
        <div className="signup_info">
            <Input placeholder="Email" minWidth="210px" borderRadius="6px" 
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
            />
            <Input placeholder="Full Name" minWidth="210px" borderRadius="6px" 
                onChange={(e)=>{
                    setName(e.target.value)
                }}
            />
            <Input placeholder="Username" minWidth="210px" borderRadius="6px" 
                onChange={(e)=>{
                    setUsername(e.target.value)
                }}
            />
            <Input placeholder="Password" type="password" minWidth="210px" borderRadius="6px" 
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
            />
            <Button text="SIGN UP" padding="15px 30px" borderRadius="8px" margin="20px"
                onClick={HandleSignUp}
            />
        </div>
    </div>
}

export default SignUp;