import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
display:flex;
justify-content:${props => props.justify ? props.justify : "center"};
`;

const ButtonBox = styled.button`
padding:${props => props.padding ? props.padding : "15px 100px"};
align-items:center;
cursor:${props => props.cursor ? props.cursor : "pointer"};
border-radius:${props => props.borderRadius ? props.borderRadius : "12px"};
font-weight:${props => props.fontWeight ? props.fontWeight : "400"};
font-size:${props => props.fontSize ? props.fontSize : "16px"};
background-color:${props => props.bgColor ? props.bgColor : "#FFF"};
border:${props => props.border ? props.border : "1.75px solid #99C789"};
margin:${props => props.margin ? props.margin : "8px"};
&:focus {outline:none;}
`;

const Button = ({ text, type, fontWeight, fontSize, bgColor, hoverColor, padding, border, borderRadius, margin, justify, cursor, onClick }) => {
    return <Container justify={justify}>
        <motion.div whileTap={{ scale: 0.95 }}>
            <ButtonBox 
                type={type}
                fontWeight={fontWeight}
                fontSize={fontSize}
                bgColor={bgColor}
                hoverColor={hoverColor}
                padding={padding}
                border={border}
                borderRadius={borderRadius}
                margin={margin}
                cursor={cursor}
                onClick={onClick}
            >{text}</ButtonBox>
        </motion.div>  
    </Container>
}

Button.defaultProps = {
text:"I am a button",
onClick:()=>{}
};

export default Button;