import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';



function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Header />
        <Navbar />
        <div className='wrapper-contnet'>
          <Routes>
            <Route path='/' element={<Profile />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/dialogs' element={<Dialogs />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;