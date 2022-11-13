import Main from './Components/Main/Main'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {ConfigureStore} from './Redux/configureStore'
import Starter from './Components/Starter/Starter';
import Home from './Components/Home/Home'

const store = ConfigureStore();

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main/>
        {/* <Starter /> */}
        {/* <Home /> */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
