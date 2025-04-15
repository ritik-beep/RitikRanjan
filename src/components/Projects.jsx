import React from 'react'

const Projects = () => {
    const projects = [
        {
            name:'DreamScape',
            img:'',
            description:'DreamSpace is a creative website showcasing the mystical world of dreams. Designed as a dummy portfolio, it combines elements of visual storytelling with a sleek, modern interface. This project serves as a personal showcase of web development skills and explores the thematic concept of dreams in an artistic, interactive manner.'
        },
        {
            name:'Francesco Gioai - Capstone Project',
            img:'',
            description:'Francesco Gioai is a dynamic landing page designed for a professional portfolio, featuring sleek GSAP (GreenSock Animation Platform) animations. The page highlights Francesco’s skills and projects, offering a visually engaging experience with smooth, interactive transitions and animations that captivate visitors from the moment they land on the site.'
        },
    ]
  return (
    <div className='h-screen w-full py-10'>
        <div className='flex justify-center items-center gap-5 flex-wrap'>
        {projects.map((proj, idx)=>{
            return(
                <div key={idx} className='text-center bg-black/10 px-5 py-5 h-100 w-80 rounded-2xl'>
                    <img src="" alt="" />
                    <h2 className='font-bold text-2xl py-2'>{proj.name}</h2>
                    <p>{proj.description}</p>
                </div>
            )
            })}
        </div>
    </div>
  )
}

export default Projects