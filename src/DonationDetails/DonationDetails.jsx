import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DonationDetailsDisplay from './DonationDetailsDisplay';

const DonationDetails = () => {
    let detailedData = useLoaderData();
    let { id } = useParams();
    let idInt = parseInt(id);
    let details = detailedData.find(details => details.id === idInt);

    return (
        <div>
            <DonationDetailsDisplay details={details}></DonationDetailsDisplay>
        </div>
    );
};

export default DonationDetails;