import React from 'react';
import {useGetProfileQuery} from "../services/cryptoApi";

const CompanyProfile = () => {
    const {data, isFetching} = useGetProfileQuery('AAPL')
    const profile = data?.[0]
    console.log(data)
    return (
        <div>
            <h2>Company profile</h2>
            <div>{profile?.companyName}</div>
            <div>{profile?.price} $</div>
            <div>{profile?.symbol}</div>
            <div><img src={profile?.image} alt="logo"/></div>
        </div>
    );
};

export default CompanyProfile;