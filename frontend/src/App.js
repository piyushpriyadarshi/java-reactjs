import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [datedata, setDateData] = useState('');
  useEffect(() => {
    Axios.get('api/hello')
      .then(function (response) {
        console.log(response.data);
        setDateData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return <div className="App">{datedata}</div>;
}

export default App;
