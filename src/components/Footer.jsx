import React from 'react'

const Footer = () => {
  return (
    <footer className="flex justify-around text-xs h-20 w-screen bg-gray-200 text-gray-600 bordert-t-gray-600">
      <div className="flex my-auto">
        <button className="p-2">System Status</button>
        <div className="p-2">|</div>
        <button className="p-2">Privacy Policy</button>
        <div className="p-2">|</div>
        <button className="p-2">Terms & Conditions</button>
      </div>
      <div className="flex my-auto"> 
      Copyright © 2023 Apple Inc.<br className="sm:hidden"/> All rights reserved.

      </div>
    </footer>
  )
}

export default Footer
