import React from 'react'
import Logo from '../../pics/ups-brand.png';
import './navbar.css'

export const Navbar = () => {
  return (
    <div id='nav'>
        <img src={Logo} alt="logo UPS" className='logo' />
        <h1>UPS Algerie Costumer Service</h1>
    </div>
  )
}
