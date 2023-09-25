import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ cardData }) => {
    let { id, picture, category, title, card_bg, category_bg, txt_btn_bg } = cardData;

    let bgStyle={
        backgroundColor: `${card_bg}`
    }
    let categoryBg={
        backgroundColor: `${category_bg}`
    }
    let textColor={
        color: `${txt_btn_bg}`
    }
    let combinedStyle={
        ...categoryBg,
        ...textColor,
      }


    return (
        <Link to={`/details/${id}`}>
            <div className={`rounded-lg`} style={bgStyle}>
                <img className='h-[190px] object-cover w-full rounded-tl-lg rounded-tr-lg' src={picture} alt="" />
                <div className='py-2 px-3 space-y-1'>
                    <div>
                        <h3 style={combinedStyle} className={`inline-block text-sm font-medium rounded-lg py-1 px-2 mt-2`}>{category}</h3>
                    </div>
                    <h3 style={textColor} className={`text-base font-semibold`}>{title}</h3>
                </div>
            </div>
        </Link>
    );
};

export default Cards;
