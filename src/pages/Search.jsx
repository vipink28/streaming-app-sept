import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card';
import { selectQueryString } from '../features/common/commonSlice';
import { apirequests } from '../helper/apirequests';
import axios from '../helper/axios';
function Search(props) {
    const query = useSelector(selectQueryString);
    const [videosBySearch, setVideosBySearch] = useState(null);

    const fetchSearchResults = async (query) => {
        try {
            const response = await axios.get(apirequests.getVideoBySearch("movie", query));
            setVideosBySearch(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (query) {
            fetchSearchResults(query);
        }
    }, [query])



    return (
        <div className='container-fluid pt-5 mt-3'>
            <div className='mb-3'>
                <p>Search results for : {query}</p>
            </div>

            <div className='row gy-2'>
                {
                    videosBySearch ?
                        videosBySearch.results.map((video) => (
                            <div key={video.id} className='col-lg-3'>
                                <Card video={video} platform="movie" />
                            </div>
                        ))
                        : ""
                }
            </div>
        </div>
    );
}

export default Search;