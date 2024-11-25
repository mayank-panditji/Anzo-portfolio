import React from 'react'
import 'remixicon/fonts/remixicon.css'
const Header = () => {
  return (
    <div className='absolute w-full z-10  px-4  py-20 flex justify-end'>
      <button className='bg-black  rounded-full border-4 text-xl px-6 py-2 hover:bg-gray-500' >Hire me</button>
      <i className="ri-more-2-fill text-4xl ml-3 py-2"></i>
    </div>
  )
}

export default Header
