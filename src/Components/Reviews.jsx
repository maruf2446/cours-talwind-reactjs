import React from 'react';
import Heading from './Heading';
import ReviewCard from './layout/ReviewCard';
import rev1 from '../assets/rev1.png'
import rev2 from '../assets/rev2.png'
import rev3 from '../assets/rev3.jpeg'
import rev4 from '../assets/rev4.jpeg'

const Reviews = () => {
    return (
        <div className='min-h-screen flex flex-col items-center md:px-32 px-5 py-28'>
            <Heading title1="Our" title2="Reviews"></Heading>

            <div className='flex flex-wrap justify-center gap-5 mt-5'>
                <ReviewCard img={rev1}></ReviewCard>
                <ReviewCard img={rev2}></ReviewCard>
                <ReviewCard img={rev3}></ReviewCard>
                <ReviewCard img={rev4}></ReviewCard>
            </div>
        </div>
    );
};

export default Reviews;