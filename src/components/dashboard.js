import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import photo from  '../photos/photo.jpg';
import { TiHome } from "react-icons/ti";
import { SiGooglemessages } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { IoIosAnalytics } from "react-icons/io";
import { FaUnlock } from "react-icons/fa6";
import { PiBellRingingDuotone } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BiSolidLike } from "react-icons/bi";
import { FaCommentDots } from "react-icons/fa6";
import { MdLocalPostOffice } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { MdRequestPage } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Youtube } from './youtube';
import { Facebook } from './facebook';
import { Insta } from './insta';
import { Twitter } from './twitter';
import {Chart} from './chart';
export const Dashboard = () => {
    const [value,setValue]=useState(0);
  return (
    <div>
        <div className='h-screen bg-fixed bg-center bg-cover dash'>
            <div className='flex h-16 p-2'>
                <div className='flex w-1/2 flex-row space-x-5 justify-center'>
                    <h1>Social</h1>
                    <div className='bg-gray-400/50  flex justify-start pl-2 items-center w-64 border rounded-[22px] h-7   text-[15px] text-black/65' >
                        <CiSearch/>   Search
                    </div>
                </div>
                <div className='flex w-1/2 flex-row space-x-4 justify-end'>
                <PiBellRingingDuotone className='h-5 w-5'/>
                <img src={photo} alt={photo}  className='rounded-full h-6 w-6'/>
                </div>
            </div>
            <div className='flex p-4'>
                <div className='flex w-1/12 h-[400px] justify-center '>
                    <div className='flex flex-col space-y-10 justify-center items-center'>
                        <div className='text-2xl text-slate-500'><TiHome /></div>
                        <div className='text-2xl text-slate-500'> <SiGooglemessages/></div>
                        <div className='text-2xl text-slate-500'>  <IoIosAnalytics/></div>
                        <div className='text-2xl text-slate-500'><CgProfile/></div>
                        <div className='text-2xl text-slate-500'><FaUnlock /></div>
                    </div>


                </div>
                <div className='flex w-9/12 h-[600px] flex-col '>
                    <div className='flex w-full h-1/2  items-center justify-center '>
                        {
                        (
                            value===0?(<><Facebook/></>) :(value===1?(<><Insta/></>):(value===3?(<><Twitter/></>):(<><Youtube/></>)))
                        )
                        }

                    </div>
                    <div className='flex w-full h-1/2 items-center justify-center'>
                            <Chart/>
                    </div>




                </div>
                <div className='flex w-2/12 h-[600px] justify-center'>
                    <div className='flex flex-col space-y-10 p-2'>
                        <button onClick={(e)=>{setValue(0)}} className='hover:shadow-cyan-500 shadow-lg shadow-black/50  p-6 h-20 items-center hover:scale-105 ease-in-out duration-300 w-[150px] rounded-[22px]  text-3xl  flex justify-center'>
                            <FaFacebook className=' text-sky-700' />
                        </button>
                        <button  onClick={(e)=>{setValue(1)}} className='hover:shadow-pink-400 shadow-lg shadow-black/50  p-6 h-20 items-center hover:scale-105 ease-in-out duration-300 w-[150px] rounded-[22px] text-3xl  flex justify-center'>
                            <FaInstagram className='text-pink-500'/>
                        </button>
                        <button  onClick={(e)=>{setValue(2)}} className='hover:shadow-rose-400 shadow-lg shadow-black/50   p-6 h-20 items-center hover:scale-105 ease-in-out duration-300 w-[150px] rounded-[22px]  text-3xl  flex justify-center'>
                            <FaYoutube className='text-red-600'/>
                        </button>
                        <button  onClick={(e)=>{setValue(3)}} className='hover:shadow-cyan-400 shadow-lg shadow-black/50  p-6 h-20 items-center hover:scale-105 ease-in-out duration-300 w-[150px] rounded-[22px] text-3xl  flex justify-center'>
                            <BsTwitter className='text-sky-500'/>
                        </button>


                    </div>

                </div>

            </div>


        </div>
    </div>
  )
}
