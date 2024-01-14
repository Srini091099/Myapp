import logo from './logo.svg';
import './App.css';
import { Mainpage } from './pages/mainpage';
import { Routesheader } from './router/router';
import { Provider } from 'react-redux';

function App() {
  return (
    <div >
      {/* <Provider> */}
     <Routesheader/>
     {/* </Provider> */}
    </div>
  );
}

export default App;
