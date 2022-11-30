import Main from './Components/Main/Main'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {ConfigureStore} from './Redux/configureStore'
import './App.css'
import Footer from './Components/Navbar/Footer';
import Invite from './Components/Invite/Invite';
import Api from './services/Api';



const store = ConfigureStore();

function App() {

  return (
    <Provider store={store}>
      <Router>
      <>
        <Main/>
        <Footer />
      </>  
      </Router>
      
    </Provider>
  );
}

export default App;
