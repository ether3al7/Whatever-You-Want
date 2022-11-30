import {Link} from 'react-router-dom'
import Search from '../ViewRestaurants/Search'
import ViewRestaurants from '../ViewRestaurants/ViewRestaurants'
import data from "../ViewRestaurants/data"
import React from 'react'



export default function Home() {

    const [needSearch, setNeedSearch] = React.useState(true)
    const [needView, setNeedView] = React.useState(false)
    const [location, setLocation] = React.useState({city: "", zipcode: ""})
    const [list, setList] = React.useState({})

    return(
        <div>
            {needView && <ViewRestaurants 
                restaurants={list}
                location={location}
            /> }
            {needSearch && <Search 
                setNeedSearch={setNeedSearch}
                setNeedView={setNeedView}
                location={location}
                setLocation={setLocation}
                list={list}
                setList={setList}
            />}
        </div>
    )
}
