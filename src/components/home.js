import React from 'react'
import {Link} from 'react-router-dom'
export const Home = () => {
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
       <div className='flex items-center justify-center mb-12 h-screen bg-fixed bg-center bg-cover custom-img'>
                <div className=' bg-black/40 '/>
                <div className=' p-5 text-white z-[2]  mt-[-10rem]'>
                    <h2 className='text-5xl font-bold hover:scale-105 duration-300'>Social Media Dashboard </h2> 
                    <p className='py-5 text-xl hover:scale-105 duration-300'>Keeping People closer...💌 </p>
                    
                    <button 
                     className="p-4 text-xl font-semibold text-black px-16 border-4 border-white rounded-md ml-8 shadow-lg hover:scale-105 duration-300 hover:shadow-white  ">
                       Enter 
                    </button>

                </div>
                
            </div>
    </div>
  )
}
