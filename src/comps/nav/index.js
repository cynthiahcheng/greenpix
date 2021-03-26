import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Home from 'comps/nav/home.png';
import Search from 'comps/nav/search.png';
import Add from 'comps/nav/add.png';
import woman from '../bioCard/woman.jpg';
import { useHistory } from 'react-router-dom';

const Container = styled.footer`
display: flex;
position: fixed;
bottom: 0;
background-color: #BDEAC0;
`;

const NavBox = styled.div`
width: 375px;
height: 62px;
display: flex;
align-items: center;
justify-content: space-around;
`;


const Img = styled.img`
padding: 10px;
width: 26px;
height: 26px;
cursor: pointer;
`;

const Img2 = styled.img`
padding: 10px;
border-radius: 50%;
cursor: pointer;
`;

const ProfileIcon = styled.div`
background-image:${props=>props.profileImg ? "url("+ props.profileImg +");" : "url('/images/userImg.jpg')"};
border-radius: 50%;
background-size: cover;
width:33.5px;
height:33.5px;
`;

const Nav = ({ onClick, profileImg }) => {

  const history = useHistory();

//   const [image, setImage] = useState([]);

//   const GetImage = async () => {
//     const resp = await axios.get("https://greenpix.herokuapp.com/api/users");
//     console.log("get profile image", resp);
//     setImage([...resp.data.users]);
// }

// useEffect(()=>{
//     GetImage();
// },[])

  const handleClick = e => {
    
  }

    return  <Container>
      <NavBox>
 <Img src={Home}alt="home" width="33.5px" height="33.5px" onClick={()=>{history.push("/home")}}/>
 <Img src={Search}alt="search" width="33.5px" height="33.5px"/>
 <Img src={Add}alt="add" width="33.5px" height="33.5px" onClick={()=>{
   history.push("/upload")}}/>
 {/* <Img2 src={woman}alt="pic" width="33.5px" height="33.5px"/> */}
 
 <ProfileIcon profileImg={profileImg}
    onClick={()=>{
      history.push("/profile")
    }} 
  />
 </NavBox>
    </Container>
}

Nav.defaultProps = {
onClick:()=>{}
};

export default Nav;