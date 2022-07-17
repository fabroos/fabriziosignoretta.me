import { useState } from 'react'
import IconLink from './components/IconLink'
import { Switch } from './components/Switch'
import { Github } from './icons/Github'
import { Instagram } from './icons/Instagram'
import { Linkedin } from './icons/Linkedin'
import { Mail } from './icons/Mail'
import { Menu } from './icons/Menu'
import { motion, Variants } from 'framer-motion'
import { Project } from './components/Project'

const projects = [
  {
    src: 'images/moviedle.png',
    hrefs: {
      github: 'https://github.com/fabroos/SkillUpI',
      demo: 'https://movies-app-alkemy.vercel.app'
    }
  },
  {
    src: 'images/manage.png',
    hrefs: {
      github: 'https://github.com/fabroos/frontend1-final',
      demo: 'http://fabriziosignoretta.me/frontend1-final/'
    }
  },
  {
    src: 'images/himitsu.png',
    hrefs: {
      github: 'https://github.com/fabroos/Himitsu.store',
      demo: 'https://himitsu-store.vercel.app/'
    }
  }
]
const socialMedia = [
  {
    url: 'https://github.com/fabroos',
    icon: <Github />
  },
  {
    url: 'https://www.linkedin.com/in/fabroos/',
    icon: <Linkedin />
  },
  {
    url: 'mailto:signorettafabrizio@gmail.com',
    icon: <Mail />
  },
  {
    url: 'https://www.instagram.com/fabroos/',
    icon: <Instagram />
  }
]
const App = () => {
  useState(() => {
    localStorage.getItem('theme') === 'dark' &&
      document.documentElement.classList.add('dark')
  })
  return (
    <div className='App dark:bg-gray-900 min-h-screen dark:text-white'>
      <header className='App-header py-10 flex justify-between max-w-screen-lg m-auto items-center px-8'>
        <h1>Fabrizio Signoretta</h1>
        {/* switch */}
        <Switch />
      </header>
      <main className='max-w-screen-lg mx-auto px-8'>
        <motion.article className='flex mb-12 flex-col items-center gap-2 md:flex-row'>
          <img
            className='w-24 h-24 rounded-full mr-4'
            src='images/fabrizio_signoretta.jpeg'
            alt='Fabrizio Signoretta'
          />
          <div className='flex flex-col justify-center font-bold gap-4 md:gap-2'>
            <p>I'm a frontend developer from Córdoba, Argentina</p>
            <p className='font-light'>
              I'm {new Date().getFullYear() - 2003} years old, and i love coffee
              and learn.
            </p>
            <div className='text-white flex gap-6 justify-center md:justify-start'>
              {socialMedia.map(({ url, icon }) => (
                <IconLink key={url} url={url}>
                  {icon}
                </IconLink>
              ))}
            </div>
          </div>
        </motion.article>
        <motion.section className='flex flex-col justify-center mb-8 dark:text-gray-300 text-gray-800'>
          <h2 className='text-2xl font-bold mb-2 dark:text-white'>About me</h2>
          <p className=''>
            I am a fullstack developer, but im specialized in frontend. I
            started to learn in 2020, in 2021 i started my studies in systems
            engineering. 6 months later i win a scholarship to study in Digital
            House. now i am completing my studies in Digital House, a program
            approved by Mercado Libre and Globant
            <a
              target='_BLANK'
              href='https://www.digitalhouse.com/ar/productos/programacion/certified-tech-developer'
              className='text-orange-500 dark:text-purple-600'
            >
              {' '}
              Certified tech developer.{' '}
            </a>
          </p>
          <p>
            Here i learn technologies like HTML, CSS, JavaScript, React, Testing
            with Jest, selenium, dbm in mysql, java, design patterns, spring,
            infrastructure, and a lot of soft skills and teamwork abilities.
          </p>
          <p>
            For reinforce my studies i learn in a course in Fullstack Web
            Development in Coderhouse.
          </p>
        </motion.section>
        <motion.section className='flex flex-col justify-center mb-4'>
          <h2 className='text-2xl font-bold mb-2'>Projects</h2>
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
        {/* <section>
          <h2 className='text-2xl font-bold mb-2'>Technologies</h2>
          <div className='grid grid-flow-row-dense grid-cols-[max(10vw,100px)_auto]'>
            <span className='text-gray-800 dark:text-gray-200 px-2 w-min'>
              HTML
            </span>
            <div className='flex items-center h-full'>
              <div
                className='w-full h-2 bg-gray-200 relative rounded-full overflow-hidden'
                title='80%'
              >
                <div
                  className='z-10 bg-orange-500 dark:bg-purple-600 h-full'
                  style={{ width: '80%' }}
                />
              </div>
            </div>
            <span className='text-gray-800 dark:text-gray-200 px-2'>
              Express
            </span>

            <div className='flex items-center h-full'>
              <div className='w-full h-2  bg-gray-200 relative rounded-full overflow-hidden '>
                <div
                  className='z-10 bg-orange-500 dark:bg-purple-600 h-full'
                  style={{ width: '80%' }}
                />
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <footer className='py-4 dark:bg-gray-800 bg-gray-300 flex flex-col gap-2 items-center text-gray-800 dark:text-gray-300'>
        <p className='text-sm'>
          Now you know about me, let me know something about you
        </p>
        <div className='flex gap-4'>
          {socialMedia.map(({ url, icon }) => (
            <IconLink key={url} url={url}>
              {icon}
            </IconLink>
          ))}
        </div>
        <h3 className='text-center text-xs dark:text-gray-400'>
          © {new Date().getFullYear()} Fabrizio Signoretta
        </h3>
      </footer>
    </div>
  )
}

export { App }
