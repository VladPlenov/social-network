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
    }   
}

export default state
