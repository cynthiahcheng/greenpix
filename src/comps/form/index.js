import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from 'comps/input';
import Button from 'comps/button';


const Container = styled.div`
display:flex;
flex-direction:column;
padding:25px;
`;

const Form = ({onFormSubmit}) => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    return <Container>
        <Input placeholder="Email" onChange={(e)=>{
            setEmail(e.target.value);
        }}/>
        <Input placeholder="Full Name" onChange={(e)=>{
            setName(e.target.value);
        }}/>
        <Input placeholder="Username" onChange={(e)=>{
            setUser(e.target.value);
        }}/>
        <Input type="password" placeholder="Password" onChange={(e)=>{
            setPass(e.target.value);
        }}/>
        <Button text="SIGN UP" fontWeight="700" padding="15px 20px" borderRadius="9px" margin="35px 0 0 0"
            onClick={()=>{
                onFormSubmit(email, name, user, pass);
            }}
        />
    </Container>
}

Form.defaultProps = {
onFormSubmit:()=>{}
};

export default Form;