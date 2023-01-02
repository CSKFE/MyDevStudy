import React, { useEffect, useRef } from 'react';

const useClick = (onClick) => {
  const elem = useRef();
  useEffect(() => {
    if(elem.current) {
      elem.current.addEventListener('click', onClick);
    }
    return () => elem.current.removeEventListener('click', onClick);
  }, []);

  if(typeof onClick !== 'function') return;
  
  return elem;
}

const UseClickComponent = () => {
  const sayHello = () => console.log('say Hello');
  const title = useClick(sayHello);
  return (
    <>
      <h1 ref={title}>Hello UseClickComponent</h1>
    </>
  );
};

export default UseClickComponent;