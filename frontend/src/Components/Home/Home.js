import {Link} from 'react-router-dom'
import Search from '../ViewRestaurants/Search'
import ViewRestaurants from '../ViewRestaurants/ViewRestaurants'
import data from "../ViewRestaurants/data"
import React from 'react'


export default function Home() {

    const [needSearch, setNeedSearch] = React.useState(true)
    const [needView, setNeedView] = React.useState(false)

    return(
        <div>
            {needView && <ViewRestaurants 
                restaurants={data}
            /> }
            {needSearch && <Search 
                setNeedSearch={setNeedSearch}
                setNeedView={setNeedView}
            />}
        </div>
    )
}
