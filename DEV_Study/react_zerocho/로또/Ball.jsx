import React, { memo } from 'react';

const Ball = memo(({ number }) => { // state를 다루지않는 컴포넌트는 단순한 함수 컴포넌트를 사용하면 좋다
  return(
    <div className='ball' style={{background: "tomato"}}>{number}</div>
  )
});

export default Ball;