import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
justify-content:${props => props.justify ? props.justify : "center"};
`;

const InputBox = styled.input`
padding:15px;
margin:${props => props.margin ? props.margin : "9px"};
min-width:${props => props.minWidth ? props.minWidth : "280px"};
font-size:${props => props.fontSize ? props.fontSize : "16px"};
border-radius:${props => props.borderRadius ? props.borderRadius : "10px"};
    &:focus {
        outline:0;
    }
border:${props => props.border ? props.border : "1.75px solid #99C789"};
`;

// Use the following area text css on the Upload page for the caption. Adjust as needed.

/* const TextArea = styled.textarea`
border:none;
border-top:1px solid #999;
box-shadow: 0px -1.5px #9999;
padding:15px;
&:focus{
    outline:none;
}
max-width:414px;
`; */

const Input = ({type, placeholder, minWidth, fontSize, borderRadius, border, margin, justify, onChange}) => {
    return <Container>
        <InputBox type={type} 
            placeholder={placeholder} 
            minWidth={minWidth}
            fontSize={fontSize}
            borderRadius={borderRadius}
            border={border}
            margin={margin}
            justify={justify}
            onChange={onChange}
        >

        </InputBox>
    </Container>
}

Input.defaultProps = {
type:"text",
placeholder:"Placeholder",
onChange:()=>{}
};

export default Input;