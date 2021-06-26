import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// var count = 0
function App() {
  const State = useState()
  console.log(State)
  const [count, setCount] = useState(0)

  const IncNum = () =>{
    setCount(count + 1)
    console.log(count)
  }
  return (
    <>
    <h1>{count}</h1>
    <button onClick={IncNum}>Click Me</button>
    </>
  );
}

export default App;
