import React from 'react'
import {Link}from 'react-router-dom';
import {useSelector} from 'react-redux';

import './navbar.css'
import MenuButton from '../Menu/menubutton';
import Usermenu from '../UserMenu/usermenu';


function Navbar() {

    const isLogged = useSelector(state => state.isLogged);
    const isMenu = useSelector( state => state.isMenu );
    const userState = useSelector( state => state.userState); 
    
    

    return (
        <div className="navbar">
           <header>
            <div className="search">
                <input type="text" id="" placeholder="search Books..."/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
                <button><i className="fas fa-search"></i></button>
            </div>
               
            <div className="home">
               <Link to='/'>Bookify</Link>
            </div>

            <div className="user">
               {isLogged 
               ? 
                <div className="user">  
                    <MenuButton />
                </div>
               :
               <div className="user">
                    <button> <Link to='/login'>Login</Link></button>
                    <button> <Link to='/signup'>SignUp</Link></button>
                </div> 
               }
            </div> 
            </header>
            <div className={isMenu?"side-menu active":"side-menu"}>
               <div className="Usermenu">
               {userState.authenticated ?  <Usermenu /> : null } 
               </div>
               

            </div> 
        </div>
    )
}
export default Navbar