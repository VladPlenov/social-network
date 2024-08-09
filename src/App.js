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
        <Switch>
          <Route exact path='/' component={Profile} />
          <Route path='/profile' component={Profile} />
          <Route path='/dialogs' component={Dialogs} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;