import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';



function App(props) {
  
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Header />
        <Navbar navMenu={props.state.navMenu.friends} />
        <div className='wrapper-content'>
          <Routes>
            <Route path='/'  element={<Profile  postsData={props.state.profilePage.postsData} /> } />
            <Route path='/profile' element={<Profile postsData={props.state.profilePage.postsData} />} />
            <Route path='/dialogs' element={<Dialogs messageItems={props.state.dialogsPage.messageItems} dialogNames={props.state.dialogsPage.dialogNames} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;