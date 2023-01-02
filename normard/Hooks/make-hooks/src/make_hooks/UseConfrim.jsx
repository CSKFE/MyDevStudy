import React, { useEffect, useRef, useState } from 'react';

const useConfirm = (message = '', callBack) => {
  if(typeof callBack !== 'function') return;

  const confirmAction = () => {
    if(window.confirm(message)) {
      callBack();
    }
  } 
  return confirmAction;
}

const UseConfirmComponent = () => {
  const deleteWorld = () => console.log('Delete World');
  const deleteConfirm = useConfirm('Realy?', deleteWorld);
  return (
    <>
      <h1>Hello UseConfirmComponent</h1>
      <button type='button' onClick={deleteConfirm}>confirm Button</button>
    </>
  );
};

export default UseConfirmComponent;