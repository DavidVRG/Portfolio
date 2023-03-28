import React from 'react'
import { useState } from 'react'
import { Link } from 'react-scroll'


export default function Navbar() {

    const [showMenu, setShowMenu] = useState(false)

    function closeMenu() {
        setShowMenu(false)
    }

    return (
        <div className='flex justify-between items-center p-12 mb-8' id='navbar'>
            <Link to='navbar' className='flex gap-2 items-center cursor-pointer'>
                <img src={require('../assets/logo512.png')} alt="Logo" className='w-12 h-12' />
                <h1 className='text-xl'><span className='font-bold'>David</span> <span className='font-semibold'>Varga</span></h1>
            </Link>
            <ul className='hidden md:flex gap-8 text-[#858585] font-semibold'>
                <Link to='aboutme' smooth={true} className='cursor-pointer hover:text-white transition ease-in-out duration-200'>About Me</Link>
                <Link to='stacks' smooth={true} className='cursor-pointer hover:text-white transition ease-in-out duration-200'>Stacks</Link>
                <Link to='realprojects' smooth={true} className='cursor-pointer hover:text-white transition ease-in-out duration-200'>Real Projects</Link>
                <Link to='projects' smooth={true} className='cursor-pointer hover:text-white transition ease-in-out duration-200'>My Projects</Link>
                <Link to='contact' smooth={true} className='cursor-pointer hover:text-white transition ease-in-out duration-200'>Contact</Link>
            </ul>
            <div className='flex md:hidden'>
                <svg 
                onClick={() => setShowMenu(prevState => !prevState)}
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="relative w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
                {showMenu && (
                    <ul className='absolute flex flex-col top-24 right-16 gap-2 text-[white] bg-[#292929] rounded-md shadow-md p-4 w-[200px] text-center font-semibold'>
                        <Link to='aboutme' smooth={true} onClick={closeMenu} className='cursor-pointer py-2'>About Me</Link>
                        <Link to='stacks' smooth={true} onClick={closeMenu} className='cursor-pointer py-2'>Stacks</Link>
                        <Link to='realprojects' smooth={true} onClick={closeMenu} className='cursor-pointer py-2'>Real Projects</Link>
                        <Link to='projects' smooth={true} onClick={closeMenu} className='cursor-pointer py-2'>My Projects</Link>
                        <Link to='contact' smooth={true} onClick={closeMenu} className='cursor-pointer py-2'>Contact</Link>
                    </ul>
                )}
            </div>
        </div>
    )
}
