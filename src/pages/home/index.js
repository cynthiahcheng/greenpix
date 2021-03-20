import React, { useState, useEffect } from 'react';
import Button from "comps/button";
import PhotoCard from "comps/photoCard";
import Nav from "comps/nav";
import LogoHeader from "comps/logoHeader";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';

const Home = () => {

    return <div className="home_page">
        <LogoHeader />
        <PhotoCard 
        username="hannah_williams"
        />
        <Nav />
    </div>
}

export default Home;