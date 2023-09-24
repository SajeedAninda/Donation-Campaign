import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const DonationDetails = () => {
    let detailedData = useLoaderData();
    let { id } = useParams();
    let idInt = parseInt(id);
    let details = detailedData.find(details => details.id === idInt);
    let { picture, title, description, price } = details;

    return (
        <div className='w-[90%] mx-auto space-y-6 mb-12'>
            <div className='w-full relative'>
                <img className='w-full rounded-lg' src={picture} alt="" />
                <div className='bg-black w-full py-10 px-6 bg-opacity-50 absolute bottom-0'>
                    <button className='px-4 py-3 bg-red-500 rounded-lg text-white'>Donate ${price}</button>
                </div>
            </div>

            <h2 className='text-[#0B0B0B] font-bold text-4xl'>{title}</h2>
            <p className='text-[#0b0b0bb3]'>{description}</p>
        </div>
    );
};

export default DonationDetails;