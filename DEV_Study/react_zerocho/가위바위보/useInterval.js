import { useEffect, useRef } from 'react';

function useInterval(cb, delay) {
  const savedCallBack = useRef();

  useEffect(() => {
    savedCallBack.current = cb;
  });

  useEffect(() => {
    function tick() {
      savedCallBack.current();
    }

    if(delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay])

  return savedCallBack.current;
}

export default useInterval;