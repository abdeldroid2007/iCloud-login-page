import React, { useState } from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'

const Navbar = () => {

  const [state, setState] = useState(false)

  function handleSet() {
    setState(true)
  }
  function handleUnset() {
    setState(false)
  }

  return (
    <nav className="flex h-12 justify-between px-4 items-center" onClick={handleUnset}>
      <div className="text-2xl">
        iCloud
      </div>

      <div className="text-2xl bg-green-400 cursor-pointer" onClick={handleSet}>
        <HiDotsHorizontal />
        { state === true ? <div>TAk</div> : ''}
      </div>
      
      

    </nav>
  )
}

export default Navbar
