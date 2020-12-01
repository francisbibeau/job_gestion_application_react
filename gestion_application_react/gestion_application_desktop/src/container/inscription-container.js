import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import InscriptionComponent from '../component/inscription-component'
import '../css/inscription.css'
import HeaderNoConnect from '../component/header-no-connect-component'
const baseUrl = 'https://test-api3.herokuapp.com/'
const anyWhere = 'https://cors-anywhere.herokuapp.com/'
class InscriptionContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            email: '',
            nom: '',
            prenom: '',
            programme_id: '',
            telephone: '',
            date_naissance: '',
            password: '',
            confirmationMotDePasse: '',
            confirmationMotDePasseValide: true,
            etat: false
        }

        this.getEmail = this.getEmail.bind(this)
        this.getNom = this.getNom.bind(this)
        this.getPrenom = this.getPrenom.bind(this)
        this.getProgramme_id = this.getProgramme_id.bind(this)
        this.getTelephone = this.getTelephone.bind(this)
        this.getDate_naissance = this.getDate_naissance.bind(this)
        this.getPassword = this.getPassword.bind(this)
        this.getConfirmationMotDePasse = this.getConfirmationMotDePasse.bind(this)
        this.envoie = this.envoie.bind(this)
    }

    getEmail (e) {
        console.log(e.target.value)
        this.setState({ email: e.target.value })
    }

    getProgramme_id (e) {
        console.log(e.target.value)
        this.setState({ programme_id: e.target.value })
    }

    getTelephone (e) {
        console.log(e.target.value)
        this.setState({ telephone: e.target.value })
    }

    getDate_naissance (e) {
        console.log(e.target.value)
        this.setState({ date_naissance: e.target.value })
    }

    getNom (e) {
        console.log(e.target.value)
        this.setState({ nom: e.target.value })
    }

    getPrenom (e) {
        console.log(e.target.value)
        this.setState({ prenom: e.target.value })
    }

    getUsername (e) {
        console.log(e.target.value)
        this.setState({ username: e.target.value })
    }

    getPassword (e) {
        console.log(e.target.value)
        this.setState({ password: e.target.value })

        if (this.state.confirmationMotDePasse.localeCompare(e.target.value) === 0) {
            console.log('true')
            this.setState({ confirmationMotDePasseValide: true })
        } else {
            this.setState({ confirmationMotDePasseValide: false })
        }
    }

    getConfirmationMotDePasse (e) {
        console.log(e.target.value)
        this.setState({ confirmationMotDePasse: e.target.value })

        if (this.state.password.localeCompare(e.target.value) === 0) {
            this.setState({ confirmationMotDePasseValide: true })
        } else {
            this.setState({ confirmationMotDePasseValide: false })
        }
    }

    envoie (event) {
        event.preventDefault()
        const urlConnexion = 'inscription'
        const resultFormulaire = { dateNaissance: this.state.date_naissance, prenom: this.state.prenom, nom: this.state.nom, telephone: this.state.telephone, idProgramme: this.state.programme_id, email: this.state.email, pwd: this.state.confirmationMotDePasse }
        console.log(resultFormulaire)

        const resultForm = JSON.stringify(resultFormulaire)

        console.log(resultForm)
        const urlFinalConnexion = anyWhere + baseUrl + urlConnexion
        console.log(urlFinalConnexion)

        if (this.state.email.localeCompare('') !== 0 && this.state.prenom.localeCompare('') !== 0) {
            console.log('gut')
            fetch(urlFinalConnexion, {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: resultForm
            })
                .then(response => {
                    this.setState({ etat: true })
                    return response.json()
                })
                .then(response => {
                    if (response !== null) {
                        // this.setState({ etat: true })
                    }
                })
                .catch(function (error) {
                    console.log('There has been a problem with your fetch operation: ' + error.message)
                })
        } else {
            console.log('wrong')
        }
        event.target.reset()
    }

    render () {
        console.log(this.state.etat)
        return (
            <div className='connexion-container'>
                <HeaderNoConnect />
                <h3 className='titre'>INSCRIVEZ-VOUS</h3>
                <InscriptionComponent
                    getEmail={this.getEmail}
                    getUsername={this.getUsername}
                    getNom={this.getNom}
                    getPrenom={this.getPrenom}
                    getProgramme_id={this.getProgramme_id}
                    getDate_naissance={this.getDate_naissance}
                    getTelephone={this.getTelephone}
                    getMotDePasse={this.getMotDePasse}
                    getConfirmationMotDePasse={this.getConfirmationMotDePasse}
                    envoie={this.envoie}
                    confirmationMotDePasseValide={this.state.confirmationMotDePasseValide}
                    etat={this.state.etat}

                />
            </div>
        )
    }
}

export default InscriptionContainer
