import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import ModifyComponent from '../component/modify-app-component'
import HeaderComponent from '../component/header-component'
const baseUrl = 'https://test-api3.herokuapp.com/'
const proxyurl = 'https://cors-anywhere.herokuapp.com/'

class ModifyApplicationContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            prenom: '',
            idApp: '',
            application: [],
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
            releve_note: false,
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
        this.soumettreInfoGenerale = this.soumettreInfoGenerale.bind(this)
        this.soumettreInfoSpecifique = this.soumettreInfoSpecifique.bind(this)
        this.soummetreDocAchemine = this.soummetreDocAchemine.bind(this)
        this.soummettreSuiviApplication = this.soummettreSuiviApplication.bind(this)
        this.soummettreEntretientTelephonique = this.soummettreEntretientTelephonique.bind(this)
        this.soummettreEntrevueEnPersonne = this.soummettreEntrevueEnPersonne.bind(this)
        this.soummettreCommentaire = this.soummettreCommentaire.bind(this)
    }

    componentDidMount () {
        let prenom
        let idApp
        if (localStorage && localStorage.getItem('prenom')) {
            prenom = (localStorage.getItem('prenom'))
            idApp = (localStorage.getItem('idApp'))
        }
        this.setState({ idApp: idApp })
        this.setState({ prenom: prenom })
        fetch(proxyurl + 'https://test-api3.herokuapp.com/application?idApp=' + idApp)
            .then((response) => response.json())
            .then(resp => this.setState({ application: resp }))
    }

    getDate (e) {
        // this.setState({ [e.target.name]: e.target.value });

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
        this.setState({ releve_note: !this.state.releve_note })
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

    soumettreInfoGenerale (event) {
        event.preventDefault()
        const urlConnexion = 'updateApplicationControler?idInfoGenerale=' + this.state.application.id_info_generale_application
        const resultModInfoGen = { nom_de_lentreprise: this.state.nomEntreprise, nom_contact_de_lentreprise: this.state.nomContactDeEntreprise, telephone: this.state.telephone, email: this.state.email, linkedin: this.state.linkedin, addresse: this.state.address }
        console.log(resultModInfoGen)
        const resultForm = JSON.stringify(resultModInfoGen)
        // console.log(resultForm)
        const urlFinalConnexion = proxyurl + baseUrl + urlConnexion
        console.log(urlFinalConnexion)

        fetch(urlFinalConnexion, {
            method: 'PUT',
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
    }

    soumettreInfoSpecifique (event) {
        // console.log(this.state.application.id_info_specifique)
        event.preventDefault()
        console.log(this.state.application)
        const urlConnexion = 'updateApplicationControler?idInfoSpecifique=' + this.state.application.id_info_specifique
        const resultModInfoSpecifique = { titre_du_poste: this.state.titreDuPoste, description_poste: this.state.descriptionPoste, language_utilise: this.state.languageUtilise, numero_reference: this.state.numeroReference, remuneration: this.state.remuneration, date_fin_affichage: this.state.dateFinAffichage, source_poste: this.state.sourcePoste, match_poste: this.state.matchPoste }

        console.log(resultModInfoSpecifique)
        const resultForm = JSON.stringify(resultModInfoSpecifique)
        console.log(resultForm)
        const urlFinalConnexion = proxyurl + baseUrl + urlConnexion
        console.log(urlFinalConnexion)

        fetch(urlFinalConnexion, {
            method: 'PUT',
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
    }

    soummetreDocAchemine (event) {
        event.preventDefault()
        console.log(this.state.application)
        const urlConnexion = 'updateApplicationControler?idDocs=' + this.state.application.id_info_specifique
        const resultModInfoSpecifique = { cv: this.state.cv, letre_motivation: this.state.lettre_motivation, releve_note: this.state.releve_note, autres: this.state.autres, lesreferences: this.state.lesreferences }

        console.log(resultModInfoSpecifique)
        const resultForm = JSON.stringify(resultModInfoSpecifique)
        console.log(resultForm)
        const urlFinalConnexion = proxyurl + baseUrl + urlConnexion
        console.log(urlFinalConnexion)

        fetch(urlFinalConnexion, {
            method: 'PUT',
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
    }

    soummettreSuiviApplication (event) {
        event.preventDefault()
        console.log(this.state.application)
        const urlConnexion = 'updateApplicationControler?idSuiviApplication=' + this.state.application.id_suivie_application
        const resultModInfoSpecifique = { date_suivie_telephonique: this.state.dateSuiviTelephone, date_suivie_en_personne: this.state.dateSuiviEnPersonne, relance_interet: this.state.dateRelanceInternet }

        console.log(resultModInfoSpecifique)
        const resultForm = JSON.stringify(resultModInfoSpecifique)
        console.log(resultForm)
        const urlFinalConnexion = proxyurl + baseUrl + urlConnexion
        console.log(urlFinalConnexion)

        fetch(urlFinalConnexion, {
            method: 'PUT',
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
    }

    logOut () {
        localStorage.clear()
        this.props.history.push('application')
        window.history.replaceState(null, null, '/')
    }

    soummettreEntretientTelephonique (event) {
        event.preventDefault()
        console.log(this.state.application)
        const urlConnexion = 'updateApplicationControler?idSuiviTelephonique=' + this.state.application.id_suivie_telephonique
        const resultModInfoSpecifique = { date_entretien: this.state.dateEntretien, courriel_remerciement_st: this.state.courrielRemerciement1, invitation_linkedin_st: this.state.invitationLinkedIn1, courriel_ouappel_suivie_st: this.state.courrielOuAppelDeSuivi1 }

        console.log(resultModInfoSpecifique)
        const resultForm = JSON.stringify(resultModInfoSpecifique)
        console.log(resultForm)
        const urlFinalConnexion = proxyurl + baseUrl + urlConnexion
        console.log(urlFinalConnexion)

        fetch(urlFinalConnexion, {
            method: 'PUT',
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
    }

    soummettreEntrevueEnPersonne (event) {
        event.preventDefault()
        console.log(this.state.application)
        const urlConnexion = 'updateApplicationControler?idSuiviEnPersonne=' + this.state.application.id_suivie_en_personne
        const resultModInfoSpecifique = { date_entrevue: this.state.dateEntrevue, courriel_remerciement: this.state.courrielRemerciement2, invitation_linkedin: this.state.invitationLinkedIn2, courriel_ouappel_suivie: this.state.courrielOuAppelDeSuivi2 }

        console.log(resultModInfoSpecifique)
        const resultForm = JSON.stringify(resultModInfoSpecifique)
        console.log(resultForm)
        const urlFinalConnexion = proxyurl + baseUrl + urlConnexion
        console.log(urlFinalConnexion)

        fetch(urlFinalConnexion, {
            method: 'PUT',
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
    }

    soummettreCommentaire (event) {
        event.preventDefault()
        console.log(this.state.application)
        const urlConnexion = 'updateApplicationControler?idAppPourCommentaire=' + this.state.application.id
        const resultModInfoSpecifique = { commentaire: this.state.commentaire }

        console.log(resultModInfoSpecifique)
        const resultForm = JSON.stringify(resultModInfoSpecifique)
        console.log(resultForm)
        const urlFinalConnexion = proxyurl + baseUrl + urlConnexion
        console.log(urlFinalConnexion)

        fetch(urlFinalConnexion, {
            method: 'PUT',
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
    }

    render () {
        return (
            <div className='connexion-container'>
                <HeaderComponent style={{ position: 'static' }} nomUser={this.state.prenom} logout={this.logOut} />
                <h3 className='titre'>Modification d'une Application</h3>
                <ModifyComponent
                    application={this.state.application}
                    soumettreInfoGenerale={this.soumettreInfoGenerale} soumettreInfoSpecifique={this.soumettreInfoSpecifique} soummetreDocAchemine={this.soummetreDocAchemine} soummettreEntretientTelephonique={this.soummettreEntretientTelephonique} soummettreSuiviApplication={this.soummettreSuiviApplication} soummettreEntrevueEnPersonne={this.soummettreEntrevueEnPersonne} getDate={this.getDate} soummettreCommentaire={this.soummettreCommentaire} getNomEntreprise={this.getNomEntreprise} getNomContactDeEntreprise={this.getNomContactDeEntreprise} getTelephone={this.getTelephone} getEmail={this.getEmail} getLinkedin={this.getLinkedin} getAdresse={this.getAdresse} geTitreDuPosteTitre={this.geTitreDuPosteTitre} getDescriptionPsote={this.getDescriptionPsote} getLanguageUtilise={this.getLanguageUtilise} getNumeroReference={this.getNumeroReference} getRemuneration={this.getRemuneration} getDateFinAffichage={this.getDateFinAffichage} getSourcePoste={this.getSourcePoste} getMatchPoste={this.getMatchPoste} getCv={this.getCv} getLettre_motivation={this.getLettre_motivation} getReleve_note={this.getReleve_note} getAutres={this.getAutres} getLesreferences={this.getLesreferences} getDateSuiviCourriel={this.getDateSuiviCourriel} getDateSuiviEnPersonne={this.getDateSuiviEnPersonne} getDateRelanceInternet={this.getDateRelanceInternet} getDateEntretien={this.getDateEntretien} getCourrielRemerciement={this.getCourrielRemerciement} getInvitationLinkedIn={this.getInvitationLinkedIn} getCourrielOuAppelDeSuivi={this.getCourrielOuAppelDeSuivi} getDateEntrevue={this.getDateEntrevue} getCourrielRemerciement2={this.getCourrielRemerciement2} getInvitationLinkedIn2={this.getInvitationLinkedIn2} getCourrielOuAppelDeSuivi2={this.getCourrielOuAppelDeSuivi2} getCommentaire={this.getCommentaire}
                />
            </div>
        )
    }
}

export default ModifyApplicationContainer
