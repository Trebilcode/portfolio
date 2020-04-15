import React from 'react';

import NavBar from '../nav-bar/NavBar';
import MainContent from '../main-content/MainContent';
import Footer from '../footer/Footer';

import './homepage.scss';


const Homepage = () => (
  <div>
    <NavBar />
    <MainContent imgUrl={'../assets/fmg.jpg'} content={'hello there hdhdhdhdhdhdhhdddddddddddddddddddddddddddddddddddddddddd'} title={'Burger Builder'} />
    
  </div>
);

export default Homepage;
