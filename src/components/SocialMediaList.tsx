import React from 'react'
import { Github } from '../icons/Github'
import { Instagram } from '../icons/Instagram'
import { Linkedin } from '../icons/Linkedin'
import { Mail } from '../icons/Mail'
import IconLink from './IconLink'
const socialMedia = [
  {
    url: 'https://github.com/fabroos',
    icon: <Github />
  },
  {
    url: 'https://www.linkedin.com/in/signorettafabrizio/',
    icon: <Linkedin />
  },
  {
    url: 'mailto:signorettafabrizio@gmail.com',
    icon: <Mail />
  },
  {
    url: 'https://www.instagram.com//fabrii_signoretta/',
    icon: <Instagram />
  }
]

export const SocialMediaList = () => {
  return (
    <>
      {socialMedia.map(({ url, icon }) => (
        <IconLink key={url} url={url}>
          {icon}
        </IconLink>
      ))}
    </>
  )
}
