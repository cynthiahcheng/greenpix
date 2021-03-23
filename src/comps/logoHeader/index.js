import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import textLogo from 'images/textLogo.png'

const Container = styled.div`
display:flex;
justify-content: flex-start;
position: fixed;
top: 20px;
left: 10px;
`;

const LogoBox = styled.img`

`;


const LogoHeader = ({}) => {
    return <Container>
      <LogoBox 
      src={textLogo}
      />
    </Container>
}

LogoHeader.defaultProps = {
};

export default LogoHeader;