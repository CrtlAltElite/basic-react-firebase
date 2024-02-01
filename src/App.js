// src/App.js

import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
import { auth } from './firebase-config';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <div className="App">
      {currentUser ? (
        <div>
          <h1>Welcome, {currentUser.email}</h1>
          <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>
      ) : (
        <>
          <Login />
          <Register />
        </>
      )}
    </div>
  );
}

export default App;
