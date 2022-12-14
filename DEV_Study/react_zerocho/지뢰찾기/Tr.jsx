import React, { useContext } from 'react';
import { TableContext } from './MineSearch';
import Td from './Td';

const Tr = ({ rowIndex }) => {
  const { tableData } = useContext(TableContext);
  return (
    <tr>
      {tableData[0] && Array(tableData.length).fill().map((v, i) => (<Td rowIndex={rowIndex} cellIndex={i} />))}
    </tr>
  );
}

export default Tr;