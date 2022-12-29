import React from 'react';
import { useEffect, useState, useRef } from "react";
import useInterval from './useInterval';

const compChoice = (imgCoord) => {
  return Object.entries(crood).find((v) => v[1] === imgCoord)[0];
};
 
const crood = {
  바위: '0',
  가위: '-142px',
  보: '-284px'
};

const scores = {
  가위: 1,
  바위: 0,
  보: -1
}

const RSC = () => {
  const [result, setResult] = useState('');
  const [score, setScore] = useState(0);
  const [imgCoord, setImgCoord] = useState(crood.바위);
  const [isRunning, setIsRunning] = useState(true);

  const onClickBtn = (choice) => () => {
    if(isRunning) {
      setIsRunning(false);
      const myScore = scores[choice];
      const compScore = scores[compChoice(imgCoord)];
      const diff = myScore - compScore;
      if(diff === 0) {
        setResult('무승부');
      } else if([-1, 2].includes(diff)) {
        setResult('승리')
        setScore((prev) => prev + 1);
      } else {
        setResult('패배')
        setScore((prev) => prev - 1);
      }
      setTimeout(() => {
        setIsRunning(true)
      }, 2000)
    }
  }

  const changeHandle = () => {
      if(imgCoord === crood.바위) 
      {
        setImgCoord(crood.가위);
      } else if(imgCoord === crood.가위) 
      {
        setImgCoord(crood.보);
      } else if(imgCoord === crood.보) 
      {
        setImgCoord(crood.바위);
      }
  }
 
  useInterval(changeHandle, isRunning ? 100 : null);

  return (
    <>
      <div id="computer" style={{background:`url(https://en.pimg.jp/023/182/267/1/23182267.jpg) no-repeat ${imgCoord} 0`}}></div>
        <div className="btn-wrap">
          <button className='rock' onClick={onClickBtn('바위')}>rock</button>
          <button className='scissors' onClick={onClickBtn('가위')}>scissors</button>
          <button className='paper' onClick={onClickBtn('보')}>paper</button>
        </div>
        <div>{result}</div>
        <div>{score} 점!</div>
    </>
  )
}

export default RSC;