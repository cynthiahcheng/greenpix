import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`

`;

const InputBox = styled.input`
padding:15px;
min-width:${props => props.minWidth ? props.minWidth : "280px"};
font-size:${props => props.fontSize ? props.fontSize : "16px"};
border-radius:${props => props.borderRadius ? props.borderRadius : "10px"};
    &:focus {
        outline:0;
    }
border:${props => props.border ? props.border : "1.75px solid #99C789"};
`;

const Input = ({minWidth, fontSize, borderRadius, border}) => {
    return <Container>
        <InputBox type="text" placeholder="Email" 
            minWidth={minWidth}
            fontSize={fontSize}
            borderRadius={borderRadius}
            border={border}
        >

        </InputBox>
    </Container>
}

Input.defaultProps = {

};

export default Input;