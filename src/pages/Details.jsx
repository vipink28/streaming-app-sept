import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';
import { fetchVideoDetails, selectVideoDetails } from '../features/common/commonSlice';
import { IMG_URL } from '../helper/apirequests';

function Details(props) {
    const { data, status, error } = useSelector(selectVideoDetails);
    const params = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        if (params) {
            dispatch(fetchVideoDetails({ platform: params.platform, id: params.id }))
        }
    }, [params]);

    return (
        data ?
            <div className='py-5 mt-4'>
                <div className='container'>
                    <div className='mb-5'>
                        <VideoPlayer videos={data.videos.results} />
                    </div>

                    <div className='row'>
                        <div className='col-lg-3'>
                            <div className='mb-3'>
                                <img className='img-fluid' src={`${IMG_URL}${data.poster_path}`} alt={data.title || data.name} />
                            </div>
                        </div>
                        <div className='col-lg-9'>

                        </div>
                    </div>


                </div>
            </div> : <p>Couldn't load the page</p>
    );
}

export default Details;