import React, { memo } from 'react';

const Winner = memo(({ winner }) => {
  return (
    <p>{winner} 님의 승리!</p>
  );
});

export default Winner