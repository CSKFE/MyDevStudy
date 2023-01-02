import React from 'react';

const usePreventLeave = () => {
  const listener = (e) => {
    e.preventDefault();
    e.returnValue = '';
  }
  const enablePrevent = () => {window.addEventListener('beforeunload', listener)};
  const disablePrevent = () => {window.removeEventListener('beforeunload', listener)};
  return { enablePrevent, disablePrevent };
}

const UsePreventLeaveComponent = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <>
      <h1>Hello UsePreventLeaveComponent</h1>
      <button type='button' onClick={enablePrevent}>enable</button>
      <button type='button' onClick={disablePrevent}>disable</button>
    </>
  );
};

export default UsePreventLeaveComponent;