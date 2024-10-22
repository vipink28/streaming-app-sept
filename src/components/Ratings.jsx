import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Ratings({ voteAverage, voteCount }) {
    // 8.5
    const voteAvg = Math.floor(voteAverage / 2);
    const voteArr = [...Array(5)];

    console.log(voteArr);

    return (
        <div className='py-2'>
            <div className='d-flex gap-1'>
                {
                    voteArr.map((item, index) => {

                        return (
                            index < voteAvg ?

                                < FontAwesomeIcon key={index} icon={solidStar} />
                                :
                                < FontAwesomeIcon key={index} icon={faStar} />
                        )
                    })

                }
            </div>
        </div>
    );
}

export default Ratings;