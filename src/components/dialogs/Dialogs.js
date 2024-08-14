import React from 'react'
import './Dialogs.css'
import DialogsItem from './dialogsItem/DialogsItem'
import Message from './messages/Message'



const Dialogs = (props) => {
    return (
      <div className="dialogs">
        <div className='dialog'>
          { props.dialogNames.map((e) => <DialogsItem key={e.id} name={e.name} id={e.id} />) }
        </div>
        <div className="messages">
          { props.messageItems.map((e) => <Message key={e.id} message={e.message} id={e.id} />)}
        </div>
        <div className="code">
          <input type="text"/>
          <button>Отправить</button>
        </div>
      </div>
    )
  }
export default Dialogs