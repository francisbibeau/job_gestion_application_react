import React from 'react'

const ConnexionComponent = ({ connexion, redirection, getPsw, getUserName, returnePage, userNameValide, connexionValide }) => (

    <div className='login-component'>
        <form onSubmit={connexion}>

            <div>
                <label>Nom d'utilisateur (email)</label>
                <input type='text' onChange={getUserName} required />
            </div>

            <div>
                <label>Mot de passe</label>
                <input type='password' onChange={getPsw} />
            </div>

            <div className='psw-oblie' />

            <div><button type='submit'>Connexion</button></div>

            <div className='pas-compte'>
                <a href='#' id='Inscription' onClick={redirection}>Pas encore de compte?</a>
            </div>
        </form>
    </div>
)

export default ConnexionComponent
