import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import './Header.css';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../Firebase/firebase';



function Header({hideSigndiv = false}) {

  

  const [{user}, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if(user){
      auth.signOut();
    }
  }

  return (
    <div className='container-fluid header' >
      <div className='container header__container'>
        <Link to='/' className='link'>
            <div className='header__brand'>
            <h2>Twitter Api Mash</h2>
            </div>
        </Link>
        {!hideSigndiv ? (
          <div className='header__nav'>
          <div className='header__nav__signin' onClick={handleAuthentication}>
          <Link to={!user && '/signin'} className='signin__button'>
          <button>{user ? 'Sign Out' : 'Sign In'}</button></Link>
          <h4>{user ? user.email : 'Hello Guest'}</h4>
          </div>
          </div>
        ): (
          <div className='header__nav header_nav_hide'>
          <div className='header__nav__signin' onClick={handleAuthentication}>
          <Link to={!user && '/signin'} className='signin__button'>
          <button>{user ? 'Sign Out' : 'Sign In'}</button></Link>
          <h4>{user ? user.email : 'Hello Guest'}</h4>
          </div>
          </div>
        )}
       
         
      </div>
    </div>
  )
}

export default Header
