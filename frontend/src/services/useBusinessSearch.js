import React, { useEffect, useState } from 'react'
import Api from './Api'

export default function useBusinessSearch(term, location) {
    const [businesses, setBusinesses] = useState([]);
    const [amountResults, setAmountResults] = useState();
    const [searchParams, setSearchParams] = useState([term, location]);

  
    useEffect(() => {
        setBusinesses([]);
        const fetchData = async () => {
        try{
            const rawData = await Api.get('/businesses/search', searchParams);
            const response = await rawData.json();
            setBusinesses(response.businesses);
            setAmountResults(response.total);
        }catch(e) {
            console.error(e);
        }
    };
    fetchData();
}, [searchParams]);

  return [businesses, amountResults, searchParams, setSearchParams];
}

