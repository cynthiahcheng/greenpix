import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoCard from "comps/photoCard";


const PhotoSelected = () => {

    return <div className="photo_selected_page">
        <PhotoCard />
    </div>
}

export default PhotoSelected;