import React, { useState } from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'
import { BsApple } from 'react-icons/bs'

import Home from './components/Home'

function App() {

  
  const [state, setState] = useState(false)

  function handleSet() {
    if (state === true) {
      setState(false)
    } else setState(true)
  }
  function handleUnset() {
    setState(false)
  }

  return (
    <div className="bg-gray-100 w-full h-screen block overflow-x-hidden " >
      <nav className="flex absolute h-100 justify-between px-4 py-2 bg-transparent decoration-transparent backdrop-blur-lg w-screen">

        <div className="flex text-xl bold items-center">
          <BsApple style={{ color: "gray"}}/>
            iCloud
          </div>
        <div className="text-2xl cursor-pointer rounded-lg" onClick={handleSet}>
          <HiDotsHorizontal />
          { state === true ? <div className="absolute shadow-2xl right-4 top-8 w-48 h-8 bg-transparent text-base text-blue-400 border border-gray-300 py-5 px-4 flex justify-center items-center rounded-2xl">iCloud User Guide</div> : ''}
        </div>

      </nav>
      
      <div className="mt-12">
        <Home />
      </div>
      
    </div>
  )
}

export default App
