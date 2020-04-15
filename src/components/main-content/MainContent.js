import React from 'react';

import Project from '../project/Project';

import './main-content.scss';

const MainContent = ({ content, title, imgUrl}) => {
  return (
    <div className='main-content'>
      <Project imgUrl={imgUrl} title= {title} content={content}/>
    </div>
  );
};

export default MainContent;
