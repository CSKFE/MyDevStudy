import React, { useEffect, useState, useRef } from 'react';

const useFullScreen = (callback) => {
  const elem = useRef();

  const trigger = () => {
    elem.current.requestFullscreen();
    if(callback && typeof callback === 'function') {
      callback(true);
    }
  };

  const exit = () => {
    document.exitFullscreen();
    if(callback && typeof callback === 'function') {
      callback(false);
    }
  };
  
  return { elem, trigger, exit };
}

const UseFullScreenComponent = () => {
  const onFullS = (isFull) => console.log(isFull ? "Full Screen" : "no Full Screen");
  const { elem , trigger, exit } = useFullScreen(onFullS);

  return (
    <>
      <h1>Hello UseFullScreenComponent</h1>
      <div ref={elem}>
        <div style={{width: '100px', height: '100px', background: 'red'}}>Box</div>
        <button type='button' onClick={exit}>Full!</button>
      </div>
      <button type='button' onClick={trigger}>Full!</button>
    </>
  );
};

export default UseFullScreenComponent;