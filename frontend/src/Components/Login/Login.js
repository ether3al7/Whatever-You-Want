import { Component } from 'react'
import { useNavigate } from 'react-router'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {addToken, addUser} from '../../Redux/actionCreators'
import {baseUrl} from '../../Shared/baseUrl'
import axios from 'axios'
import '../Starter/Starter.css'
import './Login.css'
import { Alert, FormFeedback, Input } from 'reactstrap'
import 'react-toastify/dist/ReactToastify.css';





const mapDispatchToProps = (dispatch) => ({
    addToken: () =>  dispatch(addToken()),
    addUser: () => dispatch(addUser()) 
});

class Login extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            message: '',
            error: '',
            isNotAuthenticated: false,
            
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
        

    handleLogin = async (event) => {
        const data = { username: this.state.username, password: this.state.password };
        const userWithToken = await axios.post(baseUrl + '/login', data)

	      .catch(function (error) {
	        if (error.response) {
	          console.log(error.response.data);
	          console.log(error.response.status);
	          console.log(error.response.headers);
	          alert("Invalid credentials, please try again");
	        } else if (error.request) {
	          console.log(error.request);
	        } else {
	        
	          console.log("Error", error.message);
	        }
	        console.log(error.config);
	      });

        
        await this.props.dispatch(addToken(userWithToken.data.token))
        await this.props.dispatch(addUser(userWithToken.data.user));
        
        console.log(userWithToken.data.token);
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
    validate(username, password){
        const errors = {
            username: '',
            password: ''
            
        };
        if(this.state.username && username.split('').filter(x => x  === '@').length !==1)
        errors.username ="Email should contain @";
        if(this.state.username === this.state.isNotAuthenticated)
        errors.username = 'Invalid credentials'
        if(this.state.password && password.length < 8)
        errors.password = 'Password must be 8 characters or more';
        else if(this.state.password && password.search(/[A-Z]/) < 0)
        errors.password = 'Password must contain atleast one uppercase letter';
        else if(this.state.password && password.search(/[a-z]/) < 0)
        errors.password = 'Password must contain atleast one uppercase letter';
        else if(this.state.password && !this.symbolCheck(password))
        errors.password = 'Password should contain one of the following characters !@#$%';
        return errors;
    }
    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    navigateToRegister = (event) => {
        const navigate = useNavigate();
        navigate('/register')
    }

    render(){
        const errors = this.validate(this.state.username, this.state.password);
        // if(this.state.isAuthenticated){

        

        return(
            <div className='login'>
                <h1 className='sign-in'>Please Sign In</h1>
                <label className="sr-only">Username</label>
                
                {!this.state.isNotAuthenticated && this.state.message && this.state.message.length > 0 && <Alert color='primary'>{this.state.message}</Alert>}
                {this.state.isNotAuthenticated && this.state.message && this.state.message.length > 0 && <Alert color='danger'>{this.state.message}</Alert>}
                <Input
                    type="text"
                    id="username"
                    name="username"
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
                <label className="sr-only">Password</label>
                <Input
                    type="password"
                    id="password"
                    name="password"
                    value={this.state.password}
                    valid={errors.password === ''}
                    invalid={errors.password !== ''}
                    placeholder="Password"
                    onBlur={this.handleItem('password')}
                    onChange={this.handleInputChange} 
                    required
                />
                <FormFeedback>{errors.password}</FormFeedback>
                <br/>

                <Link to="/register" ><button className='register-btn' >Register</button></Link>
            
                <button type="submit" onClick={this.handleLogin} className='login-btn'>Sign in</button>
            </div>
        )
    }
}


export default withRouter(connect(mapDispatchToProps)(Login));