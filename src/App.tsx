import React, { useState } from 'react';
import './App.css';

// eslint-disable-next-line
export default function App() {
  const [value, setValue] = useState<number>(0);

  const incHandler = () => {
    setValue(value + 1);
  };

  const setLocalStorage = () => {
    localStorage.setItem('counterValue', JSON.stringify(value));
  };

  const getLocalStorage = () => {
    const valueAsString = localStorage.getItem('counterValue');
    if (valueAsString) {
      const newValue = JSON.parse(valueAsString);
      setValue(newValue);
    }
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    setValue(0);
  };

  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={incHandler}>Inc</button>
      <button onClick={setLocalStorage}>Set to LS</button>
      <button onClick={getLocalStorage}>Get from LS</button>
      <button onClick={clearLocalStorage}>Clear LS</button>
    </div>
  );
}
