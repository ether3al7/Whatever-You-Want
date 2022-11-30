import React from 'react'
import { API_BASE_URL, BEARER_TOKEN } from '../services/config';
import queryString from 'querystring'
import Search from './ViewRestaurants/Search';

// export function get(path, queryParams) {
//     const query = require(URLSearchParams.stringify(queryParams));
//   return (
//     fetch(`${API_BASE_URL}${path}?${query}`, {
//         headers: {
//             Authorization: `Bearer ${BEARER_TOKEN}`,
//             Origin: 'localhost',
//             withCredentials: true,
//         }
//     })
//   )
// }
const getData = {
    async search(id) {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses${id}`, {
                    headers: {
                        Authorization: `Bearer ${BEARER_TOKEN}`,
                        // // Origin: 'localhost',
                        withCredentials: true,
                        // 'Access-Control-Allow-Origin' : '*',
                        // 'Access-Control-Allow-Methods': '*',
                        // 'Access-Control-Allow-Headers': '*',
                    }
                });
                const jsonResponse = await response.json();
                if(jsonResponse.businesses){
                    return jsonResponse.businesses.map( data => ({id: data.id,}));
                }
    }
};
export default getData;