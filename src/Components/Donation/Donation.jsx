import React, { useEffect, useState } from 'react';
import DonatedCards from './DonatedCards';

const Donation = () => {
    let [donations, setDonations] = useState([]);
    let [noDonations, setNoDonations] = useState(false);
    let [showAll, setShowAll] = useState(false);
    useEffect(() => {
        let donated = JSON.parse(localStorage.getItem("donation"));

        if (donated) {
            setDonations(donated);
        }
        else {
            setNoDonations("No Donations Found");
        }
    }, [])



    return (
        <div>
            {noDonations ? (
                <h1 className='text-4xl text-[#0B0B0B] font bold h-[70vh] flex justify-center items-center'>{noDonations}</h1>
            ) : (
                <div>
                    <div className='grid grid-cols-2 gap-6 w-[90%] mx-auto mb-10'>
                        {showAll ? (
                            donations.map((cardData) => (
                                <DonatedCards key={cardData.id} cardData={cardData} />
                            ))
                        ) : (
                            donations.slice(0, 4).map((cardData) => (
                                <DonatedCards key={cardData.id} cardData={cardData} />
                            ))
                        )}
                    </div>
                    <div className={`mt-5 flex justify-center ${showAll ? "hidden" : ""}`}>
                        {donations.length > 4 && (
                            <button
                                className='px-5 py-3 bg-[#009444] text-white font-semibold rounded-lg'
                                onClick={() => setShowAll(!showAll)}
                            >
                                See All
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Donation;