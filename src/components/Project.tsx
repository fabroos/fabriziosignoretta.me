import React from 'react'
import { motion, Variants } from 'framer-motion'
import IconLink from './IconLink'
import { Github } from '../icons/Github'
import { Play } from '../icons/Play'
const cardVariants: Variants = {
  offscreen: {
    x: '-2000px'
  },
  onscreen: {
    x: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8
    }
  },
  onHover: {
    scale: 1.07,
    transition: {
      ease: 'linear',
      duration: 0.3
    }
  }
}
interface Props {
  src: string
  className?: any
  hrefs?: {
    github: string
    demo: string
  }
  icon?: React.ReactNode
}
export function Project ({ src, className, hrefs }: Props) {
  return (
    <motion.article
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.8 }}
      className={`flex col-span-2 overflow-hidden relative shadow-md ${className}`}
    >
      <motion.img
        whileHover='onHover'
        className='object-cover h-full'
        variants={cardVariants}
        src={src}
      />
      <div className='absolute z-10 bottom-0 left-0 w-full h-12  bg-gradient-to-t from-black/80 to-black/10 backdrop-blur-sm flex justify-around items-center text-white'>
        {!hrefs && <span className='font-medium'>In progress</span>}
        {hrefs && (
          <>
            <IconLink url={hrefs?.github}>
              <Github className='text-white' />
            </IconLink>
            <IconLink url={hrefs?.demo}>
              <Play className='text-white' />
            </IconLink>
          </>
        )}
      </div>
    </motion.article>
  )
}
