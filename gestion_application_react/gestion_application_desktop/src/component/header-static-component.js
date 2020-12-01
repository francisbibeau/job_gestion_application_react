import React from 'react'
import logo from '../images/logo.png'
import '../css/headerstatic.css'
import { Link } from 'react-router-dom'

const HeaderComponentStatic = ({ nomUser, logout }) => (
    <div className='header'>
        <Link to='/application'> <img src={logo} alt='logo' className='imageHeader' /></Link>
        <p>Bonjour {nomUser}</p>
        <button id='deconexion' onClick={logout} className=''>Deconnexion</button>
    </div>

)
export default HeaderComponentStatic
