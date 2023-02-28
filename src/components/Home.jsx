import React, { useState } from 'react'
import cloud_logo from '.././assets/cloud_logo.svg'
import apple from '.././assets/apple.svg'
import {BsArrowRightCircle} from 'react-icons/bs'
import Cards from './Cards'
import Footer from './Footer'
const Home = () => {

  const [sign, setSign] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  function handleSignUp() {
    if (sign === true) {
      setSign(false)
      console.log("handlesiognup")

    } else setSign(true)
  }

  function password(e) {
    if (dropdown === true) {
      setDropdown(false)
      e.preventDefault();
    } else setDropdown(true)
  }

  return (
    <div className="grid grid-cols-1 items-center text-center ">
      {sign != true ? (
        <div className="flex flex-col justify-center px-10 my-10 sm:my-0">
           <img src={cloud_logo} className="sm:w-96 sm:h-96 w-60 mx-auto" />    
            <h4 className="sm:text-9xl text-8xl bold">iCloud</h4>
            <button className="rounded-3xl py-2 px-4 text-white text-4xl bold bg-black mt-10 w-fit mx-auto" onClick={handleSignUp}>Sign in</button>
            <p className="text-4xl bold mt-10">The best place for all your photos, files, notes, mail, and more.</p>
        </div>
      ) : (
          <div className="flex flex-col justify-center mx-auto">
            
          <div className="grid grid-cols-1 border-gray-400 border w-[20rem] sm:w-[40rem] sm:h-[45rem]  items-center text-center rounded-2xl my-10 shadow-2xl shadow-black">             
              <img src={apple} className="w-48 h-48 m-8 mx-auto" />
                          
              <div className="grid grid-cols-1 mx-auto">
                
                <h4 className="sm:text-4xl text-2xl bold">Sign in with Apple Id</h4>
                <form className="w-full h-12 flex justify-between items-center text-center mt-10 shadow border border-gray-400 rounded-lg px-4 border-transparent focus:border-blue-400">
                  <input className=" rounded-lg text-gray-700 bg-gray-100 focus:outline-none focus:shadow-outline" type="text" placeholder="Apple ID"/>
                  <button type="button" className="text-gray-400 rounded-lg" onClick={password}><BsArrowRightCircle size={30}/></button>
                </form>
                  {dropdown === true ? (
                  <form className="w-full h-12 flex justify-between items-center text-center border-t-0 shadow border border-gray-400 rounded-lg px-4 border-transparent focus:border-blue-400">
                    <input className="rounded-lg text-gray-700 bg-gray-100 focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"/>
                    <button type="button" className="text-gray-400 rounded-lg" onClick={handleSignUp}><BsArrowRightCircle size={30}/></button>
                  </form>
                ) : (null)}
                

              <div className="flex justify-center mt-16">              
                <input type="checkbox"></input>
                <p className="pl-2">Keep me signed in</p>
                </div>
                
              <div className="border justify-self-center border-b-gray-200 w-60 my-4" />

              <button className="mb-2 text-blue-500 hover:underline decoration-blue-500">Forgot Apple ID or password?</button>
              <button className="sm:mb-36 mb-10 text-blue-500">Create Apple ID</button>
            </div>
          

          
            </div>
            
      </div>
      )}

      {sign != true ? <Cards /> : null}

      {sign != true ? <div><Footer /></div> : <div className="absolute bottom-0 x-10"><Footer /></div>}


    </div>
  )
}

export default Home
