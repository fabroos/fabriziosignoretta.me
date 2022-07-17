import React from 'react'

type Props = {
  url?: string
  children: React.ReactNode
}
export default function IconLink ({ children, url, ...props }: Props) {
  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='[&>*]:w-6 [&>*]:dark:text-white text-black [&>*]:fill-current hover:scale-110 transition-all cursor-pointer'
    >
      {children}
    </a>
  )
}
