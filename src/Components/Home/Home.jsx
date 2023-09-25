import React, { useState } from 'react';
import CardsContainer from '../CardsSection/CardsContainer';
import "./Banner.css"

const Home = () => {
    let [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let input = e.target.name.value;
        setInputValue(input);
    };

    return (
        <div>
            <div className='flex h-[85vh] justify-center items-center bg'>
                <div className='space-y-10'>
                    <div className="text ">
                        <h1 className='font-bold text-[#0B0B0B] text-center text-4xl md:text-5xl '>I Grow By Helping People In Need</h1>
                    </div>
                    <div className=''>
                        <form onSubmit={handleSubmit} className='w-full flex justify-center items-center'>
                            <input className='w-[50%] border border-gray-300 p-3 rounded-tl-lg rounded-bl-lg placeholder:font-normal' type="text" placeholder='Search Here' name='name' />
                            <button className='py-[13px] px-4 text-white font-bold bg-[#FF444A] rounded-tr-lg rounded-br-lg' type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='w-[90%] mx-auto'>
                <CardsContainer inputValue={inputValue}></CardsContainer>
            </div>
        </div>
    );
};

export default Home;