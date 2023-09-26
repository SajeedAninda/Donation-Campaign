import React from 'react';
import { Link } from 'react-router-dom';

const DonatedCards = ({ cardData }) => {
    let { id, picture, category, title, card_bg, category_bg, txt_btn_bg, price } = cardData;

    let bgStyle = {
        backgroundColor: `${card_bg}`
    }
    let categoryBg = {
        backgroundColor: `${category_bg}`
    }
    let textColor = {
        color: `${txt_btn_bg}`
    }
    let btnColor = {
        backgroundColor: `${txt_btn_bg}`
    }
    let combinedStyle = {
        ...categoryBg,
        ...textColor,
    }


    return (


        <div className={`rounded-lg flex gap-2`} style={bgStyle}>
            <div>
                <img className='h-[170px] object-cover w-[200px] rounded-tl-lg rounded-bl-lg' src={picture} alt="" />
            </div>
            <div className='py-2 px-3 space-y-1'>
                <div>
                    <h3 style={combinedStyle} className={`inline-block text-sm rounded-lg py-1 px-2 mt-2`}>{category}</h3>
                </div>
                <h3 className={`text-base md:text-xl font-semibold`}>{title}</h3>
                <h4 className='font-semibold text-sm' style={textColor}>${price}.00</h4>
                <Link to={`/details/${id}`}>
                    <button style={btnColor} className='py-1 text-sm md:text-base md:py-2 px-3 mt-3 text-white font-semibold rounded-lg'>View Details</button>
                </Link>
            </div>
        </div >
    );
};

export default DonatedCards;