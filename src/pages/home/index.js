import React, { useState, useEffect } from 'react';
import Button from "comps/button";
import PhotoCard from "comps/photoCard";
import Nav from "comps/nav";
import LogoHeader from "comps/logoHeader";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';

const Home = () => {

    const [posts, setPosts] = useState([]);

    const GetPosts = async () => {
        const resp = await axios.get("https://greenpix.herokuapp.com/api/allusersphotos");
        console.log("get posts", resp);
        setPosts([...resp.data.posts]);
    }

    useEffect(()=>{
        GetPosts();
    },[])

    return <div className="home_page">
        <LogoHeader />
        <div className="home_page_content">
        {posts.map((o,i)=>{
        return (<PhotoCard
            key={i}
            userImg={o.profile_photo_url}
            username={o.username}
            imageUrl={o.photo_url}
            caption={o.caption}
            />)
        })}
        </div>
        <Nav />
    </div>
}

export default Home;