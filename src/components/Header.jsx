import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeaderDetails, selectHeaderDetails } from '../features/common/commonSlice';
import { IMG_URL } from '../helper/apirequests';

function Header({ video }) {
    const dispatch = useDispatch();
    const { data, status, error } = useSelector(selectHeaderDetails);
    useEffect(() => {
        if (video) {
            dispatch(fetchHeaderDetails({ platform: "tv", id: video.id }))
        }
    }, [video])
    return (
        <div className='vh-100'>
            <img className='img-fluid w-100 h-100 object-fit-cover' src={`${IMG_URL}${data.backdrop_path}`} alt='' />
            <div className='caption position-absolute text-white top-50 translate-middle-y'>
                <h1>{video.name || video.original_name || video.title || video.original_title}</h1>
                <h3>{data.tagline}</h3>
                <p className='fs-5'>{video.overview}</p>
            </div>

            <div className='header-vignette'></div>
            <div className='header-bottom-vignette'></div>
        </div>
    );
}

export default Header;