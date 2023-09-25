import React, { useEffect, useState } from 'react';
import Cards from './Cards';

const CardsContainer = ({ inputValue }) => {
    let [cardData, setCardData] = useState([]);

    useEffect(() => {
        fetch("/donationData.json")
            .then(res => res.json())
            .then(data => setCardData(data));
    }, []);

    let filteredCardData = cardData;
    if (inputValue !== '') {
        filteredCardData = cardData.filter((cardData) => {
            return cardData.category.toLowerCase() === inputValue.toLowerCase();
        });
    }

    return (
        <div className='py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>

            {
                filteredCardData.map(cardData => <Cards key={cardData.id} cardData={cardData}></Cards>)
            }

        </div>
    );
};

export default CardsContainer;
