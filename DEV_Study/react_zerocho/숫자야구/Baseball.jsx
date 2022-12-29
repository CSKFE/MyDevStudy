import React from "react";
import { useState, memo, useRef } from 'react';

function getNumbers() {
  const canditate = [1,2,3,4,5,6,7,8,9,10];

  const arr = [];
  for(let i = 0; i <= 4; i++) {
    const chosen = canditate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    arr.push(chosen);
  };
  return arr;
}

const Try = memo(({ tryInfo, i }) => {
  const [result, setResult] = useState(tryInfo.result);
  const onClick = () => {
    setResult('1');
  }
  return (
    <li>
      <p>{i}회차</p>
      <div>{tryInfo.try}</div>
      <div onClick={onClick}>{tryInfo.result}</div>
    </li>
  )
});

Try.displayName = 'Try';

const NumberBaseball = () => {
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  const [count, setCount] = useState([]);
  const [answer, setAnswer] = useState(getNumbers); // Lazy init 호출문을 사용하면 컴포넌트가 리렌더링될때 계속 호출됨(초기값은 변하지않지만 함수가 지속적으로 호출되는문제 해결)
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if(value === answer.join('')) {
      setResult('홈런');
      setCount(prev => {
        return [
          ...prev, 
          { try: value, result: '홈런' }
        ]
      });
      alert('게임을 다시 시작합니다');
      setValue('');
      setAnswer(getNumbers());
      setCount([]);
      inputRef.current.focus();
    } else {
      const answerArr = value.split('').map(v => parseInt(v));
      let strike = 0;
      let ball = 0;
      if(count >= 9) {
        setResult(`땡 답은 ${answer.join(',')}였습니다.`);
        alert('게임을 다시 시작합니다');
        setCount(prev => {
          return [
            ...prev, 
            { try: value, result: '볼' }
          ]
        })
        setValue('');
        setAnswer(getNumbers());
        setCount([]);
        inputRef.current.focus();
      } else {
        for(let i = 0; i <= 4; i+=1) {
          if(answerArr[i] === answer[i]) {
            strike += 1;
          } else if(answer.includes(answerArr[i])){
            ball += 1;
          }
        }
        setCount(prev => {
          return [...prev, {try: value, result: `${strike} 스트라이크 ${ball} 볼 입니다. `}]
        });
        setValue('');
        inputRef.current.focus();
      }
    }
  };

  const onChangeInput = e => {setValue(e.target.value)};
  
  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmit}>
        <input ref={inputRef} maxLength={4} onChange={onChangeInput} value={value} />
      </form>
      <div>시도: {count.length}</div>
      <ul>
        {count.map((v, i) => {
          return (
            <Try 
              key={`${i}차 시도 : `}
              tryInfo={v}
              index={i}
            />
          )
        })}
      </ul>
    </>
  )
}
// map함수로 React.Element를 반복해서 렌더링할때 key 속성이 필수다
// 이는 리액트가 같은 컴포넌트인지를 확인하기위함인데, 고로 Key 속성에는 유니크한 값이 들어가야한다.
// 하지만 key의 속성으로 map함수의 두번 째 인자인 index를 사용하면 성능최적화에 문제가 된다.

export default NumberBaseball;