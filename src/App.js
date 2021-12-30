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

  const addSqrt = (val) => {
    setText((text) => [...text, val + "("])
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

  const color = "#79A7D3"
  
  return (
    <div className="App">
      <div className = 'calc-wrapper'>
        < Input text = {text} result = {result}/>
        <div className = 'row'>
          <Button symbol="(" color={color} handleClick={addToText} />
          <Button symbol=")" color={color} handleClick={addToText} />
          <Button symbol="sqrt" color={color} handleClick={addSqrt} />
          <Button symbol="^" color={color} handleClick={addToText} />
        </div>
        <div className = 'row'>
          <Button symbol="7" color={color} handleClick={addToText}/>
          <Button symbol="8" color={color} handleClick={addToText}/>
          <Button symbol="9" color={color} handleClick={addToText}/>
          <Button symbol="/" color={color} handleClick={addToText}/>
        </div>
        <div className = 'row'>
          <Button symbol="4" color={color} handleClick={addToText}/>
          <Button symbol="5" color={color} handleClick={addToText}/>
          <Button symbol="6" color={color} handleClick={addToText}/>
          <Button symbol="*" color = {color} handleClick={addToText}/>
        </div>
        <div className = 'row'>
          <Button symbol="1" color={color} handleClick={addToText}/>
          <Button symbol="2" color={color} handleClick={addToText}/>
          <Button symbol="3" color={color} handleClick={addToText}/>
          <Button symbol="+" color = {color} handleClick={addToText}/>
        </div>
        <div className = 'row'>
          <Button symbol="0" color={color} handleClick={addToText}/>
          <Button symbol="." color={color} handleClick={addToText}/>
          <Button symbol="=" color={color} handleClick={calculateResult}/>
          <Button symbol="-" color = {color} handleClick={addToText}/>
        </div>
        <div className = "bottom-row">
        <Button symbol="Clear" color = "#8A307F" handleClick={resetInput}/>
        </div>
      </div>
    </div>
  );
}

export default App;
