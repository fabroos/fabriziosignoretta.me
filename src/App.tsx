import { useState } from 'react'
import { motion } from 'framer-motion'
import { Project } from './components/Project'
import { SocialMediaList } from './components/SocialMediaList'
import { Header } from './components/Header'
import projects from './information/projects.json'
import { AboutMe } from './components/AboutMe'

const App = () => {
  useState(() => {
    localStorage.getItem('theme') === 'dark' &&
      document.documentElement.classList.add('dark')
  })
  return (
    <div className='App dark:bg-gray-900 min-h-screen dark:text-white'>
      <Header />
      <main className='max-w-screen-lg mx-auto px-8'>
        <motion.article className='flex mb-12 flex-col items-center md:flex-row'>
          <div className='flex-1 flex md:flex-row flex-col items-center gap-2'>
            <img
              className='w-24 h-24 rounded-full mr-4'
              src='images/fabrizio_signoretta.jpeg'
              alt='Fabrizio Signoretta'
            />
            <div className='flex flex-col justify-center font-bold gap-4 md:gap-2'>
              <p>I'm a frontend developer from Córdoba, Argentina</p>
              <p className='font-light'>
                I'm {new Date().getFullYear() - 2003} years old, and i love
                coffee and learn.
              </p>
              <div className='text-white flex gap-6 justify-center md:justify-start'>
                <SocialMediaList />
              </div>
            </div>
          </div>
        </motion.article>
        <AboutMe />
        <motion.section className='flex flex-col justify-center mb-4'>
          <h2 className='text-2xl font-bold mb-2'>Projects</h2>
          <p className='text-gray-800 dark:text-gray-300 mb-4'>
            Here are some projects i've done, and some of my favorite.
          </p>
          <div className='grid md:grid-cols-6 gap-3 grid-cols-1'>
            {projects.map(project => (
              <Project key={project.src} {...project} />
            ))}
            <Project
              className='md:col-start-2'
              src='https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
            />
            <Project src='https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80' />
          </div>
        </motion.section>
        <section className='flex flex-col justify-center mb-4'>
          <h2 className='text-2xl font-bold mb-2'>Technologies</h2>
          <p className='dark:text-gray-300 text-gray-800 mb-4'>
            There's the technologies i know and use in my projects.
          </p>
          <div className='flex flex-wrap gap-2'>
            <i className='devicon-react-original colored text-[60px]' />
            <i className='devicon-html5-plain colored text-[60px]' />
            <i className='devicon-css3-plain colored text-[60px]' />
            <i className='devicon-javascript-plain colored text-[60px]' />
            <i className='devicon-typescript-plain colored text-[60px]' />
            <i className='devicon-nodejs-plain colored text-[60px]' />
            <i className='devicon-express-original colored text-[60px]' />
            <i className='devicon-mongodb-plain colored text-[60px]' />
            <i className='devicon-mysql-plain colored text-[60px]' />
            <i className='devicon-docker-plain colored text-[60px]' />
            <i className='devicon-git-plain colored text-[60px]' />
            <i className='devicon-github-plain colored text-[60px]' />
            <i className='devicon-tailwindcss-plain colored text-[60px]' />
            <i className='devicon-bash-plain colored text-[60px]' />
            <i className='devicon-java-plain colored text-[60px]' />
            <i className='devicon-jest-plain colored text-[60px]' />
            <i className='devicon-linux-plain colored text-[60px]' />
          </div>
        </section>
      </main>
      <footer className='mt-8 py-4 px-8 dark:bg-gray-800 bg-gray-100 flex flex-col gap-2 items-center text-gray-800 dark:text-gray-300'>
        <p className='text-sm text-center'>
          Now you know about me, let me know something about you
        </p>
        <div className='flex gap-4'>
          <SocialMediaList />
        </div>
        <h3 className='text-center text-xs dark:text-gray-400'>
          © {new Date().getFullYear()} Fabrizio Signoretta
        </h3>
      </footer>
    </div>
  )
}

export { App }
