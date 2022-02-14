import './FullBlog.css'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LeaveComment from '../leavecomment/LeaveComment';

const FullBlog = () => {
    const { id } = useParams();

    const [blogs, setblogs] = useState([])
    useEffect(() => {
        fetch(`https://salesblogapi.herokuapp.com/blogs/${id}`)
            .then(res => res.json())
            .then(data => setblogs(data))
    }, )

    const {  mainblog, title, coverimage } = blogs;

    return (
        <>
            <div className='grid justify-items-center mt-8'>
                <div className='h-48 md:h-96 '>
                    <img className='md:h-full ' src={coverimage} alt='coverphoto' />
                </div>
                <div className='w-3/4'>
                    <div>
                        <h1 className='text-2xl md:text-4xl my-4 font-bold text-left '>{title}</h1>    </div>
                    <p className='text-left'>{mainblog}</p>
                </div>
            </div>
            <hr className='py-4 my-8 bg-gray-300 px-36 mx-44' />

            <LeaveComment id={id}></LeaveComment>

        </>
    );
};

export default FullBlog;