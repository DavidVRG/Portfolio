import React from 'react'
import { useEffect } from 'react'
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../firebase'
import { useState } from 'react';
import { v4 } from 'uuid'


export default function Projects() {

    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getProjects() {
            setLoading(true)
            const q = query(collection(db, "realprojects"));
            const querySnapshot = await getDocs(q);
            const projectsArray = []
            querySnapshot.forEach((doc) => {
                projectsArray.push(doc.data())
            });
            setProjects(projectsArray)
            setLoading(false)
        }
        getProjects()
    }, [])

    return (
        <div className='w-[90%] lg:w-[80%] xl:w-[70%] mx-auto mb-32' id='realprojects'>
            {!loading && (
                <div className='flex flex-col'>
                    <h3 className='text-xl font-medium border-b-2 border-[#007ced] self-start pb-2 mb-12'>Real Projects</h3>
                    <div className='flex flex-wrap justify-center gap-8'>
                        {projects.map((project) => {
                            return (
                                <div key={v4()} className='bg-[#333] rounded-md shadow-md border-[2px] border-[#444] text-center py-4 px-6'>
                                    <img src={project.imageUrl} alt="react" className='w-[250px] h-[150px]' />
                                    <div className='font-medium mt-3 mb-2'>{project.title}</div>
                                    <button className='bg-[#3a3939] py-2 px-3 rounded-md shadow-sm m-1 hover:bg-[#424242] transiton ease-in-out duration-200'
                                        onClick={() => window.location.href = project.previewUrl}>Website</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}
