import Main from './Components/Main/Main'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {ConfigureStore} from './Redux/configureStore'
import Starter from './Components/Starter/Starter';
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import RegisterStarter from './Components/Starter/RegisterStarter'
import './App.css'
import Login from './Components/Login/Login';
import LoginStarter from './Components/Starter/LoginStarter'
import Header from './Components/Navbar/Header';
import Footer from './Components/Navbar/Footer';
import Invite from './Components/Invite/Invite';
import Api from './services/Api';


const store = ConfigureStore();

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
      <>
        <Main/>
        <Footer />
        {/* <Api /> */}
      </>  
      </BrowserRouter>
    </Provider>
  );
}

export default App;
