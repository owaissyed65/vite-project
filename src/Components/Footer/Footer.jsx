import React from 'react'
import { FooterContainer } from './FooterStyle'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { UilPhone } from '@iconscout/react-unicons'
import { UilEnvelopeAlt } from '@iconscout/react-unicons'
import { UilFacebook } from '@iconscout/react-unicons'
import { UilGithub } from '@iconscout/react-unicons'
import { UilLinkedin } from '@iconscout/react-unicons'
import { UilInstagram } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <FooterContainer>
      <div className="box box1">
        <Link to='/'><h1>Oudev</h1></Link>
        <p>All Right Reserved to &#xa9;
          <span>Oudev</span>
        </p>
      </div>
      <div className="box box2">
        <div className="iconsandinfo">
          <p className='icons'>
            <UilLocationPoint size='3rem' />
          </p>
          <p>Sindh - Karachi, Pakistan</p>
        </div>
        <div className="iconsandinfo">
          <p className='icons'>
            <UilPhone size='3rem' />
          </p>
          <p>+92-3162794152</p>
        </div>
        <div className="iconsandinfo">
          <p className='icons'>
            <UilEnvelopeAlt size='3rem' />
          </p>
          <p>owaissyed65@gmail.com</p>
        </div>
      </div>
      <div className="box box3">
        <h1>Reached me via</h1>
        <div className="icon">
          <a href="https://www.facebook.com/mohammad.owais.7549" target='_blank'><UilFacebook size='3rem' /></a>
          <a href="https://github.com/owaissyed65" target='_blank'><UilGithub size='3rem' /></a>
          <a href="https://www.linkedin.com/in/syed-owais-029a32244/" target='_blank'><UilLinkedin size='3rem' /></a>
          <a href="https://www.instagram.com/syedowais283/" target='_blank'><UilInstagram size='3rem' /></a>
        </div>
      </div>
    </FooterContainer>
  )
}

export default Footer
