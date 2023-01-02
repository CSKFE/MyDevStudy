import React, { useState } from 'react';
import AppRouter from './Router';
import firebase from '../firebase';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <AppRouter isLogin={isLogin} />
      <footer>
        &copy; Nwitter {new Date().getFullYear()}
      </footer>
    </>
  );
}

export default App;
