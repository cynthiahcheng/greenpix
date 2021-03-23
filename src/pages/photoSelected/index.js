import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoCard from "comps/photoCard";
import LogoHeader from "comps/logoHeader";
import Nav from "comps/nav";
import { useParams, useHistory } from 'react-router-dom';


const PhotoSelected = () => {

    const params = useParams();
    console.log(params);
    const history = useHistory();

    const [post, setPost] = useState([]);

    const GetPhoto = async () => {
        const resp = await axios.get("https://greenpix.herokuapp.com/api/photo/"+params.id);
            console.log("get post", resp);
            setPost([...resp.data.post]);
    }

    useEffect(()=>{
        GetPhoto();
    },[])

    return <div className="photo_selected_page">
        <LogoHeader />
        <div className="photo_selected_content">
        {post.map((o,i)=>{
        return (<PhotoCard
            // onClick={()=>history.push("/selected/"+o.id)}
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

export default PhotoSelected;