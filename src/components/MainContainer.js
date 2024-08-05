import React from 'react'
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
  return (
    <div>
        <div className="space-x-4"><ButtonList /></div>
        <div className=""><VideoContainer /></div>
    </div>
  );
};

export default MainContainer;
