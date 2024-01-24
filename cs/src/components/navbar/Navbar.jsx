import React from 'react'
import Logo from '../../pics/ups-brand.png';
import './navbar.css'

export const Navbar = () => {
  return (
    <div id='nav'>
        <img src={Logo} alt="logo UPS" className='logo' />
      <div id='nav1'>
        <h1>UPS Algerie Costumer Service</h1>
      </div>
        <div className='links'>
        <a href="#"><h3>Tarifs</h3></a>
        <a href="#"><h3>Communes desservies</h3></a>
        </div>
    </div>
  )
}
