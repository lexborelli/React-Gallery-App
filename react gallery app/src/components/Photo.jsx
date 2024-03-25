import React from "react";


const Photo = ({ photo }) => {
    return (
            <ul>
                <li>
                    <img src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt={`${photo.title}`} />
                </li>
        
            </ul>
    );
};

export default Photo;