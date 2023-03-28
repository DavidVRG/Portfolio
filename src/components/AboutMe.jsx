import React from 'react'

export default function AboutMe() {
    return (
        <div className='w-[90%] lg:w-[80%] xl:w-[70%] mx-auto mb-32' id="aboutme">
            <div className='flex flex-col'>
                <h3 className='text-xl font-medium border-b-2 border-[#007ced] self-start pb-2 mb-6'>About Me</h3>
                <div className='flex flex-wrap'>
                    <div className='flex md:w-[50%] gap-4 p-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 text-[#007ced] shrink-0">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>
                        <div>
                            <h4 className='text-xl font-medium mb-1'>About me</h4>
                            <div className='text-[#d5d5d5]'>I started to learn web development in 2022. I focus on the frontend, but the backend is not far from me either. My goal is to become a good full stack developer.</div>
                        </div>
                    </div>
                    <div className='flex md:w-[50%] gap-4 p-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 text-[#007ced] shrink-0">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                        <div>
                            <h4 className='text-xl font-medium mb-1'>Stacks</h4>
                            <div className='text-[#d5d5d5]'>I can make websites with vanilla HTML, CSS and Javascript, but i prefer React and Tailwind CSS. I can create a mobile app with react native, but I'm still very new to it.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
