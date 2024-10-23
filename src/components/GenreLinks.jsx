import React from 'react';
import { Link } from 'react-router-dom';

function GenreLinks({ genres }) {
    return (
        genres ?
            <div className='d-flex gap-1 py-2'>
                {
                    genres.map((genre) => (
                        <Link to="/" className='badge rounded-pill text-bg-warning text-decoration-none' key={genre.id}>{genre.name}</Link>
                    ))
                }
            </div> : ""
    );
}

export default GenreLinks;