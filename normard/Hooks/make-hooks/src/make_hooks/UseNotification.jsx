import React, { useEffect, useState, useRef } from 'react';

const useNotification = (title, options) => {
  if(!(Notification in window)) { return; }
  
  const fireNotifi = () => {
    if(Notification.permission !== 'granted') {
      Notification.requestPermission().then(permission => {
        if(permission === "granted") {
          new Notification(title, options)
        } else {
          return;
        }
      }); 
    } else {
      new Notification(title, options);
    }
  }

  return fireNotifi;
}

const UseNotificationComponent = () => {
  const triggerNotifi = useNotification("Can I steal your GF", {body: "GF"});

  return (
    <>
      <h1>Hello UseNotificationComponent</h1>
      <button type='button' onClick={triggerNotifi}>Notification</button>
    </>
  );
};

export default UseNotificationComponent;