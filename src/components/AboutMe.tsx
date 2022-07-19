import { motion } from 'framer-motion'
import React from 'react'

export const AboutMe = () => {
  return (
    <motion.section className='flex flex-col justify-center mb-8 dark:text-gray-300 text-gray-800'>
      <h2 className='text-2xl font-bold mb-2 dark:text-white text-black'>
        About me
      </h2>
      <p className=''>
        I am a fullstack developer, but im specialized in frontend. I started to
        learn in 2020, in 2021 i started my studies in systems engineering. 6
        months later i won a scholarship to study in Digital House. now i am
        completing my studies in Digital House, a program approved by Mercado
        Libre and Globant
        <a
          target='_BLANK'
          href='https://www.digitalhouse.com/ar/productos/programacion/certified-tech-developer'
          className='text-orange-500 dark:text-purple-600 mx-2'
        >
          Certified tech developer.
        </a>
      </p>
      <p>
        Here i learned technologies like HTML, CSS, JavaScript, React, Testing
        with Jest, selenium, dbm in mysql, java, design patterns, spring,
        infrastructure, and a lot of soft skills and teamwork abilities.
      </p>
      <p>
        Complemtary to my principal studies i learned in Coderhouse the
        fullstack program, where i did a lot of projects, and i learned a lot of
        technologies like Node, Express, MongoDB, Sass, and more.
      </p>
    </motion.section>
  )
}
