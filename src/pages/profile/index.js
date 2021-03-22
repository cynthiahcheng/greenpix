import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BioCard from "comps/bioCard";
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

const Images = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 20vh);
    grid-template-rows: repeat(7, 10vw);
    margin-top: 50px;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`;

const Container = styled.div`
    justify-content: center;
    align-items: center;
`;

const Img = styled.img`
    padding: 5px;
    border-radius: 5%;
    justify-content: center;
    align-items: center;
`;

const Profile = () => {

    return <div className="profile_page">
        <Container>
        <BioCard></BioCard>
        <Images>
            <Img src ={pic1} width="120px" height="120px"></Img>
            <Img src ={pic2} width="120px" height="120px"></Img>
            <Img src ={pic3} width="120px" height="120px"></Img>
            <Img src ={pic4} width="120px" height="120px"></Img>
            <Img src ={pic5} width="120px" height="120px"></Img>
            <Img src ={pic6} width="120px" height="120px"></Img>
            <Img src ={pic7} width="120px" height="120px"></Img>
            <Img src ={pic8} width="120px" height="120px"></Img>
            <Img src ={pic9} width="120px" height="120px"></Img>
            <Img src ={pic10} width="120px" height="120px"></Img>
            <Img src ={pic11} width="120px" height="120px"></Img>
            <Img src ={pic12} width="120px" height="120px"></Img>
            <Img src ={pic13} width="120px" height="120px"></Img>
            <Img src ={pic14} width="120px" height="120px"></Img>
            <Img src ={pic15} width="120px" height="120px"></Img>
            <Img src ={pic16} width="120px" height="120px"></Img>
            <Img src ={pic17} width="120px" height="120px"></Img>
            <Img src ={pic18} width="120px" height="120px"></Img>
            <Img src ={pic19} width="120px" height="120px"></Img>
            <Img src ={pic20} width="120px" height="120px"></Img>
            <Img src ={pic21} width="120px" height="120px"></Img>
        </Images>
        <Nav></Nav>
        </Container>
    </div>
}

export default Profile;