import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const Landing = () => {
  return (
    <>
        <div className='h-screen px-5 py-5'>
        <navbar className='flex justify-between'>
            <h1 className='text-4xl font-bold'>Ritik Ranjan</h1>

            <div>
                <a className='px-2' href="#">Home</a>
                <a className='px-2' href="#">Projects</a>
                <a className='px-2' href="#">Contact</a>
            </div>
        </navbar>

        <div className='text-center pt-40 text-5xl '>
            <p>Hey there, its <span className='font-medium text-[#007FFF]'>Ritik Ranjan</span></p>
            <p className='text-3xl text-zinc-400 py-4'>I'm learning</p>
        </div>
        <div className='flex gap-8 justify-center text-3xl py-7'>
        <a href='https://www.linkedin.com/in/ritik-ranjan-616860328/' target='_blank'><FaGithub className='hover:scale-140 cursor-pointer duration-300' /></a>
        <a href='https://www.linkedin.com/in/ritik-ranjan-616860328/' target='_blank'><FaLinkedin className='hover:scale-140 cursor-pointer duration-300' /></a>
        <a href='https://www.linkedin.com/in/ritik-ranjan-616860328/' target='_blank'><CgWebsite className='hover:scale-140 cursor-pointer duration-300' /></a>
        </div>

        </div>
    </>
  )
}

export default Landing