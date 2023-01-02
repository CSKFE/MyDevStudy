import React, { useState, useEffect } from 'react';

const UseTitle = (initialValue) => {
  const [title, setTitle] = useState(initialValue);

  const updator = () => {
    const htmltitle = document.querySelector('title');
    htmltitle.innerText = title;
  };

  useEffect(updator, [title]);

  return setTitle;
}

const UseTitleComponent = () => {
  const titleUpdator = UseTitle('Hello React!');
  setTimeout(() => titleUpdator('title Change'), 3000);
  return (
    <>
      <h1>Hello UseTitle</h1>
    </>
  );
};

export default UseTitleComponent;