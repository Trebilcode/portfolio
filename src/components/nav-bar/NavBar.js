import React from 'react';
import {Link} from 'react-router-dom'


import {ReactComponent as Logo} from '../../assets/Logo.svg';
import './nav-bar.scss';


const NavBar = () => {
  return(
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/blog'>
            BLOG
        </Link>
        <Link className='option' to='/contact'>
            CONTACT
        </Link>
      </div>  
    </div>
  );
};

export default NavBar;