import { useState, useRef } from 'react';
const React = require('react');

const WordRelay = () => {
  const [word, setWord] = useState('선규');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const input = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    if(word[word.length - 1] === value[0]) {
      setWord(value);
      setValue('');
      setResult('정답');
      input.current.focus();
    } else {
      setValue('');
      setResult('땡');
      input.current.focus();
    }
  }

  const onChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmit}>
        <label htmlFor="word-input">글자입력</label>
        <input type="text" value={value} ref={input} onChange={onChange} />
        <button>입력</button>
      </form>
      <div className="result">
        {result}
      </div>
    </>
  )
}

export default WordRelay;