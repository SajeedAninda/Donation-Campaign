import React, { useEffect, useState } from 'react';
import Cards from './Cards';

const CardsContainer = () => {
    let [cardData, setCardData] = useState([]);

    useEffect(() => {
        fetch("/donationData.json")
            .then(res => res.json())
            .then(data => setCardData(data));
    }, [])

    return (
        <div className='py-6 grid grid-cols-4 gap-6'>
            {
                cardData.map(cardData => <Cards key={cardData.id} cardData={cardData}></Cards>)
            }
        </div>
    );
};

export default CardsContainer;