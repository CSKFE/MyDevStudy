const React = require('react');
const { useState, useRef } = React;
const formStyle = {
  borderColor:'tomato',
  borderRadius:'3px',
  outLine:'none',
  background:'none',
}

const Gugudan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const ref = useRef(null);
  const onChangeInput = (e) => {
    setValue(e.target.value);
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    if(parseInt(value) === first * second) {
          setResult(`정답 ${value}`);
          setFirst(Math.ceil(Math.random() * 9));
          setSecond(Math.ceil(Math.random() * 9));
          setValue('');
          ref.current.focus();
        } else {
          setResult(`땡 ${value}`);
          setValue('');
          ref.current.focus();
    }
  }
  console.log('render');
  return (
    <>
      <div>{first} 곱하기 {second} 는?</div>
      <form onSubmit={onSubmitForm}>
        <input ref={ref} onChange={onChangeInput} value={value} type="number" />
        <button>제출</button>
      </form>
      <div id="result">{result}</div>
    </>
  );
}

module.exports = Gugudan;