
import { useState } from 'react'
import './App.css'

function App() {
  
  const [color, setColor] = useState("red")

  return (
    <div className='w-96 h-96 duration-200 border-solid border-2 border-sky-500' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
          <button
          onClick={() => setColor("red")}
          className='outline-none px-4 py-1 rounded-full shadow-lg'
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("Green")}
          className='outline-none px-4 py-1 rounded-full shadow-lg'
          style={{backgroundColor: "Green"}}
          >Green</button>
          <button
          onClick={() => setColor("Blue")}
          className='outline-none px-4 py-1 rounded-full shadow-lg'
          style={{backgroundColor: "Blue"}}
          >Blue</button>
          <button
          onClick={() => setColor("Yellow")}
          className='outline-none px-4 py-1 rounded-full shadow-lg'
          style={{backgroundColor: "Yellow"}}
          >Yellow</button>
          <button
          onClick={() => setColor("gray")}
          className='outline-none px-4 py-1 rounded-full shadow-lg'
          style={{backgroundColor: "gray"}}
          >Gray</button>
          <button
          onClick={() => setColor("White")}
          className='outline-none px-4 py-1 rounded-full shadow-lg'
          style={{backgroundColor: "White"}}
          >White</button>
          <button
          onClick={() => setColor("Black")}
          className='outline-none px-4 py-1 rounded-full shadow-lg'
          style={{backgroundColor: "Black"}}
          >Black</button>
          <button
          onClick={() => setColor("Purple")}
          className='outline-none px-4 py-1 rounded-full shadow-lg'
          style={{backgroundColor: "Purple"}}
          >Purple</button>
        </div>
      </div>
    </div>
  )
}

export default App


