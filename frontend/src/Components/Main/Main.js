import React, {Component, useState } from 'react'
import {Switch, Route, Redirect, Link, withRouter} from 'react-router-dom'
import Login from '../Login/Login'
import RegisterStarter from '../Starter/RegisterStarter'
import ViewRestaurants from '../ViewRestaurants/ViewRestaurants'
import AboutUs from '../Navbar/AboutUs/AboutUs'
import RegisterModal from '../Register/RegisterModal'
import Header from '../Navbar/Header'
import Home from '../Home/Home'
import {addToken, deleteUser} from '../../Redux/actionCreators'
import {connect} from 'react-redux'
import LoginStarter from '../Starter/LoginStarter'
import Starter from '../Starter/Starter'
import '../Starter/Starter.css'
import '../Register/Register.css'



const mapStateToProps = state => {
    return {
        token: state.token,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToken: () => { dispatch(addToken()) },
    deleteUser: () => { dispatch(deleteUser())}
});

class Main extends Component {
    constructor(props){
        super(props);
    }

    handleLogout = () => {
        this.props.addToken("")
        this.props.deleteUser()
    }
    

    render(){
    
        return(
            
            <div>
                {this.props.token.token !== undefined ?
                        <div>
                            <button className='nav-btn'>
                            <Link to='/home' className='nav-home'>Home</Link>
                            </button>
                            <button className='nav-btn'>
                            <Link to='/login' onClick={this.handleLogout} className='nav-logout'>Logout</Link>
                            </button> 
                            <button className='nav-btn'>
                            <Link to='/invite' className='nav-invite'>Make an invitation</Link>
                            </button> 
                            <Redirect to='/home'/>

                        </div>  
                    : 
                     <Header className='starter-bg-2'/>
                      
                        
                }
                

                <Switch>
                <div>
                    <Route exact path='/login' component={() => <LoginStarter />}/>
                    <Route exact path='/register' component={() => <RegisterStarter />}/>
                    {/* <Route path='/home'component={() => <Home/>}/> */}
                    <Route exact path='/view' component={() => <ViewRestaurants />}/>
                    <Route exact path='/home' component={this.props.token.token !== undefined ? () => <Home/> : null}/>
                    <Route exact path='/aboutus' component={() => <AboutUs />}/>
                    <Redirect to='/home'/>
                </div>    
                </Switch>
            </div>
        )
    }
} 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));