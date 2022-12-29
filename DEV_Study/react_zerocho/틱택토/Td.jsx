import React, { useCallback,useEffect, useRef ,memo } from 'react';
import { CLICK_CELL } from './Tictacto';

const Td = memo(({ cellIndex, rowIndex, dispatch, cellData }) => {
  const ref = useRef([]);
  const onClickTd = useCallback(() => {
    if(cellData) {
      return;
    }
    dispatch({type: CLICK_CELL, row: rowIndex, cell: cellIndex});
  }, [cellData]);

  useEffect(() => {
    console.log(ref.current[0] === rowIndex, ref.current[1] === cellIndex, ref.current[2] === cellData, ref.current[3] === dispatch);
    ref.current = [rowIndex, cellIndex, cellData, dispatch];
    console.log(ref.current[2]);
    console.log(cellData);
  },[cellIndex, cellData, rowIndex, dispatch])

  return (
    <td onClick={onClickTd}>{cellData}</td>
  )
});

export default Td;