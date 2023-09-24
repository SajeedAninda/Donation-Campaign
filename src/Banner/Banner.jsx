import React from 'react';
import "./Banner.css"

const Banner = () => {
    return (
        <div className='flex h-[85vh] justify-center items-center bg'>
            <div className='space-y-10'>
                <div className="text">
                    <h1 className='font-bold text-[#0B0B0B] text-5xl '>I Grow By Helping People In Need</h1>
                </div>
                <div className='flex justify-center items-center'>
                    <input className='w-[50%] border border-gray-300 p-2 rounded-tl-lg rounded-bl-lg placeholder:font-normal' placeholder="Search Here" type="text" name="" id="" />
                    <button className='py-[9px] px-4 text-white font-bold bg-[#FF444A] rounded-tr-lg rounded-br-lg'>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;