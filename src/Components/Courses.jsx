import React from 'react';
import Heading from './Heading';
import webImg from '../assets/web.png'
import apImg from '../assets/app.png'
import gripch from '../assets/grapic.png'
import digital from '../assets/digital.jpg'
import CoursesCard from './layout/CoursesCard';

const Courses = () => {
    return (
        <div className='min-h-screen flex flex-col items-center md:px-32 px-5 my-10'>
            <Heading title1="Our" title2="Courses"></Heading>

            <div className='flex flex-wrap justify-center gap-6 mt-9'>
                <CoursesCard img={webImg} title="Web Development"></CoursesCard>
                <CoursesCard img={apImg} title="App Development"></CoursesCard>
                <CoursesCard img={gripch} title="Graphice Dgner"></CoursesCard>
                <CoursesCard img={digital} title="Digital Marketing"></CoursesCard>
            </div>
        </div>
    );
};

export default Courses;