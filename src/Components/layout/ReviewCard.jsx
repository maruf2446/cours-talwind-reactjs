import React from 'react';

const ReviewCard = (props) => {
    return (
        <div className='flex flex-col items-center justify-between bg-white border-2 border-lightText md:border-none md:w-1/5 p-5 cursor-pointer rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all'>
            <div>
                <p className='text-lightText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro numquam impedit odio debitis ipsam sed animi quos hic eius ut.</p>
            </div>
            <div className='flex flex-row justify-center'>
                <img className='rounded-full w-3/5' src={props.img} alt="" />
            </div>
        </div>
    );
};

export default ReviewCard;