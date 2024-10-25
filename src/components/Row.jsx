import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card';

function Row({ action, selector, title, platform }) {
    const dispatch = useDispatch();
    const collection = useSelector(selector);
    useEffect(() => {
        dispatch(action());
    }, [])

    return (
        <div className='py-3'>
            <h2 className='mb-3'>{title}</h2>
            {collection.status === "success" ?
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