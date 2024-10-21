import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { fetchNowPlayingMovies, selectNowPlayingMovies } from '../features/movie/movieSlice';
import Card from './Card';

function Row(props) {
    const dispatch = useDispatch();
    const nowPlaying = useSelector(selectNowPlayingMovies);
    useEffect(() => {
        dispatch(fetchNowPlayingMovies());
    }, [])

    return (
        <div className='py-3'>
            <h2 className='mb-3'>Row Title</h2>
            <Swiper
                spaceBetween={20}
                slidesPerView={5}
            >
                {
                    nowPlaying.data?.results.map((video) => {
                        return (
                            <SwiperSlide key={video.id}>
                                <Card video={video} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}

export default Row;