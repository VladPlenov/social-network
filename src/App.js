import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import { BrowserRouter, Route, Switch} from 'react-router-dom/cjs/react-router-dom';


function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Header />
        <Navbar />
        <div className='wrapper-contnet'>
          <Switch>
            <Route exact path='/' component={Profile} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/dialogs' component={Dialogs} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;