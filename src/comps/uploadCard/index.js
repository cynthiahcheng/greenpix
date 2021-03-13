import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: 375px;
height: 573px;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

`;

const Greendiv = styled.h2`
background: rgba(209, 240, 211, 0.4);
width:375px;
height:375px;
color: #5F645F;
justify-content:center;
align-items:center;
display:flex;
font-weight:normal;

`;

const Topdiv = styled.div`
width:200px;
justify-content:space-between;
align-items:center;
display:flex;
padding-left:145px;
margin-bottom:30px;
`;

const Title = styled.div`
font-weight: bold;
justify-content:center;
display:flex;
`;

const Post = styled.div`
width: 82px;
height: 24px;
border: 1px solid #6C6C6C;
box-sizing: border-box;
border-radius: 5px;
display:flex;
justify-content:center;
align-items:center;

`;

const Uploadbutton = styled.div`
width:280px;
height:48px;
border: 1px solid #9FD28D;
box-sizing: border-box;
border-radius: 10px;
display:flex;
justify-content:center;
align-items:center;
margin-top:30px;
`;

const Line = styled.div`
width: 375px;
height: 0px;
border: 1px solid rgba(0, 0, 0, 0.15);
box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
margin-top:30px;
margin-bottom:30px;
`;

const Caption = styled.div`
color: rgba(0, 0, 0, 0.5);
display:flex;
justify-content:left;

`;

const UploadCard = ({}) => {
    return <Container>
        <Topdiv> 
            <Title> New Post </Title>
            <Post> Post </Post>
            
        </Topdiv>
        <Greendiv>
            No Photo to Post

        </Greendiv>

        <Uploadbutton> Upload Photo </Uploadbutton>

        <Line> </Line>
        <Caption> Write a Caption... </Caption>

    </Container>
}

UploadCard.defaultProps = {

};

export default UploadCard;