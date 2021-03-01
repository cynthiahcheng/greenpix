import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`

`;

const ButtonBox = styled.button`
`;

const Button = ({}) => {
    return <Container>
        <ButtonBox>I am the button comp</ButtonBox>
    </Container>
}

Button.defaultProps = {

};

export default Button;