import axios from 'axios'
import {Component} from 'react'
import { Link, Route, Redirect, BrowserRouter } from 'react-router-dom'
import { Router, useNavigate } from 'react-router'
import { baseUrl } from '../../Shared/baseUrl'
import '../Starter/Starter.css'
import Starter from '../Starter/LoginStarter'
import Navbar from '../Navbar/Navbar'
import Login from '../Login/Login'
import Main from '../Main/Main'
import Home from '../Home/Home'
import {addToken, deleteUser} from '../../Redux/actionCreators'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import LoginModal from '../Login/LoginModal'
import { Alert, Form, FormGroup } from 'react-bootstrap'
import { FormFeedback, Input } from 'reactstrap'




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
            confirmPassword: '',
            globalMessage: '',
            userExists: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleItem = this.handleItem.bind(this);
    }

    handleInputChange = (event) => {
        // event.preventDefault()
        // this.setState({
        //     [event.target.name]: event.target.value
        // })
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = () => {
        const data = {
            username: this.state.username, 
            password: this.state.password, 
            confirmPassword: this.state.confirmPassword, 
            role: 'USER'}
        // if(this.state.password === this.state.confirmPassword){
        //     axios.post(baseUrl + "/register", data)
        // }else{
        //     alert("Password and Confirm Password must match!!!")
        // }

        //Post request
        fetch('http://localhost:8081/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body:JSON.stringify(data),
        })
        .then((response) => {
            if(response.status === 201){
                this.setState({
                    globalMessage: 'Your account was created successfully, please login',
                    userExists: false
                });
            } else if(response.status === 500) {
                this.setState({
                    globalMessage: 'Email alreay exists, please try again',
                    userExists: true
                });
            }
        }) 
        .catch((error) => {
            console.error('Error encountered:', error);
            this.setState({globalError: 'Error found on submission'});
        });
        Event.preventDefault()
    }
    handleItem =(field) => (e) => {
        this.state({
            pressed: {...this.state.pressed, [field]: true }
        });
    }
    symbolCheck(string) {
        const specialCharacters = /[`!@#$%^&]/;
        return specialCharacters.test(string);
    }
    validate(username, password, confirmPassword){
        const errors = {
            username: '',
            password: '',
            confirmPassword: ''
        };
        if(this.state.username && username.split('').filter(x => x  === '@').length !==1)
        errors.username ="Email should contain @";
        if(this.state.password && password.length < 8)
        errors.password = 'Password must be 8 characters or more';
        else if(this.state.password && password.search(/[A-Z]/) < 0)
        errors.password = 'Password must contain atleast one uppercase letter';
        else if(this.state.password && password.search(/[a-z]/) < 0)
        errors.password = 'Password must contain atleast one uppercase letter';
        else if(this.state.password && !this.symbolCheck(password))
        errors.password = 'Password should contain one of the following characters !@#$%';
        if(this.state.confirmPassword && confirmPassword !== password)
        errors.confirmPassword = 'Password does not match, please try again';
        return errors;
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
    const errors = this.validate(this.state.username, this.state.password, this.state.confirmPassword);

        return(
            <div id='register' className='register'>
            
            <Form onSubmit={(event) => this.handleSubmit(event)} className='form'>
                <h1>Create Account</h1>
                {!this.state.userExists && this.state.message && this.state.message.length > 0 &&<Alert color='primary'>{this.state.globalMessage}</Alert>}
                {this.state.userExists && this.state.message && this.state.message.length > 0 &&<Alert color='danger'>{this.state.globalMessage}</Alert>}
                {/* <label class="sr-only">Username</label> */}
                
                <Input
                    type="text"
                    id="username"
                    name="username"
                    // class="form-control"
                    // placeholder="Email"
                    // v-model="user.username"
                    // onChange={this.handleInputChange}
                    value={this.state.username}
                    valid={errors.username === ''}
                    invalid={errors.username !== ''}
                    placeholder="Email"
                    onBlur={this.handleItem('username')}
                    onChange={this.handleInputChange} 
                    required


                />
                <FormFeedback>{errors.username}</FormFeedback>
                
                <br/>
                {/* <label class="sr-only">Password</label> */}
                
                <Input
                    type="password"
                    id="password"
                    name="password"
                    // class="form-control"
                    // placeholder="Password"
                    // v-model="user.password"
                    // onChange={this.handleInputChange}
                    value={this.state.password}
                    valid={errors.password === ''}
                    invalid={errors.password !== ''}
                    placeholder="Password"
                    onBlur={this.handleItem('password')}
                    onChange={this.handleInputChange} 
                    // required
                />
                <FormFeedback>{errors.password}</FormFeedback>
                
                <br/>
                
                <Input
                    type="password"
                    id="password-confirm"
                    name="confirmPassword"
                    // class="form-control"
                    // placeholder="Confirm Password"
                    // v-model="user.password"
                    value={this.state.confirmPassword}
                    valid={errors.confirmPassword === ''}
                    invalid={errors.confirmPassword !== ''}
                    placeholder="Confirm Password"
                    onBlur={this.handleItem('password')}
                    onChange={this.handleInputChange} 
                    // required
                />
                <FormFeedback>{errors.confirmPassword}</FormFeedback>
                

                <br/>
                
                <Link to="/login"><button className='login-btn-2' onClick={() => this.setState({showLogin: this.state.showLogin})}>Login</button></Link>
                {/* <Link to="/login" onClick={this.navigateToLogin}>Have an account?</Link> */}
                <button type="submit" onClick={this.handleSubmit} className='register-btn-2'>Register</button>
                </Form>
            </div>
            
        )
    }
}

export default Register;