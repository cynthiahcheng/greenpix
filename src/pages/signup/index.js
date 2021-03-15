import React, { useState, useEffect } from 'react';
import Input from "comps/input";
import Button from "comps/button";


const SignUp = () => {

    return <div className="signup_page">
        <div className="signup_msg">
            <p>Sign up to browse photos<br/>
            from conscious consumers</p>
        </div>
        <div className="signup_info">
            <Input placeholder="Email" minWidth="210px" borderRadius="6px" />
            <Input placeholder="Full Name" minWidth="210px" borderRadius="6px" />
            <Input placeholder="Username" minWidth="210px" borderRadius="6px" />
            <Input placeholder="Password" minWidth="210px" borderRadius="6px" />
            <Button text="SIGN UP" padding="15px 30px" borderRadius="8px" margin="20px"/>
        </div>
    </div>
}

export default SignUp;