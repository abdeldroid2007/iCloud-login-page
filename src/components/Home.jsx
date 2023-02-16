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
    <div className="grid grid-cols-1 items-center text-center">
      {sign != true ? (
        <div>
          <div className="flex justify-center">
           <img src={cloud_logo} className="w-96 h-96 it" />
          </div>

          <div className="sm:px-[45rem] px-[20rem]">
            <h4 className="text-9xl bold">iCloud</h4>
            <div className="flex justify-center">
              <button className="rounded-3xl py-2 px-4 text-white text-2xl bold bg-black mt-10" onClick={handleSignUp}>Sign in</button>
            </div>
            <p className="text-4xl bold mt-10">The best place for all your photos, files, notes, mail, and more.</p>
          </div>
        </div>
      ) : (
          <div className="justify-self-center mr-4">
            
          <div className="border-gray-400 border w-[40rem] h-[45rem] grid grid-cols-1 items-center text-center rounded-2xl my-10 shadow-2xl shadow-black">
              
            <div className="flex justify-center ">
              <img src={apple} className="w-48 h-48 m-8" />
            </div>
              
              <div className="grid grid-cols-1 mx-auto">
                
                <h4 className="text-4xl bold">Sign in with Apple Id</h4>
                <form className="w-96 h-12 flex justify-between items-center text-center mt-10 shadow border border-gray-400 rounded-lg px-4 border-transparent focus:border-blue-400">
                  <input className=" rounded-lg text-gray-700 bg-gray-100 focus:outline-none focus:shadow-outline" type="text" placeholder="Apple ID"/>
                  <button type="button" className="text-gray-400 rounded-lg" onClick={password}><BsArrowRightCircle size={30}/></button>
                </form>
                  {dropdown === true ? (
                  <form className="absolute mt-32 w-96 h-12 flex justify-between items-center text-center border-t-0 shadow border border-gray-400 rounded-lg px-4 border-transparent focus:border-blue-400">
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
              <button className="mb-36 text-blue-500">Create Apple ID</button>
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
