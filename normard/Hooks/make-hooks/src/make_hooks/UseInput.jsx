import React, { useState } from 'react';

const useInput = (initialValue, vaildator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    const {
      target: { value }
    } = e;
    let willUpdate = true;
    if(typeof vaildator === 'function') {
      willUpdate = vaildator(value);
    }
    if(willUpdate) {
      setValue(value);
    }
  }

  return { value, onChange };
};

const UseInputComponent = () => {
  const maxLength = (value) => !value.includes('@');
  const name = useInput('Mr.', maxLength);
  return (
    <>
      <h1>Hello UseInput</h1>
      <input type="text" placeholder='Name' {...name}/>
    </>
  )
};

export default UseInputComponent;