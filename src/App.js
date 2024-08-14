import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';



function App(props) {
  
  // console.log('Dialogs Name:', props.dialogNames); // Проверка пропсов


  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Header />
        <Navbar />
        <div className='wrapper-content'>
          <Routes>
            <Route path='/'  element={<Profile  postsData={props.postsData} /> } />
            <Route path='/profile' element={<Profile postsData={props.postsData} />} />
            <Route path='/dialogs' element={<Dialogs messageItems={props.messageItems} dialogNames={props.dialogNames} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;