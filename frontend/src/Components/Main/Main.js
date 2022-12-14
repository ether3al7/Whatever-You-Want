import React, {Component, useState } from 'react'
import {Switch, Route, Redirect, Link, withRouter} from 'react-router-dom'
import RegisterStarter from '../Starter/RegisterStarter'
import ViewRestaurants from '../ViewRestaurants/ViewRestaurants'
import AboutUs from '../Navbar/AboutUs/AboutUs'
import Header from '../Navbar/Header'
import Home from '../Home/Home'
import {addToken, deleteUser} from '../../Redux/actionCreators'
import {connect} from 'react-redux'
import LoginStarter from '../Starter/LoginStarter'
import '../Starter/Starter.css'
import '../Register/Register.css'
import Invite from '../Invite/Invite'
import InviteList from '../Invite/InviteList'
import { Container, Nav, Navbar } from "react-bootstrap";
import InviteData from '../Invite/InviteData'
import ListFinalist from '../Finalists/ListFinalist'
import { Router } from 'react-router'
import Form from '../Invite/Form'




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
                        <div >

                            <Navbar collapseOnSelect  expand="lg" bg="" variant="dark" className='header-container'>
                              <Container>
                              <Link to='/home'><img src={require('../../images/Whatever-4.png')} alt='main-logo' className='nav-logo'/></Link>
                              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                             <Nav className='header-nav-links'>
                                <Nav.Link as={Link} to='/home' className="nav-btn">Home</Nav.Link>
                                <Nav.Link as={Link} to='/home' onClick={this.handleLogout} className='nav-logout'>Logout</Nav.Link>
                                <Nav.Link as={Link} to='/invite' className="nav-btn">Start An Invite</Nav.Link>
                                {/* <Redirect to='/home'/> */}
                              </Nav>
                                </Navbar.Collapse>
                              </Container>
                            </Navbar>

                        </div>  
                        
                    : 
                   
                     <Header />
                   
                     
                      
                        
                }
                

                <Switch> 
                <div>
                
                    <Route exact path='/login' component={() => <LoginStarter />}/>
                    <Route exact path='/register' component={() => <RegisterStarter />}/>
                    {/* <Route path='/home'component={() => <Home/>}/> */}
                    <Route exact path='/view' component={() => <ViewRestaurants />}/>
                    <Route exact path='/invite' component={() => <Invite />}/>
                    <Route exact path='/invitations' component={() => <InviteData />}/>
                    <Route exact path='/Fianlists' component={() => <ListFinalist />}/>
                    {/* <Route exact path='/search' component={() => <SearchBar />}/> */}
                    <Route exact path='/form' component={() => <Form />}/>
                    <Route exact path='/home' component={this.props.token.token !== undefined ? () => <Home/> : null}/>
                    <Route exact path='/aboutus' component={() => <AboutUs />}/>
                    {/* <Redirect to='/home'/> */}
                    
                </div>    
                </Switch>
            </div>
            
        )
    }
} 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));