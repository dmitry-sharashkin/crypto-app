import React, {useEffect} from 'react';
import {useGetSharesQuery} from "../services/cryptoApi";

const Cryptocurrencies = () => {

    const {data, isFetching} = useGetSharesQuery()
    console.log(data)

    return (
        <div>
            {data?.map((obj, index) => {
                if (index <= 11){
                    return <div key={obj.symbol}>{obj.name} { obj.symbol} </div>
                }
            })}
        </div>
    );
};

export default Cryptocurrencies;