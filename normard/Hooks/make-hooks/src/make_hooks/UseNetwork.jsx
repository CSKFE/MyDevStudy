import React, { useEffect, useRef, useState } from 'react';

const useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.onLine);
  const handle = () => {
    if(typeof onChange === 'function') onChange(navigator.onLine);
    setStatus(navigator.onLine)
  };

  useEffect(() => {
    window.addEventListener('online', handle);
    window.addEventListener('offline', handle);
    return () => {
      window.removeEventListener('online', handle);
      window.removeEventListener('offline', handle);
    }
  }, [])

  return status;
}

const UseNetworkComponent = () => {
  const handle = online => {
    console.log(online ? "We are Online" : "We are Offline");
  }
  const onLine = useNetwork(handle);
  return ( 
    <>
      <h1>Hello UseNetworkComponent</h1>
      <div>{onLine ? 'onLine' : 'offLine'}</div>
    </>
  );
};

export default UseNetworkComponent;