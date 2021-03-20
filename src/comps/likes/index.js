import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import heartOn from 'images/heartOn.svg';
import heartOff from 'images/heartOff.svg';

const Container = styled.div`
display: flex;
justify-content: ${props => props.justify ? props.justify: 'center'};
align-items: center;
`;

const LikeButton = styled.img`
  max-width: 30px; //based on figma
  max-height: 26px; //based on figma
  cursor: pointer;
  margin: ${props => props.margin ? props.margin: '0 10px 0 15px'};
`;

// https://greenpix.herokuapp.com/api/likes

const Likes = ({ justify, margin }) => {
    const [likePost, setLikePost] = useState(false);
    return <Container justify={justify}>
      <LikeButton
      margin={margin} 
      onClick = {() => {
        if (likePost === false) {
          setLikePost(true);
        } else {
          setLikePost(false);
        }
      }}
      src={likePost === true ? heartOn : heartOff}></LikeButton>
    </Container>
}

Likes.defaultProps = {
onClick:() => {}
};

export default Likes;