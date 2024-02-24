import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { BiSolidLike } from "react-icons/bi";
import { FaCommentDots } from "react-icons/fa6";
import { MdLocalPostOffice } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { MdRequestPage } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

export const Twitter = () => {
  const [details,setdeatils]=useState([{}]);
  const getdetails=async(e)=>{ 
    try {
        const response=await axios.get("https://dashboard-api-backend.onrender.com/api",{});
        // console.log(response.data[0].likes);
        setdeatils(response.data);
    } catch (error) {
        alert("An error Occured");
    }
}
useEffect(() => {
    getdetails();
  },[]);
  return (
    <div>
      <div className='p-2 grid grid-cols-4 gap-4'>
                            <div className='p-4 w-[200px] h-20 rounded-[22px] shadow-lg hover:shadow-sky-500 flex flex-col justify-center items-center'>
                               
                                <BiSolidLike size='xl' className=' text-sky-600'/>
                                <h1 className='text-xl'>{details[0].likes}</h1>
                            </div>
                            <div className='p-4 w-[200px] h-20 rounded-[22px] shadow-lg hover:shadow-sky-500 flex flex-col justify-center items-center'>
                               
                                <FaCommentDots size='xl' className=' text-sky-600'/>
                                <h1 className='text-xl'>{details[0].comments}</h1>
                            </div>
                            <div className='p-4 w-[200px] h-20 rounded-[22px] shadow-lg hover:shadow-sky-500 flex flex-col justify-center items-center'>
                               
                                <MdLocalPostOffice size='xl' className=' text-sky-600'/>
                                <h1 className='text-xl'>{details[0].posts}</h1>
                            </div>
                            <div className='p-4 w-[200px] h-20 rounded-[22px] shadow-lg hover:shadow-sky-500 flex flex-col justify-center items-center'>
                               
                                <FaUserFriends size='xl' className=' text-sky-600'/>
                                <h1 className='text-xl'>{details[0].friends}</h1>
                            </div>
                            <div className='p-4 w-[200px] h-20 rounded-[22px] shadow-lg hover:shadow-sky-500 flex flex-col justify-center items-center'>
                               
                                <MdRequestPage size='xl' className=' text-sky-600'/>
                                <h1 className='text-xl'>{details[0].requests}</h1>
                            </div>
                            <div className='col-span-2 p-4  h-20 rounded-[22px] shadow-lg hover:shadow-sky-500 flex flex-col justify-center items-center'>
                               
                                <FaUser size='xl' className=' text-sky-600'/>
                                <h1 className='text-xl'>{details[0].username}</h1>
                            </div>
                            <div className='p-4 w-[200px] h-20 rounded-[22px] shadow-lg hover:shadow-sky-500 flex flex-col justify-center items-center'>
                               
                                <FaEye size='xl' className=' text-sky-600'/>
                                <h1 className='text-xl'>{details[0].pageviews}</h1>
                            </div>
                           


      </div>

    </div>
  )
}
