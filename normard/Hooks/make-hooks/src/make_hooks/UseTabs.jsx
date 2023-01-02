import React, { useState } from 'react';
const content = [
  {
    tab: 'content1',
    content: 'section1'
  },
  {
    tab: 'content2',
    content: 'section2'
  },
];

const useTabs = (initialTab, allTab) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  if(!allTab || !Array.isArray(allTab)) {
    return;
  }

  return {
    currentItem: allTab[currentIndex],
    changeItem: setCurrentIndex
  }
}

const UseTabsComponent = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  
  return (
    <>
      <h1>Hello UseTabs</h1>
      <div>
        {content.map((v, i) => <button onClick={() => changeItem(i)}>{v.tab}</button>)}
      </div>
      <div>
        <p>
          {currentItem.tab}
        </p>
        <p>
          {currentItem.content}
        </p>
      </div>
    </>
  );
};

export default UseTabsComponent;