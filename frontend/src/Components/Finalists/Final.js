import React from 'react'
import Restaurants from '../ViewRestaurants/Restaurant'
	
	

class FinalRestaurantList extends React.Component {
  //renders the list of restaurants for the finalist restaurant list 
  render() {
    return (
      <div>
        <div>
        {
          (this.props.restaurants && this.props.restaurants.slice(0, 5).map(business => {
            return (
            <Restaurants inviteId={this.props.inviteId} token={this.props.token} businesses={this.props.restaurants} business={business} key={business.id} /> 
            )}))
        }
        </div>
      </div>
    )
  }
}


export default FinalRestaurantList
