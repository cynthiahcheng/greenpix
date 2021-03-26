import React, { useState, useEffect } from 'react';
import PhotoCard from "comps/photoCard";
import Nav from "comps/nav";
import LogoHeader from "comps/logoHeader";
import { useHistory } from "react-router-dom";
import axios from 'axios';

const Home = () => {

    const history = useHistory();

    const [posts, setPosts] = useState([]);
    const [selectedId, setSelectedId] = useState(null);


    const GetPosts = async () => {
        const resp = await axios.get("https://greenpix.herokuapp.com/api/allusersphotos",
        {
            id:selectedId
        }
        );
        console.log("get posts", resp);
        setPosts([...resp.data.posts].sort(sortByLatest));
    }

    useEffect(()=>{
        GetPosts();
    },[])

    return <div className="home_page">
        <LogoHeader />
        <div className="home_page_content">
        {posts.map((o,i)=>{
        return (<PhotoCard
            onClick={(id)=>{
                console.log(id);
                setSelectedId(id);
                history.push("/selected/"+o.id)
            }}
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

//show latest posts from top to bottom
function sortByLatest(a,b){
    if(a.created > b.created) {
        return -1;
    } else if(a.created > b.created) {
        return 1;
    } else {
        return 0;
    }
}