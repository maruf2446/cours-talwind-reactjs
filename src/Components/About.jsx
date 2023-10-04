import React from 'react';
import img1 from '../assets/img4.png'
import { Link } from 'react-scroll';
import Button from './layout/Button';
import Heading from './Heading';

const About = () => {
    return (
        <div className='md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14'>
            <div className='w-full md:w-2/4'>
                <img src={img1} className='w-auto' alt="" />
            </div>
            <div className='w-full md:w-2/4 text-center space-y-2'>
                <Heading title1="About" title2="Us?"></Heading>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cum rem aperiam, veritatis distinctio eius provident odit inventore fugiat Lorem ipsum dolor sit Lorem ipsum dolor sit amet.
                </p>
                <Link to='contact' spy={true} smooth={true} duration={500}>
                <Button title="Contact us"></Button>
                </Link>
            </div>
        </div>
    );
};

export default About;