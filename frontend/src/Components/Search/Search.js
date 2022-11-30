import React from 'react'
// import SearchBar from '../ViewRestaurants/SearchBar';
import useBusinessSearch from '../../services/useBusinessSearch'
import { useInRouterContext, useLocation, useMatch } from 'react-router';
import { useHistory } from 'react-router';

export function Search() {
  const {location, history} = useInRouterContext();
  const params = new URLSearchParams(location.search);
  const term = params.get('find_desc');
  const locationParam = params.get('find_loc');
  const [businesses, amountResults, searchParams, performSearch] = useBusinessSearch(term, locationParam);


  if (!term || !locationParam) {
      history.push('/');
  }


  function search(term, location) {
      const encodedTerm = encodeURI(term);
      const encodedLocation = encodeURI(location);
      history.push(`/search?find_desc=${encodedTerm}&find_loc=${encodedLocation}`);
      performSearch({term, location});
  }
  return (
    <div>
      {/* <SearchBar /> */}
    </div>
  )
}
