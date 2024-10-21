import React from 'react';
import { IMG_URL } from '../helper/apirequests';

function Card({ video }) {
    return (
        <div className='card'>
            <img className='card-img-top' src={`${IMG_URL}${video.backdrop_path}`} alt='' />
            <div className='card-body'>
                <h5 className='card-title'>{video.name || video.original_name || video.title || video.original_title}</h5>
            </div>
        </div>
    );
}

export default Card;