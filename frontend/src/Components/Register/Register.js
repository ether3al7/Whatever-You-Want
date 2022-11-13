import axios from 'axios'
import {Component} from 'react'
import { Link, Route, Redirect, BrowserRouter } from 'react-router-dom'
import { Router, useNavigate } from 'react-router'
import { baseUrl } from '../../Shared/baseUrl'
import '../Starter/Starter.css'
import Starter from '../Starter/LoginStarter'
import Navbar from '../Navbar'
import Login from '../Login/Login'
import Main from '../Main/Main'
import Home from '../Home/Home'
import {addToken, deleteUser} from '../../Redux/actionCreators'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import LoginModal from '../Login/LoginModal'




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

class Register extends Component{

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: ''
        }
        
    }

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        const data = {username: this.state.username, password: this.state.password, confirmPassword: this.state.confirmPassword, role: 'USER'}
        if(this.state.password === this.state.confirmPassword){
            axios.post(baseUrl + "/register", data)
        }else{
            alert("Password and Confirm Password must match!!!")
        }
    }
    
    navigateHome = (event) => {
        const navigate = useNavigate();
        navigate('/home')
    };

    navigateToLogin = (event) => {
        const navigate = useNavigate();
        navigate('/login')
    };

    render(){
    

        return(
            <div className='register'>
                <h1>Create Account</h1>
                <label class="sr-only">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    class="form-control"
                    placeholder="Email"
                    v-model="user.username"
                    onChange={this.handleInputChange}
                    required
                />
                <br/>
                <label class="sr-only">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    class="form-control"
                    placeholder="Password"
                    v-model="user.password"
                    onChange={this.handleInputChange}
                    required
                />
                <br/>
                <input
                    type="password"
                    id="password-confirm"
                    name="confirmPassword"
                    class="form-control"
                    placeholder="Confirm Password"
                    v-model="user.password"
                    onChange={this.handleInputChange}
                    required
                />
                <br/>
                
                <Link to="/login" onClick={this.navigateToLogin}>Have an account?</Link>
                <button type="submit" onClick={this.handleSubmit && this.navigateHome} className='register-btn'>Register</button>
                
                     
                
                {/* <Router>
                    <Route path='/login' component={() => <Login/>}/>
                    <Route path='/register'component={() => <Register/>}/>
                    <Route path='/home' component={this.props.token.token !== undefined ? () => <Home/> : null}/>
                    <Redirect to='/login'/>
                </Router> */}
            </div>
            
        )
    }
}

export default Register;