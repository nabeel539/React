/* eslint-disable no-unused-vars */

import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8)

  const [numberAllowed, setNumberAllowed] = useState(false)
  
  const[charAllowed, setCharAllowed] = useState(true)

  const[password, setPassword] = useState("")


  // useRef hoof
  const passwordRef = useRef(null)


  // useCall back -> Memorisation
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789" // short Hand
    if (charAllowed) str += "!@#$%^&*-_+={}[]~`" // short Hand

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random()* str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length,numberAllowed,charAllowed,setPassword])

  useEffect(() => {passwordGenerator()}, [length, numberAllowed,charAllowed, passwordGenerator])


  const copyPasswordToClipboard = useCallback(()=> {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,9);
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
      <div className='text-center bg-slate-800 p-4 rounded-xl text-zinc-200 shadow-md'>
        Password Generator

        <div className='flex shadow-md rounded-lg overflow-hidden mb-4'>
        <input
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3  rounded-r-none rounded-l-xl text-sky-700'
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
        <button 
        onClick={copyPasswordToClipboard}
          className='outline-none bg-sky-700 text-white px-3 shrink-0 hover:bg-sky-900'
          >Copy</button>
      </div>
      <div className='flex text-sm gap-x-7 '>
        <div className='flex items-center gap-x-1 text-sky-400'>
          <input
            type='range'
            min={8}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length : {length}</label>
      
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={()=>{
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor='characterInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={charAllowed}
            id='characterInput'
            onChange={()=>{
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor='characterInput'>Character</label>
        </div>
        </div>
       
      </div>
     
    </>
  
  )
}

export default App
