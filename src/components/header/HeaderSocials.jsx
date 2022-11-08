import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {FiDribbble} from 'react-icons/fi'


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="http://linkedin.com" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/Ramzanchandia" target='_blank'><BsGithub /></a>
        <a href="http://dribble.com" target='_blank'><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials