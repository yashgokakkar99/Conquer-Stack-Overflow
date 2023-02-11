import React from 'react'
import {Link} from 'react-router-dom'
import logo from './assets/Logo.png'
const Navbar = () => {
  return (
    <header>
        <div>
		<img className="logo" src={logo} alt="Logo" />
        </div>
		<div className="display-menu">
            <Link className='menu' to={'/'}>Home</Link>
            <Link className='menu' to={'/about'}>About</Link>
            <Link className='menu' to={'/projects'}>Projects</Link>
            <Link className='menu' to={'/projects'}>Projects</Link>
        </div>
    </header>
)
}

export default Navbar