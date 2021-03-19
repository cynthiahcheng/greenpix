import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Likes from 'comps/likes';
import chatIcon from 'images/chat.svg';
import userImg from 'images/userImg.jpg';
import postImg from 'images/postImg.svg';

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const PhotoCardBox = styled.div`
    min-width: 375px;
    max-width: 375px;
    display: flex;
    flex-direction: column;
    /* justify-content: ${props => props.justify ? props.justify: 'flex-start'}; */
    /* border: 1px solid black; */
`;

const NameBox = styled.div`
    cursor: pointer;
    display: flex;
    align-items: 'center';
    flex-direction: row;
    margin: 10px 20px 10px 15px;
`;

const UserImg = styled.img`
    border-radius: 50%;
`;

const ImageBox = styled.div`
    margin: 0 0 5px 0;
`;

const ActionBox = styled.div`
    display: flex;
    flex-direction: center;
    margin: 0 0 -5px 0;
`;

const CommentBox = styled.div`
    display: flex;
`;

const ChatButton = styled.img`
    cursor: pointer;
    max-width: 26px;
    margin: 10px 15px 10px 10px;
`;

const CommentText = styled.div`
    cursor: pointer;
    font-size:${props => props.fontSize ? props.fontSize : "14px"};
    color: ${props => props.color ? props.color : "#747474"};
    display: flex;
    margin-left: 18px;
    
`;

const Img = styled.img`

`;

const User = styled.h5`
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    margin: 13px 0 8px 15px;
`;

const PhotoCard = ({justify, username, viewmore, fontSize, color}) => {
    return <Container
            justify={justify}
            >
        <PhotoCardBox>
        <NameBox>
            <UserImg src={userImg} alt="jane" width="48px" height="48px"/>
            <User>{username}</User>
        </NameBox>
        <ImageBox>
            <Img src={postImg} />
        </ImageBox>
        <ActionBox>
            <Likes />
            <ChatButton src={chatIcon} />
        </ActionBox>
        <CommentBox>
        <User>{username}</User>
        </CommentBox>
        <CommentText
            fontSize={fontSize}
            color={color}
        >
            <p>{viewmore}</p>
        </CommentText>
        </PhotoCardBox>
    </Container>
}

PhotoCard.defaultProps = {
username: "Jane_Goodall",
viewmore: "View all 12 comments",
};

export default PhotoCard;