import React, { useState, useEffect } from 'react';
import Button from "comps/button";
import { Link } from "react-router-dom";


const Home = () => {

    return <div className="home_page">
        <div className="home_page_logo">
            <img src="images/login_logo.png" />
        </div>
        <div className="home_page_btns">
            <Link to = "/signup"><Button text="Sign Up" padding="15px 40px" margin="10px 0" borderRadius="8px"/></Link>
            <Link to = "/login"><Button text="Login" padding="15px 49px" margin="10px 0" border="1.75px solid #6CCBD8" borderRadius="8px"/></Link>
        </div>
    </div>
}

export default Home;