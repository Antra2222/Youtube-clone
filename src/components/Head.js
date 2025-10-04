import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';


const Head = () => {

  const dispatch = useDispatch();

  const toggleMunuHandler = () => {
dispatch(toggleMenu())
  }

  return (
<div className='grid grid-flow-col m-2 shadow-lg cursor-pointer'>
    <div className='flex col-span-1'>
      <img 
      onClick={() => toggleMunuHandler()}
      className='h-14' src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg" alt="menu" />
      <a href="/">
      <img className='h-14' src="https://images.icon-icons.com/2699/PNG/96/youtube_logo_icon_167938.png" alt="Youtube_logo" />
      </a>
    </div>
    <div className='col-span-10 px-10'>
        <input className=' w-1/2 border border-gray-400 p-2 rounded-l-full' type="text" />
        <button className='border border-x-gray-400 px-5 py-2 rounded-r-full bg-gray-100'>🔍</button>
    </div>
    <div className='col-span-1'>
        <img  
        className='h-8'
        src="https://static.vecteezy.com/system/resources/previews/000/550/731/original/user-icon-vector.jpg" alt="User" />
    </div>
    </div>
  )
}

export default Head
