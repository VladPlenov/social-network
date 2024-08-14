import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  {id: 1, message: 'Hi, world', likes:0},
  {id: 2, message: 'I`m Elon Mask, really',  likes:3},
  {id: 3, message: 'Give me some bitcoins', likes:10}
]

let dialogNames = [
  {id:1, name:'Иван Иванов'},  
  {id:2, name:'Илон Маск'},  
  {id:3, name:'Билл Гейтс'}
]

let messageItems = [
  {id:1, message:'Привет'},
  {id:2, message:'Вперед на Марс'},
  {id:3, message:'Где мой чип'}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App 
    postsData={postsData} 
    dialogNames={dialogNames}
    messageItems={messageItems}
    />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
