import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import Ball from './Ball';

function getWinNumbers() {
  console.log('getWinNumbers');
  const canditate = Array(45).fill().map((v, i) => i + 1);
  const shuffle = [];
  while(canditate.length > 0) {
    shuffle.push(canditate.splice(Math.floor(Math.random() * (canditate.length)), 1),[0]);
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumber = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumber, bonusNumber];
}

const Lotto = () => {
  const [winBalls, setWinBalls] = useState([]);
  const lottoNumbers = useMemo(() => getWinNumbers(), []);
  const [winNumbers, setWinNumbers] = useState(lottoNumbers);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);
  const timeouts = useRef([]);

  const runTimeouts = () => {
    console.log('runTimeouts');
    for(let i = 0; i < winNumbers.length - 1; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls(prev => [
            ...prev,
            winNumbers[i]
        ])
      }, (i + 1) * 1000)
    }
    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true)
    }, 7000);
  }

  useEffect(() => {
    console.log('use Effect');

    for(let i = 0; i < winNumbers.length - 1; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls(prev => [
            ...prev,
            winNumbers[i]
        ])
      }, (i + 1) * 1000)
    }

    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true)
    }, 7000);

    return () => {
      timeouts.current.forEach((v) => {
        timeouts.current[v] = clearTimeout(timeouts[v]);
      })
    }
  }, [timeouts.current]);

  const onClickRedo = useCallback(() => {
    console.log('click Event');
    console.log(winNumbers);
    setWinBalls([]);
    setWinNumbers(getWinNumbers);
    setBonus(null);
    setRedo(false);
    timeouts.current = [];
  }, [winNumbers]);

  return (
      <>
       <div className="number-wrap">
        <p>당첨 숫자</p>
        <div className="ball-wrap">
          {winBalls.map((v, i) => <Ball key={i} number={v} />)}
        </div>
        {redo && 
          <>
            <p>보너스!</p>
            {bonus && <Ball number={bonus} />}
            <button onClick={onClickRedo}>한번 더?</button>
          </>
        }
       </div>
      </>
  )
}

export default Lotto;