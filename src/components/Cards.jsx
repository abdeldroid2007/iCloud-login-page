import React from 'react'
import icloud2tb from '.././assets/2tb.png'
import icon from '.././assets/icons.png'

const Cards = () => {

  return (
    <div className="flex flex-col sm:flex-row mx-auto sm:justify-around gap-10 sm:gap-20 mt-12 mb-12 sm:p-36" >       
         <div className="w-[20rem] sm:w-[40rem] sm:h-[40rem] rounded-3xl bg-white shadow-2xl grid grid-cols-1 text-center p-10">
           <div className="flex justify-center sm:h-72 sm:p-16 p-4">
             <img src={icon} alt="icon" className="h-20 sm:h-auto"/>
           </div>
             <header className="text-left text-3xl pt-2">Easily access apps and data from your iPhone on the web</header>
             <p className="text-justify pt-5 pb-10">iCloud is essential for keeping personal information from your devices safe, up to date, and available wherever you are. At iCloud.com, you can access your photos, files, and more from any web browser. Changes you make will sync to your iPhone and other devices, so you’re always up to date.</p>
           </div>
           
         <div className="w-[20rem] sm:w-[40rem] px-auto sm:h-[40rem] rounded-3xl bg-white shadow-2xl grid grid-cols-1 text-center p-10">
          <div className=" flex justify-center sm:h-72 sm:p-16 p-4">
             <img src={icloud2tb} alt="icloud+" className="h-20 sm:h-auto"/>
           </div>
             <header className="text-left text-3xl pt-2">Easily access apps and data from your iPhone on the web</header>
             <p className="text-justify pt-5 pb-10">Upgrade to iCloud+ to get more storage and additional features like iCloud Private Relay, Hide My Email, and HomeKit Secure Video. You can even share your subscription with your family. Learn more at <a href="https://www.apple.com/icloud/">apple.com/icloud.</a></p>
           </div>
           
    </div>
  )
}

export default Cards
