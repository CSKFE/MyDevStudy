import React from 'react';
import Td from './Td';

const Tr = ({ rowIndex, rowData, dispatch }) => {
  return (
    <tr>
      {Array(rowData.length).fill().map((tr, i) => (<Td dispatch={dispatch}  rowIndex={rowIndex} cellIndex={i} cellData={rowData[i]} />))}
    </tr>
  );
}

export default Tr;