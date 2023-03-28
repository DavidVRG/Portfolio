import React from 'react'
import { ReactComponent as Email } from '../assets/email.svg'
import { ReactComponent as Discord } from '../assets/discord.svg'
import { ReactComponent as Linkedin } from '../assets/linkedin.svg'

export default function Stacks() {
    return (
        <div className='w-[90%] lg:w-[80%] xl:w-[70%] mx-auto mb-32' id='contact'>
            <div className='flex flex-col'>
                <h3 className='text-xl font-medium border-b-2 border-[#007ced] self-start pb-2 mb-12'>Contact</h3>
                <div className='flex flex-wrap gap-4 justify-center'>
                    <div className='flex flex-col gap-2 items-center bg-[#333] rounded-md shadow-md border-[2px] hover:bg-[#424242] transiton ease-in-out duration-200 border-[#444] text-center py-4 px-6'>
                        <Email />
                        <div className='font-medium'>vargadavid946@gmail.com</div>
                    </div>
                    <div className='flex flex-col gap-2 items-center bg-[#333] rounded-md shadow-md border-[2px] hover:bg-[#424242] transiton ease-in-out duration-200 border-[#444] text-center py-4 px-6'>
                        <Discord />
                        <div className='font-medium'>DavidVRG#5389</div>
                    </div>
                    <div onClick={() => window.location.href = "https://www.linkedin.com/in/davidvrg/"} className='flex cursor-pointer flex-col gap-2 items-center bg-[#333] rounded-md shadow-md border-[2px] hover:bg-[#424242] transiton ease-in-out duration-200 border-[#444] text-center py-4 px-6'>
                        <Linkedin />
                        <button className='font-medium'>Go to my LinkedIn</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
