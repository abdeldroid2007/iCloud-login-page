import React from 'react'
import icloud2tb from '.././assets/2tb.png'
import icon from '.././assets/icons.png'

const Cards = () => {

  return (
    <div className="flex justify-around mt-12 mb-12 p-36" >       
         <div className="w-[40rem] h-[40rem] rounded-3xl bg-white shadow-2xl grid grid-cols-1 text-center p-10">
           <div className=" flex justify-center h-72 p-16">
             <img src={icon} alt="icons"/>
           </div>
             <header className="text-left text-3xl pt-2">Easily access apps and data from your iPhone on the web</header>
             <p className="text-justify pt-5 pb-10">iCloud is essential for keeping personal information from your devices safe, up to date, and available wherever you are. At iCloud.com, you can access your photos, files, and more from any web browser. Changes you make will sync to your iPhone and other devices, so you’re always up to date.</p>
           </div>
           
         <div className="h-[40rem] w-[40rem] rounded-3xl bg-white shadow-2xl grid grid-cols-1 text-center p-10">
         <div className=" flex justify-center h-72 p-4">
             <img src={icloud2tb} alt="icloud+"/>
           </div>
             <header className="text-left text-3xl pt-2">Easily access apps and data from your iPhone on the web</header>
             <p className="text-justify pt-5 pb-10">iCloud is essential for keeping personal information from your devices safe, up to date, and available wherever you are. At iCloud.com, you can access your photos, files, and more from any web browser. Changes you make will sync to your iPhone and other devices, so you’re always up to date.</p>
           </div>
           
    </div>
  )
}

export default Cards
