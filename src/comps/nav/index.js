import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Home from 'comps/nav/home.png';
import Search from 'comps/nav/search.png';
import Add from 'comps/nav/add.png';
import woman from '../bioCard/woman.jpg';

const Container = styled.footer`
  display: flex;
  align-items: center;
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


const Nav = ({ onClick }) => {

  const handleClick = e => {
    
  }

    return  <Container>
      <NavBox>
 <Img src={Home}alt="home" width="33.5px" height="33.5px" onClick={handleClick}/>
 <Img src={Search}alt="search" width="33.5px" height="33.5px"/>
 <Img src={Add}alt="add" width="33.5px" height="33.5px"/>
 <Img2 src={woman}alt="pic" width="33.5px" height="33.5px"/>
 </NavBox>
    </Container>
}

Nav.defaultProps = {

};

export default Nav;