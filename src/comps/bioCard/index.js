import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import woman from '../bioCard/woman.jpg';
import Button from 'comps/button';

const Container = styled.div`
display: flex;
flex-direction: column;
`;

const ProfilePic = styled.img`
border-radius: 50%;
margin-left: 20px; 
`;

const NameHeader = styled.h1`
margin-bottom: 40px;
`;

const ProfileInfo = styled.div`
`;

const ProfileBio = styled.div`
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

const BioCard = ({}) => {
    return <Container>
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
        <Button> edit </Button>
    </Container>
}

BioCard.defaultProps = {

};

export default BioCard;