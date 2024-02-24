import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
export const Signup = () => {
  const navigate=useNavigate();
  const [username,setUsername]=useState("");
  const [password,setPassword]= useState("");
  const [email,setEmail]= useState("");
  const handleSubmit=async(event)=>{
    event.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/user/", {
        name: username,
        email:email,
        password: password,
      });
      navigate("/login");
    } catch (error) {
      alert("Error");
    }
  };
  return (
    <div>
    <div className='flex w-full h-12 bg-black  fixed'>
        <div className='flex w-2/5 items-center justify-center'>
            <h1 className='text-2xl font-[Poppins] text-white ml-3 '> Dashboard App</h1>
        </div>
       
        <div className='flex  flex-row w-3/5  justify-center space-x-6 items-center pl-8' >
            <button className='text-black bg-rose-500 h-8 rounded-lg px-8 hover:scale-105 duration-300'><Link to="/login">Login</Link></button>
            <button className='text-black bg-rose-500 h-8 rounded-lg px-8 hover:scale-105 duration-300' ><Link to="/signup">SignUp</Link></button>
        </div>
    </div>
    <div className="bg-red-600/50">
      <div className='container mx-auto  flex items-center h-screen '>
        <div className='mx-auto flex h-[550px] w-[1140px]  overflow-hidden shadow-black shadow-2xl rounded-lg'>
          <div className='flex flex-row h-full w-1/2 justify-center items-center bg-center bg-cover bg-no-repeat signup'>
          
            <div className='flex justify-center space-x-4 items-end h-full mb-20 md:w-[75%] my-6'>
            <FaFacebookSquare  size={20} className='fill-white' />
            <FaInstagram size={20} className='fill-white'/>
            <FaTwitterSquare size={20} className='fill-white'/>
            <FaGithubSquare size={20} className='fill-white'/>
            <FaDribbbleSquare size={20} className='fill-white' />
            </div>
            </div>
          
          <div className='flex flex-row h-full w-1/2 justify-center bg-white'>
          <div className='flex flex-col '> 
              <h1 className='text-4xl py-16  text-center'>S I G N - U P</h1>
              <div className='flex flex-col py-6 space-y-10 place-items-center'>
                <input onChange={(event)=>{setUsername(event.target.value)}}  className=" w-96 p-2 text-center font-semibold bg-black rounded-full  text-white" placeholder='Username' value={username}/>
                <input onChange={(event)=>{setEmail(event.target.value)}}  className=" w-96 p-2 text-center font-semibold bg-black rounded-full  text-white" placeholder='Email' value={email}/>
                <input onChange={(event)=>{setPassword(event.target.value)}}  className=" w-96 p-2 text-center font-semibold bg-black  rounded-full text-white " placeholder='Password' value={password}/>
              </div>
              <p className='text-sm text-center '>By Clicking Signup you agree to our terms of use and Privacy Policy</p>
              <div className='flex justify-center w-full'>
              <button onClick={handleSubmit} className='hover:shadow-lg shadow-black hover:scale-105 duration-300 shadow-lg hover:shadow-rose-400 p-2 mt-8 bg-rose-500 w-48 rounded-full text-xl font-semibold' >Submit</button>
              </div>
              <div className='flex items-end mt-16 justify-end'>
              {/* <span> If not Have a Account |  <Link to="http://localhost:3000/signup" className='text-cyan-600'> Create  here</Link></span> */}
              </div>
            </div>
           
      
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
