import { Component } from 'react'
import { useNavigate } from 'react-router'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {addToken, addUser} from '../../Redux/actionCreators'
import {baseUrl} from '../../Shared/baseUrl'
import axios from 'axios'
import '../Starter/Starter.css'
import './Login.css'



const mapDispatchToProps = (dispatch) => ({
    addToken: () =>  dispatch(addToken()),
    addUser: () => dispatch(addUser()) 
});

class Login extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    

    handleLogin = async () => {
        const data = { username: this.state.username, password: this.state.password };
        

        const userWithToken = await axios.post(baseUrl + '/login', data)

        
        await this.props.dispatch(addToken(userWithToken.data.token))
        await this.props.dispatch(addUser(userWithToken.data.user));
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
        return(
            <div className='login'>
                <h1>Please Sign In</h1>
                <label class="sr-only">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    class="form-control"
                    placeholder="Username"
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