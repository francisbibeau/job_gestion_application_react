import React, { Component } from 'react'
import { Redirect, useHistory } from 'react-router-dom'

import CreateModifyComponent from '../component/app-modify-create-component'
import HeaderComponent from '../component/header-component'
import '../css/creation-application.css'

const baseUrl = 'https://test-api3.herokuapp.com/'
const anyWhere = 'https://cors-anywhere.herokuapp.com/'
class CreationApplicationContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            prenom: '',
            date: '',
            nomEntreprise: '',
            nomContactDeEntreprise: '',
            telephone: '',
            email: '',
            linkedin: '',
            address: '',
            titreDuPoste: '',
            descriptionPoste: '',
            languageUtilise: '',
            numeroReference: '',
            remuneration: '',
            dateFinAffichage: '',
            sourcePoste: '',
            matchPoste: '',
            cv: false,
            lettre_motivation: false,
            releve_not: false,
            autres: false,
            lesreferences: false,
            dateSuiviTelephone: null,
            dateSuiviEnPersonne: null,
            dateRelanceInternet: null,
            dateEntretien: null,
            courrielRemerciement1: null,
            invitationLinkedIn1: null,
            courrielOuAppelDeSuivi1: null,
            dateEntrevue: null,
            courrielRemerciement2: null,
            invitationLinkedIn2: null,
            courrielOuAppelSuivi2: null,
            id_user: '',
            commentaire: '',
            etat_suivie: false
        }
        this.logOut = this.logOut.bind(this)
        this.getDate = this.getDate.bind(this)
        this.getNomEntreprise = this.getNomEntreprise.bind(this)
        this.getNomContactDeEntreprise = this.getNomContactDeEntreprise.bind(this)
        this.getTelephone = this.getTelephone.bind(this)
        this.getEmail = this.getEmail.bind(this)
        this.getLinkedin = this.getLinkedin.bind(this)
        this.getAdresse = this.getAdresse.bind(this)
        this.geTitreDuPosteTitre = this.geTitreDuPosteTitre.bind(this)
        this.getDescriptionPsote = this.getDescriptionPsote.bind(this)
        this.getLanguageUtilise = this.getLanguageUtilise.bind(this)
        this.getNumeroReference = this.getNumeroReference.bind(this)
        this.getRemuneration = this.getRemuneration.bind(this)
        this.getDateFinAffichage = this.getDateFinAffichage.bind(this)
        this.getSourcePoste = this.getSourcePoste.bind(this)
        this.getMatchPoste = this.getMatchPoste.bind(this)
        this.getCv = this.getCv.bind(this)
        this.getLettre_motivation = this.getLettre_motivation.bind(this)
        this.getReleve_note = this.getReleve_note.bind(this)
        this.getAutres = this.getAutres.bind(this)
        this.getLesreferences = this.getLesreferences.bind(this)
        this.getDateSuiviCourriel = this.getDateSuiviCourriel.bind(this)
        this.getDateSuiviEnPersonne = this.getDateSuiviEnPersonne.bind(this)
        this.getDateRelanceInternet = this.getDateRelanceInternet.bind(this)
        this.getDateEntretien = this.getDateEntretien.bind(this)
        this.getCourrielRemerciement = this.getCourrielRemerciement.bind(this)
        this.getInvitationLinkedIn = this.getInvitationLinkedIn.bind(this)
        this.getCourrielOuAppelDeSuivi = this.getCourrielOuAppelDeSuivi.bind(this)
        this.getDateEntrevue = this.getDateEntrevue.bind(this)
        this.getCourrielRemerciement2 = this.getCourrielRemerciement2.bind(this)
        this.getInvitationLinkedIn2 = this.getInvitationLinkedIn2.bind(this)
        this.getCourrielOuAppelDeSuivi2 = this.getCourrielOuAppelDeSuivi2.bind(this)
        this.getCommentaire = this.getCommentaire.bind(this)
        this.soumettre = this.soumettre.bind(this)
    }

    componentDidMount () {
        let prenom
        let id
        if (localStorage && localStorage.getItem('prenom')) {
            prenom = (localStorage.getItem('prenom'))
            id = (localStorage.getItem('id'))
        }
        this.setState({ prenom: prenom })
        this.setState({ id_user: id })
    }

    getDate (e) {
        console.log(e.target.value)
        this.setState({ date: e.target.value })
    }

    getNomEntreprise (e) {
        console.log(e.target.value)
        this.setState({ nomEntreprise: e.target.value })
    }

    getNomContactDeEntreprise (e) {
        console.log(e.target.value)
        this.setState({ nomContactDeEntreprise: e.target.value })
    }

    getTelephone (e) {
        console.log(e.target.value)
        this.setState({ telephone: e.target.value })
    }

    getEmail (e) {
        console.log(e.target.value)
        this.setState({ email: e.target.value })
    }

    getLinkedin (e) {
        console.log(e.target.value)
        this.setState({ linkedin: e.target.value })
    }

    getAdresse (e) {
        console.log(e.target.value)
        this.setState({ address: e.target.value })
    }

    geTitreDuPosteTitre (e) {
        console.log(e.target.value)
        this.setState({ titreDuPoste: e.target.value })
    }

    getDescriptionPsote (e) {
        console.log(e.target.value)
        this.setState({ descriptionPoste: e.target.value })
    }

    getLanguageUtilise (e) {
        console.log(e.target.value)
        this.setState({ languageUtilise: e.target.value })
    }

    getNumeroReference (e) {
        console.log(e.target.value)
        this.setState({ numeroReference: e.target.value })
    }

    getRemuneration (e) {
        console.log(e.target.value)
        this.setState({ remuneration: e.target.value })
    }

    getDateFinAffichage (e) {
        console.log(e.target.value)
        this.setState({ dateFinAffichage: e.target.value })
    }

    getSourcePoste (e) {
        console.log(e.target.value)
        this.setState({ sourcePoste: e.target.value })
    }

    getMatchPoste (e) {
        console.log(e.target.value)
        this.setState({ matchPoste: e.target.value })
    }

    getCv (e) {
        console.log(!this.state.cv)
        this.setState({ cv: !this.state.cv })
    }

    getLettre_motivation (e) {
        console.log(!this.state.lettre_motivation)
        this.setState({ lettre_motivation: !this.state.lettre_motivation })
    }

    getReleve_note (e) {
        console.log(!this.state.releve_not)
        this.setState({ releve_not: !this.state.releve_not })
    }

    getAutres (e) {
        console.log(!this.state.autres)
        this.setState({ autres: !this.state.autres })
    }

    getLesreferences (e) {
        console.log(!this.state.lesreferences)
        this.setState({ lesreferences: !this.state.lesreferences })
    }

    getDateSuiviCourriel (e) {
        console.log(e.target.value)
        this.setState({ dateSuiviTelephone: e.target.value })
    }

    getDateSuiviEnPersonne (e) {
        console.log(e.target.value)
        this.setState({ dateSuiviEnPersonne: e.target.value })
    }

    getDateRelanceInternet (e) {
        console.log(e.target.value)
        this.setState({ dateRelanceInternet: e.target.value })
    }

    getDateEntretien (e) {
        console.log(e.target.value)
        this.setState({ dateEntretien: e.target.value })
    }

    getCourrielRemerciement (e) {
        console.log(e.target.value)
        this.setState({ courrielRemerciement1: e.target.value })
    }

    getInvitationLinkedIn (e) {
        console.log(e.target.value)
        this.setState({ invitationLinkedIn1: e.target.value })
    }

    getCourrielOuAppelDeSuivi (e) {
        console.log(e.target.value)
        this.setState({ courrielOuAppelDeSuivi1: e.target.value })
    }

    getDateEntrevue (e) {
        console.log(e.target.value)
        this.setState({ dateEntrevue: e.target.value })
    }

    getCourrielRemerciement2 (e) {
        console.log(e.target.value)
        this.setState({ courrielRemerciement2: e.target.value })
    }

    getInvitationLinkedIn2 (e) {
        console.log(e.target.value)
        this.setState({ invitationLinkedIn2: e.target.value })
    }

    getCourrielOuAppelDeSuivi2 (e) {
        console.log(e.target.value)
        this.setState({ courrielOuAppelDeSuivi2: e.target.value })
    }

    getCommentaire (e) {
        console.log(e.target.value)
        this.setState({ commentaire: e.target.value })
    }

    getEtat_suivie (e) {
        console.log(e.target.value)
        this.setState({ etat_suivie: e.target.value })
    }

    soumettre (event) {
        event.preventDefault()
        const urlConnexion = 'application'
        const resultFormulaire = { infoGenerale: { date: this.state.date, nomEntreprise: this.state.nomEntreprise, nomContactDeEntreprise: this.state.nomContactDeEntreprise, telephone: this.state.telephone, email: this.state.email, linkedin: this.state.linkedin, address: this.state.address }, infoSpecifique: { titreDuPoste: this.state.titreDuPoste, descriptionPsote: this.state.descriptionPoste, languageUtilise: this.state.languageUtilise, numeroReference: this.state.numeroReference, remuneration: this.state.remuneration, dateFinAffichage: this.state.dateFinAffichage, sourcePoste: this.state.sourcePoste, matchPoste: this.state.matchPoste }, documentAchemine: { cv: this.state.cv, lettre_motivation: this.state.lettre_motivation, releve_note: this.state.releve_not, autres: this.state.autres, lesreferences: this.state.lesreferences }, suiviApplication: { dateSuiviTelephone: this.state.dateSuiviTelephone, dateSuiviEnPersonne: this.state.dateSuiviEnPersonne, dateRelanceInternet: this.state.dateRelanceInternet }, suiviTelephonique: { dateEntretien: this.state.dateEntretien, courrielRemerciement: this.state.courrielRemerciement1, invitationLinkedIn: this.state.invitationLinkedIn1, courrielOuAppelSuivi: this.state.courrielOuAppelDeSuivi1 }, suiviEnPersonne: { dateEntrevue: this.state.dateEntrevue, courrielRemerciement: this.state.courrielRemerciement2, invitationLinkedIn: this.state.invitationLinkedIn2, courrielOuAppelSuivi: this.state.courrielOuAppelSuivi2 }, id_user: this.state.id_user, commentaire: this.state.commentaire, etat_suivie: this.state.etat_suivie }
        console.log(resultFormulaire)
        const resultForm = JSON.stringify(resultFormulaire)
        console.log(resultForm)
        const urlFinalConnexion = anyWhere + baseUrl + urlConnexion
        console.log(urlFinalConnexion)

        if (this.state.date.localeCompare('') !== 0) {
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
                    return response.json()
                })
                .catch(function (error) {
                    console.log('There has been a problem with your fetch operation: ' + error.message)
                })
        } else {
            console.log('wrong')
        }
        event.target.reset()
    }

    logOut () {
        localStorage.clear()
        this.props.history.push('application')
        window.history.replaceState(null, null, '/')
    }

    render () {
        return (
            <div className='connexion-container'>
                <HeaderComponent nomUser={this.state.prenom} logout={this.logOut} />
                <h3 className='titre'>Creation d'une Application</h3>
                <CreateModifyComponent
                    cv={this.state.cv}
                    lettre_motivation={this.state.lettre_motivation}
                    releve_not={this.state.releve_not}
                    autres={this.state.autres}
                    lesreferences={this.state.lesreferences}
                    soumettre={this.soumettre} getDate={this.getDate} getNomEntreprise={this.getNomEntreprise} getNomContactDeEntreprise={this.getNomContactDeEntreprise} getTelephone={this.getTelephone} getEmail={this.getEmail} getLinkedin={this.getLinkedin} getAdresse={this.getAdresse} geTitreDuPosteTitre={this.geTitreDuPosteTitre} getDescriptionPsote={this.getDescriptionPsote} getLanguageUtilise={this.getLanguageUtilise} getNumeroReference={this.getNumeroReference} getRemuneration={this.getRemuneration} getDateFinAffichage={this.getDateFinAffichage} getSourcePoste={this.getSourcePoste} getMatchPoste={this.getMatchPoste} getCv={this.getCv} getLettre_motivation={this.getLettre_motivation} getReleve_note={this.getReleve_note} getAutres={this.getAutres} getLesreferences={this.getLesreferences} getDateSuiviCourriel={this.getDateSuiviCourriel} getDateSuiviEnPersonne={this.getDateSuiviEnPersonne} getDateRelanceInternet={this.getDateRelanceInternet} getDateEntretien={this.getDateEntretien} getCourrielRemerciement={this.getCourrielRemerciement} getInvitationLinkedIn={this.getInvitationLinkedIn} getCourrielOuAppelDeSuivi={this.getCourrielOuAppelDeSuivi} getDateEntrevue={this.getDateEntrevue} getCourrielRemerciement2={this.getCourrielRemerciement2} getInvitationLinkedIn2={this.getInvitationLinkedIn2} getCourrielOuAppelDeSuivi2={this.getCourrielOuAppelDeSuivi2} getCommentaire={this.getCommentaire}
                />
            </div>
        )
    }
}

export default CreationApplicationContainer
