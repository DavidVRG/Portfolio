import React from 'react'
import { Link } from 'react-scroll'

export default function Header() {
  return (
    <div className='flex flex-col mb-36 text-center md:text-start md:flex-row items-center justify-center gap-12 w-[90%] lg:w-[80%] xl:w-[50%] mx-auto' id='header'>
      <div className='shrink-0'>
        <img src={require('../assets/profile.jpg')} alt="Profile" className='w-[250px] h-[250px] md:w-[357px] md:h-[357px] object-cover rounded-full
      border-[15px] border-[#444444] shadow-2xl' />
      </div>
      <div>
        <div className='text-[#aaa] mb-3'>Frontend Developer</div>
        <h2 className='text-5xl font-bold drop-shadow-xl mb-3'>David Varga</h2>
        <div className='text-[#d5d5d5] font-semibold mb-8'>
          My name is David Varga and i am living in Hungary, I am 21 years old and i am self taught as a web developer. This is my Portfolio that i created with React and Firebase.
        </div>
        <div>
          <Link to='projects' smooth={true} className='bg-[#333] cursor-pointer hover:bg-[#007ced] transition ease-in-out duration-200 py-3 px-5 rounded-3xl font-medium m-1 border-2 border-[#007ced]'>My Projects</Link>
          <Link to='contact' smooth={true} className='bg-[#333] cursor-pointer hover:bg-white hover:text-[#333] transition ease-in-out duration-200 py-3 px-7 rounded-3xl font-medium m-1 border-2 border-white'>Contact</Link>

        </div>
      </div>
    </div>
  )
}
