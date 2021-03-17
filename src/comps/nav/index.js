import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Home from 'comps/nav/home.png';
import Search from 'comps/nav/search.png';
import Add from 'comps/nav/add.png';
import woman from '../bioCard/woman.jpg';

const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-evenly;
  background-color: #BDEAC0;
  padding: 10px;
`;


const Img = styled.img`
padding: 10px;
`;

const Img2 = styled.img`
padding: 10px;
border-radius: 50%;
`;

const Nav = ({}) => {
    return  <Container> 
 <Img src={Home}alt="home" width="33.5px" height="33.5px"/>
 <Img src={Search}alt="search" width="33.5px" height="33.5px"/>
 <Img src={Add}alt="add" width="33.5px" height="33.5px"/>
 <Img2 src={woman}alt="pic" width="33.5px" height="33.5px"/>
    </Container>
}

Nav.defaultProps = {

};

export default Nav;