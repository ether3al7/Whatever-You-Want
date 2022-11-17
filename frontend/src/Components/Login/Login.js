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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from '../Register/Register'




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
            userDoesNotMatch: false,
            error: '',
            isAuthenticated: false,
            resData: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
        

    handleLogin = async (event) => {
        const data = { username: this.state.username, password: this.state.password };
        const userWithToken = await axios.post(baseUrl + '/login', data)
        
        
        await this.props.dispatch(addToken(userWithToken.data.token))
        await this.props.dispatch(addUser(userWithToken.data.user));
        //if(this.state.username === userWithToken){alert("Email is not registered please try again")}
    
        fetch('http://localhost:8081/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body:JSON.stringify(data),
        })
        .then(res => res.json()) 
        .then((data)=>{
            // console.log(data);
                this.setState({
                    resData:data.token
                });
            },
            (error) =>{
               console.log(error);
               if(console.status === 401)
               this.setState({
                userDoesNotMatch:true,
                resData:'Invalid Cedentials, please try again'
               })
            }
        );
        }


    //     .catch((error) => {
    //         if(console.status === 401){
    //         console.error('Error:', error);
    //         this.setState({globalError: 'Error found on submission'});}
    //     });
    
    //     // event.preventDefault()
    // }
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
        

    // }

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
        const errors = this.validate(this.state.username, this.state.password, this.state.confirmPassword);
        // if(this.state.isAuthenticated){

        

        return(
            <div className='login'>
                <h1 className='sign-in'>Please Sign In</h1>
                <label class="sr-only">Username</label>
                
                {!this.state.user && this.state.message && this.state.message.length > 0 && <Alert color='primary'>{this.state.message}</Alert>}
                {this.state.user && this.state.message && this.state.message.length > 0 && <Alert color='danger'>{this.state.message}</Alert>}
                {!this.state.isAuthenticated && this.state.resData && this.state.resData.length > 0 && <Alert color='danger'>{this.state.resData}</Alert>}
                <Input
                    // type="text"
                    // id="username"
                    // name="username"
                    // class="form-control"
                    // placeholder="Username"
                    // v-model="user.username"
                    // onChange={this.handleInputChange}
                    // required
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
                <label class="sr-only">Password</label>
                <Input
                    // type="password"
                    // id="password"
                    // name="password"
                    // class="form-control"
                    // placeholder="Password"
                    // v-model="user.password"
                    // onChange={this.handleInputChange}
                    // required
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

                {/* <button className='register-btn' > */}
                <Link to="/register" ><button className='register-btn' >Register</button></Link>
                {/* </button> */}
                {/* <Link to="/register" onClick={this.navigateToRegister}>Need an account?</Link> */}
                <button type="submit" onClick={this.handleLogin} className='login-btn'>Sign in</button>
            </div>
        )
    }
}


export default withRouter(connect(mapDispatchToProps)(Login));