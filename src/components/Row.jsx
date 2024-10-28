import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { apirequests } from '../helper/apirequests';
import axios from '../helper/axios';
import Card from './Card';

function Row({ action, selector, title, platform, genre }) {
    const dispatch = useDispatch();
    const collection = useSelector(genre ? (state) => state : selector);

    const [videosByGenre, setVideosByGenre] = useState(null);

    const fetchVideosByGenre = async (platform, genreid) => {
        try {
            const response = await axios.get(apirequests.getVideosByGenre(platform, genreid));
            setVideosByGenre(response.data);
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        if (genre) {
            fetchVideosByGenre(platform, genre.id)
        } else {
            dispatch(action());
        }
    }, [genre])

    return (
        <div className='py-3'>
            <h2 className='mb-3'>{title}</h2>
            {
                genre ?
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={5}
                    >
                        {
                            videosByGenre?.results.map((video) => {
                                return (
                                    <SwiperSlide key={video.id}>
                                        <Card video={video} platform={platform} />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    :
                    collection.status === "success" ?
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={5}
                        >
                            {
                                collection.data?.results.map((video) => {
                                    return (
                                        <SwiperSlide key={video.id}>
                                            <Card video={video} platform={platform} />
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                        : collection.status === "loading" ?
                            <p>...Loading</p>
                            : <p>Something went wrong</p>
            }
        </div>
    );
}

export default Row;