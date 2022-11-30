import React from 'react'
import { API_BASE_URL, BEARER_TOKEN } from './config';
import queryString from 'querystring'


// export default function get(path, queryParams) {
//     // export default function get() {
//     const query = require(URLSearchParams.stringify(queryParams));
//   return (
//     fetch(`${API_BASE_URL}${path}?${query}`, {
//         headers: {
//             Authorization: `Bearer ${BEARER_TOKEN}`,
//             // Origin: 'localhost',
//             // withCredentials: true,
//              mode: 'cors',
//              credentials: 'include',
//             'Access-Control-Allow-Origin' : '*',
//             'Access-Control-Allow-Methods': '*', 
//             'Access-Control-Allow-Headers': '*',
//         }
//     })
//   )
// }

const api = {
    async search(term, location) {
        const response = await fetch(`${API_BASE_URL}term=${term}&location=${location}`, {
                    headers: {
                        Authorization: `Bearer ${BEARER_TOKEN}`,
                        // // Origin: 'http://localhost:3000/',
                        // // Credentials: true,
                        // mode: 'cors',
                        // credentials: 'include',
                        // 'Access-Control-Allow-Origin' : '*',
                        // 'Access-Control-Allow-Methods': '*', 
                        // 'Access-Control-Allow-Headers': '*',
                    }
                });
                const jsonResponse = await response.json(); 
                if(jsonResponse.businesses){
                    return jsonResponse.businesses.map( businessData => ({
                        id: businessData.id,
                        imageSrc: businessData.image_url,
                        name: businessData.name,
                        isClosed: businessData.is_closed, 
                        address: businessData.location.address1,
                        city: businessData.location.city,
                        state: businessData.location.state,
                        zipCode: businessData.location.zip_code,
                        transactions: businessData.transactions, 
                        latitude: businessData.coordinates.latitude,
                        longitude: businessData.coordinates.longitude,
                        category: businessData.categories[0].title,
                        rating: businessData.rating,
                        displayPhone: businessData.display_phone,
                        reviewCount: businessData.review_count

                    }))
        }
    }
}
    export default api;