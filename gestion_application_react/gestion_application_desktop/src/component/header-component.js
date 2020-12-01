import React from 'react'
import logo from '../images/logo.png'
import '../css/accueil.css'
import { Link } from 'react-router-dom'

const HeaderComponent = ({ nomUser, logout }) => (
    <div className='headerContainer'>
        <Link to='/application'> <img src={logo} alt='logo' className='imageHeader' /></Link>
        <p>Bonjour {nomUser}</p>
        <button id='deconexion' onClick={logout} className=''>Deconnexion</button>
    </div>

)
export default HeaderComponent
