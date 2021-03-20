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
margin-left: 10px; 
`;

const NameHeader = styled.h1`
margin-bottom: 30px;
font-size: 24px;
display: flex;
justify-content: flex-start;
`;

const ProfileInfo = styled.div`
`;

const BottomBox = styled.div`
display: flex;
margin: 10px 0 0 0;
`;

const ButtonBox = styled.div`
display: flex;
justify-content: flex-start;
margin: 15px 0 0 5px;
`;

const ProfileBio = styled.div`
display: flex;
text-align: left;
align-items: flex-start; //We can change this later based on designer's opinion
margin: -10px 0 0 25px;
/* margin-bottom: 20px; */
`;

const Numbers = styled.div`
text-align: center;
`;

const Text = styled.div`
text-align: center;
padding: 10px;
`;

const PicAndInfo = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 375px;
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
        <BottomBox>
            <ButtonBox>
                <Button 
                text="edit"
                padding="4px 24px"
                fontSize="14px"
                borderRadius="5px"
                border="1.75px solid #77E1D1"
            />
            </ButtonBox>
            <ProfileBio> Hello ethical people! 
                        <br></br>My name is Jane and I am a smoothie enthusiast who loves to shop local.    
            </ProfileBio>
        </BottomBox>
        </BioCardBox>
    </Container>
}

BioCard.defaultProps = {

};

export default BioCard;