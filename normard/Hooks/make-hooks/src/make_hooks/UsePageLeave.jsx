import React, { useEffect } from 'react';

const useBeforeLeave = (onBefore) => {

  const handle = (e) => {
    const { clientY } = e;
    if(clientY <= 0) {
      onBefore();
    }
  };

  useEffect(() => {
    document.addEventListener('mouseleave', handle);

    return () => {
      document.removeEventListener('mouseleave', handle);
    }
  }, []);
}

const UseBeforeLeaveComponent = () => {
  const begForLife = () => console.log('Plz Back');
  useBeforeLeave(begForLife);

  return (
    <>
      <h1>Hello UseBeforeLeaveComponent</h1>
    </>
  );
};

export default UseBeforeLeaveComponent;