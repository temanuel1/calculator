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

  const addPar = (val) => {
    setText((text) => [...text, val + "("])
  }

  const addPi = () => {
    setText((text) => [...text, "pi" + ""])
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
          <Button className = "button" symbol=" deg" color={color} handleClick={addToText} />
          <Button className = "button" symbol="(" color={color} handleClick={addToText} />
          <Button className = "button" symbol=")" color={color} handleClick={addToText} />
          <Button className = "button" symbol="sqrt" color={color} handleClick={addPar} />
          <Button className = "button" symbol="^" color={color} handleClick={addToText} />
        </div>
        <div className = 'row'>
          <Button className = "button" symbol="sin" color={color} handleClick={addPar} />
          <Button className = "button" symbol="7" color={color} handleClick={addToText}/>
          <Button className = "button" symbol="8" color={color} handleClick={addToText}/>
          <Button className = "button" symbol="9" color={color} handleClick={addToText}/>
          <Button className = "button" symbol="/" color={color} handleClick={addToText}/>
        </div>
        <div className = 'row'>
          <Button className = "button" symbol="cos" color={color} handleClick={addPar} />
          <Button className = "button" symbol="4" color={color} handleClick={addToText}/>
          <Button className = "button" symbol="5" color={color} handleClick={addToText}/>
          <Button className = "button" symbol="6" color={color} handleClick={addToText}/>
          <Button className = "button" symbol="*" color = {color} handleClick={addToText}/>
        </div>
        <div className = 'row'>
          <Button className = "button" symbol="tan" color={color} handleClick={addPar} />
          <Button className = "button" symbol="1" color={color} handleClick={addToText}/>
          <Button className = "button" symbol="2" color={color} handleClick={addToText}/>
          <Button className = "button" symbol="3" color={color} handleClick={addToText}/>
          <Button className = "button" symbol="+" color = {color} handleClick={addToText}/>
        </div>
        <div className = 'row'>
          <Button className = "button" symbol="log" color={color} handleClick={addPar} />
          <Button className = "button" symbol="π" color={color} handleClick={addPi} />
          <Button className = "button" symbol="0" color={color} handleClick={addToText}/>
          <Button className = "button" symbol="." color={color} handleClick={addToText}/>          
          <Button className = "button" symbol="-" color = {color} handleClick={addToText}/>
        </div>
        <div className = "bottom-row">
        <Button className = "button" symbol="Clear" color = "#8A307F" handleClick={resetInput}/>
        <Button className = "button" symbol="=" color="#6883BC" handleClick={calculateResult}/>
        </div>
      </div>
    </div>
  );
}

export default App;
