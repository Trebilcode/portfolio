import React from 'react';

import './project.scss';
import { Link } from 'react-router-dom';


const Project = ({ title, content, imgUrl}) => {
  return (
    <div className='project'>
      <Link 
        className='title' 
        to='www.google.com'>{title}
      </Link>
      <div className='frame'>
        <img src={imgUrl} />       
      </div>
    </div>
  );
};

export default Project;