import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BioCard from "comps/bioCard";
import pic0 from "images/pic0.jpg";
import pic1 from "images/pic1.jpg";
import pic2 from "images/pic2.jpg";
import pic3 from "images/pic3.jpg";
import pic4 from "images/pic4.jpg";
import pic5 from "images/pic5.jpg";
import pic6 from "images/pic6.jpg";
import pic7 from "images/pic7.jpg";
import pic8 from "images/pic8.jpg";
import pic9 from "images/pic9.jpg";
import pic10 from "images/pic10.jpg";
import pic11 from "images/pic11.jpg";
import pic12 from "images/pic12.jpg";
import pic13 from "images/pic13.jpg";
import pic14 from "images/pic14.jpg";
import pic15 from "images/pic15.jpg";
import pic16 from "images/pic16.jpg";
import pic17 from "images/pic17.jpg";
import pic18 from "images/pic18.jpg";
import pic19 from "images/pic19.jpg";
import pic20 from "images/pic20.jpg";
import pic21 from "images/pic21.jpg";
import Nav from "comps/nav";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Container = styled.div`
    justify-content: center;
    align-items: center;
`;

const Images = styled.div`
    display: grid;
    max-width: 375px;
    min-width: 375px;
    grid-template-columns: repeat(3, 14vh);
    grid-template-rows: repeat(2, 14vh);
    grid-column-gap: 3px;
    grid-row-gap: 3px;
    margin-top: 50px;
    padding-bottom: 65px;
    justify-content: center;
    align-items: center;
`;

const Img = styled.img`
    display: grid;
    border-radius: 2%;
    width: 113px;
    height: 113px;
    object-fit: cover;
`;

const Profile = () => {

    const history = useHistory();

    return <div className="profile_page">
        <Container>
        <BioCard></BioCard>
        <Images>
            <Img src ={pic0}></Img>
            <Img src ={pic1}></Img>
            <Img src ={pic2}></Img>
            <Img src ={pic3}></Img>
            <Img src ={pic4}></Img>
            <Img src ={pic5}></Img>
            <Img src ={pic6}></Img>
            <Img src ={pic7}></Img>
            <Img src ={pic8}></Img>
            <Img src ={pic9}></Img>
            <Img src ={pic10}></Img>
            <Img src ={pic11}></Img>
            <Img src ={pic12}></Img>
            <Img src ={pic13}></Img>
            <Img src ={pic14}></Img>
            <Img src ={pic15}></Img>
            <Img src ={pic16}></Img>
            <Img src ={pic17}></Img>
            <Img src ={pic18}></Img>
            <Img src ={pic19}></Img>
            <Img src ={pic20}></Img>
            {/* <Img src ={pic21}></Img> */}
        </Images>
        <Nav></Nav>
        </Container>
    </div>
}

export default Profile;