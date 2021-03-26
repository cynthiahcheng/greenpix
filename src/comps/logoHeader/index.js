import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import textLogo from 'images/textLogo.png'

const Container = styled.div`
display:flex;
justify-content: flex-start;
align-items: center;
padding-top: 20px;
max-width: 375px;
min-width: 375px; 
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