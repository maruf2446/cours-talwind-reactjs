import React from 'react';
import { Link } from 'react-scroll';
import Button from './layout/Button';
import bennar from '.././assets/bg.png'

const Home = () => {
    return (
        <div className='min-h-[70vh] flex flex-col-2 md:row md:justify-between items-center md:mx-32 mx-5 mt-10'>
           <div className='md:w-2/4 text-center'>
            <h2 className='text-5xl font-semibold leading-tight'>Knowledge With</h2> 
            <span className='text-5xl font-semibold text-brightGreen'>eStudy</span>

            <p className='text-lightText mt-5 text-start'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse autem itaque, dolor a eum laborum. Est quis deserunt deleniti incidunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, distinctio.</p>

            <Link to='contact' spy={true} smooth={true} duration={500}>
                <Button title="Contact"></Button>
            </Link>
           </div>

           <div className='w-full md:w-2/4'>
            <img src={bennar} className='w-80 ' alt="" />
           </div>
        </div>
    );
};

export default Home;