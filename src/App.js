import { useState } from 'react'

//https://www.youtube.com/watch?v=n_cKSILMzmM

import * as math from 'mathjs'

import './App.css';
import Button from './components/Button'
import Input from './components/Input'

const App = () => {

  const [text, setText] = useState('')
  const [result, setResult] = useState('')

  const addToText = (val) => {
    setText((text) => [...text, val + ""])
  }

  const calculateResult = () => {
    const input = text.join("")
    setResult(Math.round(1e12 * math.evaluate(input)) / 1e12)
    setText("")
  }

  const resetInput = () => {
    setText("")
    setResult("")
  }

  const operationColor = "#6883BC"
  const numKeyColor = "#79A7D3"
  
  return (
    <div className="App">
      <div className = 'calc-wrapper'>
        < Input text = {text} result = {result}/>
        <div className = 'row'>
          <Button symbol="7" color={numKeyColor} handleClick={addToText}/>
          <Button symbol="8" color={numKeyColor} handleClick={addToText}/>
          <Button symbol="9" color={numKeyColor} handleClick={addToText}/>
          <Button symbol="/" color={operationColor} handleClick={addToText}/>
        </div>
        <div className = 'row'>
          <Button symbol="4" color={numKeyColor} handleClick={addToText}/>
          <Button symbol="5" color={numKeyColor} handleClick={addToText}/>
          <Button symbol="6" color={numKeyColor} handleClick={addToText}/>
          <Button symbol="*" color = {operationColor} handleClick={addToText}/>
        </div>
        <div className = 'row'>
          <Button symbol="1" color={numKeyColor} handleClick={addToText}/>
          <Button symbol="2" color={numKeyColor} handleClick={addToText}/>
          <Button symbol="3" color={numKeyColor} handleClick={addToText}/>
          <Button symbol="+" color = {operationColor} handleClick={addToText}/>
        </div>
        <div className = 'row'>
          <Button symbol="0" color={numKeyColor} handleClick={addToText}/>
          <Button symbol="." color={numKeyColor} handleClick={addToText}/>
          <Button symbol="=" color={numKeyColor} handleClick={calculateResult}/>
          <Button symbol="-" color = {operationColor} handleClick={addToText}/>
        </div>
        <Button symbol="Clear" color = "#8A307F" handleClick={resetInput}/>
      </div>
    </div>
  );
}

export default App;
