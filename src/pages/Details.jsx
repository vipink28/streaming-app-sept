import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import Seasons from '../components/Seasons';
import VideoPlayer from '../components/VideoPlayer';
import { fetchVideoDetails, selectVideoDetails } from '../features/common/commonSlice';
import { IMG_URL, platformTypes } from '../helper/apirequests';
import useLocalStorage from '../hooks/useLocalStorage';
import { useTitle } from '../hooks/useTitle';

function Details(props) {
    const { data, status, error } = useSelector(selectVideoDetails);
    const params = useParams();
    useTitle(`Streaming App | ${data?.name || data?.original_name || data?.title || data?.original_title}`);
    const dispatch = useDispatch();
    const [writers, setWriters] = useState(null);

    const [local, setLocal] = useLocalStorage("streaming", "hello");
    useEffect(() => {
        setLocal("Streaming App");
    }, [])

    const getWriters = (crew) => {
        const writers = crew.filter((item) => (
            item.known_for_department === "Writing"
        ));
        setWriters(writers);
    }

    useEffect(() => {
        if (params) {
            dispatch(fetchVideoDetails({ platform: params.platform, id: params.id }))
        }
    }, [params]);


    useEffect(() => {
        if (data) {
            getWriters(data.credits.crew);
        }
    }, [data])





    return (
        data ?
            <div className='py-5 mt-4'>
                <div className='container'>
                    <div className='mb-5'>
                        <h3>{local}</h3>
                        <VideoPlayer videos={data.videos.results} />
                    </div>

                    <div className='row'>
                        <div className='col-lg-3'>
                            <div className='mb-3'>
                                <img className='img-fluid' src={`${IMG_URL}${data.poster_path}`} alt={data.title || data.name} />
                            </div>
                        </div>
                        <div className='col-lg-9'>
                            {/* Recommended  */}
                            <>
                                <h4>Recommended {params.platform === "movie" ? "Movies" : "Tv Shows"}</h4>
                                <div className='row gy-4'>
                                    {
                                        data.recommendations.results.map((video, index) => (
                                            index < 6 ?
                                                <div key={video.id} className='col-lg-4'>
                                                    <Card video={video} platform={params.platform} />
                                                </div> : ""
                                        ))
                                    }
                                </div>
                            </>
                            {/* writers */}
                            <div className='py-4'>
                                <h3>Writers</h3>
                                <div className='d-flex'>
                                    Writers: {
                                        writers?.map((writer) => (
                                            <>
                                                <span className='ms-2' key={writer.id}>{writer.name}</span>,
                                            </>
                                        ))
                                    }
                                </div>
                            </div>

                            {/* seasons list */}
                            {
                                params.platform === platformTypes.tv &&
                                <Seasons seasonsList={data.seasons} seriesId={data.id} />
                            }

                        </div>
                    </div>


                </div>
            </div> : <p>Couldn't load the page</p>
    );
}

export default Details;