import React, { useEffect, useRef, useState } from 'react';

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  });
  const handle = () => {
    setState({x: window.scrollX, y:window.scrollY});
  };
  useEffect(() => {
    window.addEventListener('scroll', handle);

    return () => {
      window.removeEventListener('scroll', handle);
    }
  }, [])
  return (state);
}

const UseScrollComponent = () => {
  const { y } = useScroll();

  return ( 
    <>
    <div style={{height: '200vh'}}>
      <h1>Hello UseScrollComponent</h1>
      <div style={{'color': y > 500 ? 'red' : 'blue', position : 'fixed', top: 0, fontSize: 30, fontWeight: 700}}>Scroll~</div>
    </div>
    </>
  );
};

export default UseScrollComponent;