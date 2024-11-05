import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import { apirequests } from '../helper/apirequests';
import axios from '../helper/axios';
import { useTitle } from '../hooks/useTitle';

function BrowseByGenre(props) {
    const params = useParams();
    useTitle("Streaming App | Browse By Genre")
    const [videosByGenre, setVideosByGenre] = useState(null);
    const [genreList, setGenreList] = useState(null);
    const [selectedPlatform, setSelectedPlatform] = useState(null);

    const fetchGenreList = async (platform) => {
        try {
            const response = await axios.get(apirequests.getGenres(platform));
            if (response.status === 200) {
                setGenreList(response.data.genres);
            }
        } catch (err) {
            console.log(err.message);
        }
    }

    const fetchVideosByGenre = async (platform, genreid) => {
        try {
            const response = await axios.get(apirequests.getVideosByGenre(platform, genreid));
            setVideosByGenre(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    const handlePlatform = (e) => {
        fetchGenreList(e.target.value);
        setSelectedPlatform(e.target.value);
    }

    const handleGenreFilter = (e) => {
        fetchVideosByGenre(selectedPlatform, e.target.value);
    }

    useEffect(() => {
        if (params) {
            setSelectedPlatform(params.platform);
            fetchGenreList(params.platform);
            fetchVideosByGenre(params.platform, params.id)
        }
    }, [params])


    return (
        <div className='container-fluid pt-5 mt-3'>
            <div className='py-4 d-flex'>
                <div className='ms-auto d-flex align-items-center'>
                    <label>Filter</label>
                    <select className='form-select' onChange={handlePlatform}>
                        <option value="movie">Movie</option>
                        <option value="tv">Tv</option>
                    </select>
                    <select className='form-select' onChange={handleGenreFilter}>
                        {
                            genreList ?
                                genreList.map((genre) => (
                                    <option key={genre.id} value={genre.id}>{genre.name}</option>
                                ))
                                : ""
                        }
                    </select>
                </div>
            </div>

            <div className='row gy-4'>
                {
                    videosByGenre ?
                        videosByGenre.results.map((video) => (
                            <div className='col-lg-3'>
                                <Card video={video} platform={params.platform} />
                            </div>
                        )) : ""
                }
            </div>
        </div>
    );
}

export default BrowseByGenre;