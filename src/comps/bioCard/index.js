import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import woman from '../bioCard/woman.jpg';
import Button from 'comps/button';

const Container = styled.div`
display: flex;
flex-direction: column;
`;

const BioCardBox = styled.div`
width: 375px;
/* border: 1px solid #000; */
`;

const ProfilePic = styled.img`
border-radius: 50%;
margin-left: 20px; 
`;

const NameHeader = styled.h1`
margin-bottom: 40px;
font-size: 24px;
display: flex;
justify-content: flex-start;
`;

const ProfileInfo = styled.div`

`;

const ProfileBio = styled.div`
text-align: left;
width: 222px;
padding: 10px;
margin-top: 20px;
margin-bottom: 20px;
`;

const Numbers = styled.div`
margin-left: 25px;
`;

const Text = styled.div`
padding: 10px;
margin-left: 25px;
`;

const PicAndInfo = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const ButtonBox = styled.div`
display: flex;
justify-content: flex-start;
`;

const BioCard = ({}) => {
    return <Container>
        <BioCardBox>
        <NameHeader> Jane_Goodall </NameHeader>
        <PicAndInfo>
            <ProfilePic src={woman} alt="jane" width="80px" height="80px"/> 
            <ProfileInfo> 
                <Numbers>
                    <b>23</b>
                </Numbers>
                <Text>
                    Posts
                </Text>
            </ProfileInfo>
            <ProfileInfo> 
                <Numbers>
                    <b>672</b>
                </Numbers>
                <Text>
                    Followers
                </Text>
            </ProfileInfo>
            <ProfileInfo> 
                <Numbers>
                    <b>544</b>
                </Numbers>
                <Text>
                    Following
                </Text>
            </ProfileInfo>
        </PicAndInfo>
        <ProfileBio> Hello ethical people! 
                    <br></br>My name is Jane and I am a smoothie enthusiast who loves to shop local.
        </ProfileBio>
        <ButtonBox>
            <Button 
            text="edit"
            padding="4px 24px"
            fontSize="14px"
            borderRadius="5px"
            border="1.75px solid #77E1D1"
        />
        </ButtonBox>
        </BioCardBox>
    </Container>
}

BioCard.defaultProps = {

};

export default BioCard;