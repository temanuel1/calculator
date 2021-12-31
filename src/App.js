import { useState } from 'react'
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
    setText((text) => [...text, "pi"])
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

  const color1 = "#1e008c"
  const color2 = '#2d0ca8'
  const color3 = '#3e1ac7'
  const color4 = '#5631e0'
  const color5 = '#7854ff'
  
  return (
    <div className="App">
      <div className = 'calc-wrapper'>
        < Input text = {text} result = {result}/>
        <div className = 'row'>
          <Button className = "button" symbol=" deg" color={color1} handleClick={addToText} />
          <Button className = "button" symbol="(" color={color1} handleClick={addToText} />
          <Button className = "button" symbol=")" color={color1} handleClick={addToText} />
          <Button className = "button" symbol="sqrt" color={color1} handleClick={addPar} />
          <Button className = "button" symbol="^" color={color1} handleClick={addToText} />
        </div>
        <div className = 'row'>
          <Button className = "button" symbol="sin" color={color2} handleClick={addPar} />
          <Button className = "button" symbol="7" color={color2} handleClick={addToText}/>
          <Button className = "button" symbol="8" color={color2} handleClick={addToText}/>
          <Button className = "button" symbol="9" color={color2} handleClick={addToText}/>
          <Button className = "button" symbol="/" color={color2} handleClick={addToText}/>
        </div>
        <div className = 'row'>
          <Button className = "button" symbol="cos" color={color3} handleClick={addPar} />
          <Button className = "button" symbol="4" color={color3} handleClick={addToText}/>
          <Button className = "button" symbol="5" color={color3} handleClick={addToText}/>
          <Button className = "button" symbol="6" color={color3} handleClick={addToText}/>
          <Button className = "button" symbol="*" color = {color3} handleClick={addToText}/>
        </div>
        <div className = 'row'>
          <Button className = "button" symbol="tan" color={color4} handleClick={addPar} />
          <Button className = "button" symbol="1" color={color4} handleClick={addToText}/>
          <Button className = "button" symbol="2" color={color4} handleClick={addToText}/>
          <Button className = "button" symbol="3" color={color4} handleClick={addToText}/>
          <Button className = "button" symbol="+" color = {color4} handleClick={addToText}/>
        </div>
        <div className = 'row'>
          <Button className = "button" symbol="log" color={color5} handleClick={addPar} />
          <Button className = "button" symbol="π" color={color5} handleClick={addPi} />
          <Button className = "button" symbol="0" color={color5} handleClick={addToText}/>
          <Button className = "button" symbol="." color={color5} handleClick={addToText}/>          
          <Button className = "button" symbol="-" color = {color5} handleClick={addToText}/>
        </div>
        <div className = "bottom-row">
        <Button className = "button" symbol="Clear" color = "#9275ff" handleClick={resetInput}/>
        <Button className = "button" symbol="=" color="#9275ff" handleClick={calculateResult}/>
        </div>
      </div>
    </div>
  );
}

export default App;