import { useState } from 'react';
import './App.css'

function App() {


  let [counter, setCounter] = useState(0)
 
  //let counter = 5

  const addValue =() => {
    counter = counter+1
    setCounter(counter)
    console.log("clicked", counter);
  }

  const removeValue = () => {
    if(counter >= 1){
      counter = counter -1
      setCounter (counter)
    }
  
  }

  return (
    <>
      <h1>Learning React | Vite</h1>
      <h2>Counter value : {counter}</h2>
      <button
        onClick={addValue}
      >Add Value</button>
      <br/>
      <button
      onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
