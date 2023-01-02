import React, { useEffect, useRef } from 'react';

const useFadeIn = () => {
  const elem = useRef();

  useEffect(() => {
    if(elem.current) {
      const { current } = elem;
      current.style.transition = '0.5s';
      current.style.opacity = 1;
    }
  }, []);

  return {ref: elem, style:{ 'opacity': 0 }};
}

const UseFadeInComponent = () => {
  const elem = useFadeIn();

  return ( 
    <>
      <h1 {...elem}>Hello UseFadeInComponent</h1>
    </>
  );
};

export default UseFadeInComponent;