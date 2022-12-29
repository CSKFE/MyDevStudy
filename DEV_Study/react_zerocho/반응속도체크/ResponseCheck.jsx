import React from 'react'
import { useState, useRef } from 'react';

const ResponseCheck = () => {
  const [state, setState] = useState('waiting');
  const [message, setMessage] = useState('클릭해서 시작하세요');
  const [result, setResult] = useState([]);
  const timeout = useRef(null);
  const startTime = useRef();
  const endTime = useRef();
  // 값이 바뀌지만 렌더에 영향을주고싶지않을때 useRef를 사용할수있다.
  // 변하는값을 잠시 참조하여 기록해놓는다. 

  console.log(timeout.current, startTime.current, endTime.current);
  
  const onClickScreen = () => {
    console.log(timeout, startTime, endTime);
    if(state === 'waiting') {
      setState('ready');
      setMessage('보라색으로 변하면 클릭해주세요');
      timeout.current = setTimeout(() => {
        setState('now');
        setMessage('클릭하세요!');
        startTime.current = new Date().getTime();
      }, Math.floor(Math.random() * 1500) + 2500);

    } else if(state === 'ready') {
      setState('waiting');
      setMessage('너무 빨랐습니다! 보라색일때 클릭하세요');
      clearTimeout(timeout.current);

    } else if(state === 'now') {
      endTime.current = new Date().getTime();
      setState('waiting');
      setMessage('클릭해서 시작하세요');
      setResult(prev => [...prev, endTime.current - startTime.current]);
    }
  };

  const reset = () => {
    setResult([]);
  };

  const renderAverage = () => {
    return result.length !== 0 
      && 
      <>
        <div className='ever-time'>평균 시간: {(result.reduce((pre, cur) => pre + cur) / result.length).toFixed(2)}ms</div>
        <button className='reset' onClick={reset}>reset</button>
      </>
  };

  return (
      <>
        <div
          id="screen"
          className={state}
          onClick={onClickScreen}
        >
          {message}
        </div>
        {renderAverage()}
      </>
  );
}

export default ResponseCheck;