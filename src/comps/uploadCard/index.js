import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from 'comps/button';
import axios from 'axios';

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin:20px 0 0 0;
`;

const UploadCardBox = styled.form`
width: 375px;
/* height: 573px; */
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

`;

const Greendiv = styled.div`
background-color: rgba(209, 240, 211, 0.4);
font-size:24px;
width:375px;
min-height:375px;
color: #5F645F;
justify-content:center;
align-items:center;
display:flex;
font-weight:normal;
background-size: cover;
background-image:${props=>props.imgurl ? "url("+ props.imgurl +");" : "url('/images/no_photo.png')"};
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

// const Caption = styled.div`
// color: rgba(0, 0, 0, 0.5);
// display:flex;
// justify-content:left;

// `;
const Caption = styled.textarea`
display:flex;
font-family:sans-serif;
font-size:14px;
justify-content:left;
margin-top:20px;
min-width:365px;
min-height:100px;
padding:10px;
border-top: 1px solid #999999;
/* box-shadow: 0px -1px 3px #999999; */
border-right:none;
border-left:none;
border-bottom:none;
&:focus {
    outline:2px solid #99C789;
}
`;


const UploadCard = ({imgurl}) => {
    const [file, setFile] = useState();
    const [image, setImage] = useState();
    const [caption, setCaption] = useState("");

    const submit = async event => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('image', file);
        formData.append('caption', caption);

        const result = await axios.post("https://greenpix.herokuapp.com/api/photo/post", formData)
            console.log(result)
    }
    // reference to the hidden file input component
    const hiddenFileInput = React.useRef(null);
    // click the hidden file input component when Button is clicked
    const handleClick = () => {
        hiddenFileInput.current.click();
    };
    // function call
    // const handleChange = e => {
    //     const fileUploaded = e.target.files[0];
    //     props.handleFile(fileUploaded);
    // };
    return <Container>
        <UploadCardBox onSubmit={submit}>
        <Topdiv> 
            <Title> New Post </Title>
            {/* <Post> Post </Post> */}
            <Button text="Post" type="submit" padding="5px 15px" fontSize="15px" borderRadius="6px" border="1.75px solid #000" />
            
        </Topdiv>
        <Greendiv imgurl={image} />
        <>
            <Button text="Upload Photo" type="button" margin="20px" onClick={handleClick}/>
            <input type="file" filename={file} ref={hiddenFileInput} style={{display:'none'}} accept="image/*" 
                onChange={(e) => {
                    setFile(e.target.files[0]);
                    setImage(e.target.files[0])
                }}
            />
        </>
        {/* <input type="file" filename={file} accept="image/*" onChange={e => setFile(e.target.files[0])} /> */}

        <Caption placeholder="Write a Caption" onChange={e => setCaption(e.target.value)}/>
        </UploadCardBox>
    </Container>
}

UploadCard.defaultProps = {

};

export default UploadCard;