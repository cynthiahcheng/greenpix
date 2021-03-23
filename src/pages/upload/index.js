import React, { useState, useEffect } from 'react';
import UploadCard from 'comps/uploadCard';
import Nav from "comps/nav";


const Upload = () => {

    return <div className="upload_page">
        <UploadCard />
        <Nav />

    </div>
}

export default Upload;