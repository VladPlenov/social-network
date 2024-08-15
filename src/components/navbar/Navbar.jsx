import React from "react";
import './navbar.css'
import valery from '../../img/Valery.png'
import { NavLink } from "react-router-dom";

function Navbar(props){
    return(
        <div className='navbar'>
            <NavLink to='/profile'>Profile</NavLink>
            <NavLink to='/dialogs'>Messages</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <div className='friends'>
                <p>Friends:</p>
                {props.navMenu.map((e)=> {
                            return (
                                <NavLink key={e.id} to='/dialogs'>
                                    <img src={e.ava}></img>
                                    <br/>
                                    <p>{e.name}</p>
                                </NavLink>
                            )   
                        }
                    )
                }             
          </div>
        </div>

    )
}

export default Navbar
  