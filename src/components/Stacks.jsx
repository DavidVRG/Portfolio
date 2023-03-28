import React from 'react'
import { ReactComponent as Html } from '../assets/html.svg'
import { ReactComponent as Css } from '../assets/css.svg'
import { ReactComponent as Javascript } from '../assets/javascript.svg'
import { ReactComponent as Nodejs } from '../assets/nodejs.svg'
import { ReactComponent as Mongodb } from '../assets/mongodb.svg'
import { ReactComponent as Firebase } from '../assets/firebase.svg'
import { ReactComponent as ReactLogo } from '../assets/react.svg'

export default function Stacks() {
    return (
        <div className='w-[90%] lg:w-[80%] xl:w-[70%] mx-auto mb-32' id='stacks'>
            <div className='flex flex-col'>
                <h3 className='text-xl font-medium border-b-2 border-[#007ced] self-start pb-2 mb-12'>Stacks</h3>
                <div className='flex flex-wrap justify-center gap-8'>
                    <div className='bg-[#333] hover:bg-[#424242] transiton ease-in-out duration-200 rounded-md shadow-md border-[2px] border-[#444] text-center py-4 px-6'>
                        <Html />
                        <div className='font-medium mt-2'>HTML</div>
                    </div>
                    <div className='bg-[#333] hover:bg-[#424242] transiton ease-in-out duration-200 rounded-md shadow-md border-[2px] border-[#444] text-center py-4 px-6'>
                        <Css />
                        <div className='font-medium mt-2'>CSS</div>
                    </div>
                    <div className='bg-[#333] hover:bg-[#424242] transiton ease-in-out duration-200 rounded-md shadow-md border-[2px] border-[#444] text-center py-4 px-6'>
                        <Javascript />
                        <div className='font-medium mt-2'>Javascript</div>
                    </div>
                    <div className='bg-[#333] hover:bg-[#424242] transiton ease-in-out duration-200 rounded-md shadow-md border-[2px] border-[#444] text-center py-4 px-6'>
                        <Nodejs />
                        <div className='font-medium mt-2'>NodeJS</div>
                    </div>
                    <div className='bg-[#333] hover:bg-[#424242] transiton ease-in-out duration-200 rounded-md shadow-md border-[2px] border-[#444] text-center py-4 px-6'>
                        <Mongodb />
                        <div className='font-medium mt-2'>MongoDB</div>
                    </div>
                    <div className='bg-[#333] hover:bg-[#424242] transiton ease-in-out duration-200 rounded-md shadow-md border-[2px] border-[#444] text-center py-4 px-6'>
                        <Firebase />
                        <div className='font-medium mt-2'>Firebase</div>
                    </div>
                    <div className='bg-[#333] hover:bg-[#424242] transiton ease-in-out duration-200 rounded-md shadow-md border-[2px] border-[#444] text-center py-4 px-6'>
                        <ReactLogo />
                        <div className='font-medium mt-2'>React</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
