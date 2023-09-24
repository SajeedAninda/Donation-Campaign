import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ cardData }) => {
    const {id, picture, category, title, card_bg, category_bg, txt_btn_bg } = cardData;

    return (
        <Link to={`/details/${id}`}>
            <div className={`rounded-lg bg-[${card_bg}]`}>
                <img className='h-[190px] w-full rounded-tl-lg rounded-tr-lg' src={picture} alt="" />
                <div>
                    <div>
                        <h3 className={`border border-gray-400 inline-block p-1 mt-2 bg-[${category_bg}]`}>{category}</h3>
                    </div>
                    <h3 className={`text-base font-semibold ${txt_btn_bg}`}>{title}</h3>
                </div>
            </div>
        </Link>
    );
};

export default Cards;
