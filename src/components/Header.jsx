import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeaderDetails, selectHeaderDetails } from '../features/common/commonSlice';
import { truncateText } from '../helper';
import { IMG_URL } from '../helper/apirequests';
import Ratings from './Ratings';

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
            {
                status === "success" ?
                    <>
                        <img className='img-fluid w-100 h-100 object-fit-cover' src={`${IMG_URL}${data.backdrop_path}`} alt='' />
                        <div className='caption position-absolute text-white top-50 translate-middle-y'>
                            <h1 className='title display-3 fw-bold'>{truncateText(data.name || data.original_name || data.title || data.original_title, 50)}</h1>
                            <h3 className='tagline fs-2 text-warning'>{data.tagline}</h3>
                            <p className='fs-5'>{truncateText(data.overview, 150)}</p>
                            <Ratings voteAverage={data.vote_average} voteCount={data.vote_count} />
                        </div>

                        <div className='header-vignette'></div>
                        <div className='header-bottom-vignette'></div>
                    </>
                    : status === "loading" ?
                        <p>...Loading</p>
                        : <p>Something went wrong</p>
            }
        </div>
    );
}

export default Header;