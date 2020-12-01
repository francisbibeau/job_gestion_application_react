import React from 'react'
import { Link } from 'react-router-dom'

const InscriptionComponent = ({
    getEmail,
    getNom,
    getPrenom,
    getStatus,
    getUsername,
    getProgramme_id,
    getTelephone,
    getDate_naissance,
    getMotDePasse,
    getConfirmationMotDePasse,
    confirmationMotDePasseValide,
    etat,
    envoie, password, telephone
}) => (

    <div className='inscription-component'>
        <form onSubmit={envoie} id='form'>

            <div className='container-input'>
                <label>Nom</label>
                <input type='text' minLength='2' maxLength='20' onChange={getNom} required />
            </div>

            <div className='container-input'>
                <label>Prenom</label>
                <input type='text' minLength='2' maxLength='20' onChange={getPrenom} required />
            </div>
            <div className='container-input'>
                <label>Programme</label>
                <select onChange={getProgramme_id}>
                    <option value='2'>Programmation et Technologie WEB</option>
                    <option value='3'>Programmation Reseau et Securite</option>
                    <option value='4'>Programmation de Jeu Video</option>
                    <option value='5'>Reseau Informatique et Securite</option>
                    <option value='6'>Gestion de Projet Informatique</option>
                </select>
            </div>
            <div className='container-input'>
                <label>No de Telephone</label>
                <input type='telephone' onChange={getTelephone} required />
            </div>
            <div className='container-input'>
                <label>Email personnel</label>
                <input className='email-inscription' type='text' onChange={getEmail} required />
            </div>
            <div className='container-input'>
                <label>Date de Naissance</label>
                <input type='date' name='string' onChange={getDate_naissance} required />
            </div>
            <div className='container-input'>
                <label>Mot de passe</label>
                <input type='password' onChange={getMotDePasse} required />
            </div>

            <div className='container-input'>
                <label>Confirmer votre mot de passe</label>

                <input type='password' onChange={getConfirmationMotDePasse} required />
            </div>
            <div className='btn_container'><button type='submit' className='sinscrire'>S'incrire</button></div>
            <Link to='/application'> <a href='#'>Connectez-vous</a></Link>

        </form>
    </div>
)

export default InscriptionComponent
