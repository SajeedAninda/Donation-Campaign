import React from 'react';
import Banner from '../Banner/Banner';
import CardsContainer from '../CardsSection/CardsContainer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='w-[90%] mx-auto'>
            <CardsContainer></CardsContainer>
            </div>
        </div>
    );
};

export default Home;