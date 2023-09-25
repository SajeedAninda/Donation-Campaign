import React from 'react';
import Swal from 'sweetalert2'

let DonationDetailsDisplay = ({ details }) => {
    let { id, picture, title, description, price, txt_btn_bg } = details;

    let btnColor = {
        backgroundColor: `${txt_btn_bg}`
    }

    let handleAddToDonation = () => {
        let donationArr = [];
        let donatedData = JSON.parse(localStorage.getItem("donation"));

        if (!donatedData) {
            donationArr.push(details);
            localStorage.setItem("donation", JSON.stringify(donationArr));
            Swal.fire(
                'You have Succesfully Donated!',
                'Good Job!',
                'success'
            )
        }
        else {
            let donationExists = donatedData.find((detail) => detail.id === id);
            if (!donationExists) {
                donationArr.push(...donatedData, details);
                localStorage.setItem("donation", JSON.stringify(donationArr));
                Swal.fire(
                    'You have Succesfully Donated!',
                    'Good Job!',
                    'success'
                )
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Donation Already Added...',
                    text: 'Please Select other Donation Section!',
                  })
            }
        }
    }


    return (
        <div>
            <div className='w-[90%] mx-auto space-y-6 mb-12'>
                <div className='w-full relative'>
                    <img className='w-full rounded-lg' src={picture} alt="" />
                    <div className='bg-black w-full py-2 md:py-6 lg:py-10 px-3 md:px-6 bg-opacity-50 absolute bottom-0'>
                        <button style={btnColor} onClick={handleAddToDonation} className='px-3 md:px-4 py-2 md:py-3 rounded-lg text-white'>Donate ${price}</button>
                    </div>
                </div>

                <h2 className='text-[#0B0B0B] font-bold text-4xl'>{title}</h2>
                <p className='text-[#0b0b0bb3]'>{description}</p>
            </div>
        </div>
    );
};

export default DonationDetailsDisplay;