import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Likes from 'comps/likes';
import chatIcon from 'images/chat.svg';
import userImg from 'images/userImg.jpg';
import postImg from 'images/postImg.svg';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom:25px;
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

const UserImg = styled.div`
    border-radius: 50%;
    background-size: cover;
    width:48px;
    height:48px;
    background-image:${props=>props.userImg ? "url("+ props.userImg +");" : "url('images/default_profile.jpg')"};
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

const Img = styled.div`
background-color: rgba(209, 240, 211, 0.4);
font-size:24px;
width:375px;
min-height:375px;
background-size:cover;
background-image:${props=>props.imageUrl ? "url("+ props.imageUrl +");" : "url('/images/postimg.svg')"};

`;

const User = styled.div`
    cursor: pointer;
    font-size: 14px;
    /* font-weight: 700; */
    margin: 13px 15px 8px 15px;
    text-align:left;

`;
const PhotoContent = styled.div``;

const PhotoCard = ({justify, username, userImg, imageUrl, caption, viewmore, fontSize, color, onClick, id}) => {
    return <Container
            justify={justify}
            // onClick={()=>{onClick(id)}}
            >
        <PhotoCardBox>
        <PhotoContent onClick={()=>{onClick(id)}}>
        <NameBox>
            <Link to="/profile"><UserImg userImg={userImg}/></Link>
            {/* <UserImg userImg={userImg} alt="userImg" width="48px" height="48px"/> */}
            <User>{username}</User>
        </NameBox>
        <ImageBox>
            <Img imageUrl={imageUrl} />
            {/* <Img src={postImg} /> */}
        </ImageBox>
        </PhotoContent>
        <ActionBox>
            <Likes />
            <ChatButton src={chatIcon} />
        </ActionBox>
        <CommentBox>
            <User><b>{username}</b> {caption}</User>
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
onClick:()=>{}
};

export default PhotoCard;