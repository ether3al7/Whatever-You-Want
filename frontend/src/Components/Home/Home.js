import {Link} from 'react-router-dom'
import Search from '../ViewRestaurants/Search'
import ViewRestaurants from '../ViewRestaurants/ViewRestaurants'
import data from "../ViewRestaurants/data"



export default function Home() {
    return(
        <div>
            <ViewRestaurants 
                restaurants={data}
            />
        </div>
    )
}
