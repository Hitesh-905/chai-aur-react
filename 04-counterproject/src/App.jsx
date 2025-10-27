import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useState } from 'react';

function App() {
 let [counter,setCounter]=useState(0);
 function addValue(){
  if(counter>=20) return;
  else setCounter(counter+1)
 }
 function decreaseValue (){
  if(counter<=0) return(alert("Hello! Value cannot be decrease to negative"))
  else setCounter(counter - 1)
  
 }
  return (
    <>
    <h1>Hitesh Aur React</h1>
    <button onClick={addValue}>Add Value : {counter}</button>
    <br/>
    <button onClick={decreaseValue}>Decrease Value : {counter}</button>
     <br/>
     <p>Footer : {counter}</p>
    </>
     
  )
}

export default App
