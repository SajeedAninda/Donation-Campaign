import React from 'react';

const DonationDetailsDisplay = ({ details }) => {
    let { id, picture, title, description, price } = details;

    let handleAddToDonation = () => {
        let donationArr = [];
        let donatedData = JSON.parse(localStorage.getItem("donation"));

        if (!donatedData) {
            donationArr.push(details);
            localStorage.setItem("donation", JSON.stringify(donationArr));
            alert("Donation Added");
        }
        else {
            let donationExists = donatedData.find((detail) => detail.id === id);
            if (!donationExists) {
                donationArr.push(...donatedData, details);
                localStorage.setItem("donation", JSON.stringify(donationArr));
                alert("Donation Added");
            } else {
                alert("Already added");
            }
        }
    }


    return (
        <div>
            <div className='w-[90%] mx-auto space-y-6 mb-12'>
                <div className='w-full relative'>
                    <img className='w-full rounded-lg' src={picture} alt="" />
                    <div className='bg-black w-full py-10 px-6 bg-opacity-50 absolute bottom-0'>
                        <button onClick={handleAddToDonation} className='px-4 py-3 bg-red-500 rounded-lg text-white'>Donate ${price}</button>
                    </div>
                </div>

                <h2 className='text-[#0B0B0B] font-bold text-4xl'>{title}</h2>
                <p className='text-[#0b0b0bb3]'>{description}</p>
            </div>
        </div>
    );
};

export default DonationDetailsDisplay;