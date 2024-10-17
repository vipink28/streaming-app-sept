import React from 'react';
import { IMG_URL } from '../helper/apirequests';

function Header({ video }) {
    return (
        <div className='vh-100'>
            <img className='img-fluid w-100 h-100 object-fit-cover' src={`${IMG_URL}${video.backdrop_path}`} alt='' />
            <div className='caption position-absolute text-white top-50 translate-middle-y'>
                <h1>{video.name || video.original_name || video.title || video.original_title}</h1>
                <p className='fs-5'>{video.overview}</p>
            </div>

            <div className='header-vignette'></div>
            <div className='header-bottom-vignette'></div>
        </div>
    );
}

export default Header;