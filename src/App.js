import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom';
import MyComponent from './auth';

const opts = {
  method: 'POST'

}

function App() {
  const [s, hi] = useState(false)
  return (
    <div className="App">
      <Router>

        <div>
        {
          s
          ?
         <MyComponent />
        :
        <a href="http://localhost:4000/auth/facebook">Sign in with Facebook</a>
        }
        </div>
      </Router>
    </div>
  );
}

export default App;
