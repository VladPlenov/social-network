import valery from '../img/Valery.png';
import shaman from '../img/Shaman.png';
import andrey from '../img/Andrey.png'



let state ={
    profilePage:{
        postsData: [
            {id: 1, message: 'Hi, world', likes:0},
            {id: 2, message: 'I`m Elon Mask, really',  likes:3},
            {id: 3, message: 'Give me some bitcoins', likes:10}
        ]
    },
    dialogsPage: {
        dialogNames: [
            {id:1, name:'Иван Иванов'},  
            {id:2, name:'Илон Маск'},  
            {id:3, name:'Билл Гейтс'}
        ],
        messageItems: [
            {id:1, message:'Привет'},
            {id:2, message:'Вперед на Марс'},
            {id:3, message:'Где мой чип'}
        ]
    },
    navMenu: {
        friends: [
            {id:1, ava: valery, name: 'Vslery'},
            {id:2, ava: shaman, name: 'Yarik'},
            {id:3, ava: andrey, name: 'Andrey'}
        ]    
    }   
}

export default state
