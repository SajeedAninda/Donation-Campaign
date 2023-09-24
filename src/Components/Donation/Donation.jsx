import React, { useState } from 'react';

const Donation = () => {
    let [donations, setDonations] = useState([]);
    let [noDonations, setNoDonations] = useState(false);
    let donated = JSON.parse(localStorage.getItem("donation"));

    console.log(donated);


    return (
        <div>
            Donation
        </div>
    );
};

export default Donation;