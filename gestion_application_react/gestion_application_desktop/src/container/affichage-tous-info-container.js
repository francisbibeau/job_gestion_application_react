import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import EtudiantVide from '../component/etudiant-vide'
import '../css/etudiant-informations.css'
import InformationsEtudiantomponent from '../component/etudiant-information-component'
import InfoSpecificationsComponent from '../component/etudiant-info-specifications-component'
import InfoDocAchemineComponent from '../component/etudiant-info-doc-achemine-component'
import InfoSuiviAppEtudiant from '../component/etudiant-suivi-application-component'
import InfoEntretientSuiviComponent from '../component/etudiant-entretient-telephonique-suivi-component'
import EntrevueEnPersonneSuiviComponent from '../component/etudiant-info-entrevue-en-personne-suivi-component'
import HeaderComponentStatic from 'component/header-static-component'
const proxyurl = 'https://cors-anywhere.herokuapp.com/'
const baseUrl = 'https://test-api3.herokuapp.com/'

class TousInfoEtudiantContainer extends Component {
    constructor () {
        super()
        this.state = {
            applications: [],
            idUser: '',
            prenom: '',
            idApp: '',
            valueSelect: '',
            trie: false,
            applicationstrieParNom: [],
            isAdmin: false,
            etatsuivi: false,
            color: '#000'
        }
        this.logOut = this.logOut.bind(this)
        this.handleClickBtnAjouter = this.handleClickBtnAjouter.bind(this)
        this.handleChangeSelect = this.handleChangeSelect.bind(this)
        this.handleClickSelect = this.handleClickSelect.bind(this)
    }

    handleChangeChecbox (event) {
        this.setState({ idApp: event.target.name })
    }

    handleDeleteApp () {
        fetch(proxyurl + 'https://test-api3.herokuapp.com/application?idAppToDelete=' + this.state.idApp + '&idUser=' + this.state.idUser, {
            method: 'DELETE'
        })
            .then((response) => response.json())
            .then((data) => this.setState({ applications: data }))
    }

    handleChangeSelect (event) {
        this.setState({ valueSelect: event.target.value })
    }

    handleClickSelect (event) {
        event.preventDefault()
        this.setState({ trie: true })
        let applications = this.state.applications
        if (this.state.valueSelect === 'nom') {
            applications.sort((a, b) => a.nom_de_lentreprise.localeCompare(b.nom_de_lentreprise))
        } else if (this.state.valueSelect === 'date') {
            applications = this.state.applications
        }
        this.setState({ applicationstrieParNom: applications })
    }

    componentDidMount () {
        const pathArray = window.location.pathname.split('/')
        const pathArray1 = window.location.pathname
        console.log(pathArray1)
        console.log(pathArray1.length)
        const idpath = pathArray[2]
        let prenom
        let id
        if (pathArray1.length === 13) {
            prenom = (localStorage.getItem('prenom'))
            id = (localStorage.getItem('id'))
            fetch(proxyurl + 'https://test-api3.herokuapp.com/application?idUser=' + id)
                .then((response) => response.json())
                .then(resp => this.setState({ applications: resp }))
        } else {
            this.setState({ isAdmin: true })
            prenom = (localStorage.getItem('prenom'))
            fetch(proxyurl + 'https://test-api3.herokuapp.com/application?idUser=' + idpath)
                .then((response) => response.json())
                .then(resp => this.setState({ applications: resp }))
        }

        this.setState({ prenom: prenom })
        this.setState({ idUser: id })
    }

    handleClickBtnAjouter () {
        this.props.history.push('creation')
        console.log(this.state.idApp)
    }

    handleOnClickModify (event) {
        localStorage.setItem('idApp', event.target.value)
    }

    logOut () {
        localStorage.clear()
        this.props.history.push('application')
        window.history.replaceState(null, null, '/')
    }

    hide (e) {
        e.target.style.color = '#E21C21'
        console.log(this.state.isAdmin)
        console.log('allo')
    }

    change (e) {
        console.log('allo')
        event.preventDefault()
        //  e.currentTarget.style.color
        // console.log(e.currentTarget.style.color)

        this.setState({ etatsuivi: !this.state.etatsuivi })
        // this.setState({ color: '#E21C21' })
        console.log(this.state.etatsuivi)
        if (this.state.color === '#000') {
            this.setState({ color: '#E21C21' })
        } else if (this.state.color === '#E21C21') {
            this.setState({ color: '#000' })
        }
        toast('Wow so easy !')
    }

    updatesuivie (event) {
        // this.setState({ etatsuivi: !this.state.etatsuivi })
        const urlConnexion = 'updateApplicationControler?idApp=' + event
        const resultModInfoGen = { etat_suivie: !this.state.etatsuivi }

        console.log(resultModInfoGen)
        const resultForm = JSON.stringify(resultModInfoGen)
        console.log(resultForm)
        const urlFinalConnexion = proxyurl + baseUrl + urlConnexion
        console.log(urlFinalConnexion)
        console.log('gut')
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
        console.log(this.state.isAdmin)
        let listeApplications
        this.state.trie ? listeApplications = this.state.applicationstrieParNom : listeApplications = this.state.applications
        return (

            <div style={{ position: 'relative' }}>
                <div>
                    <HeaderComponentStatic nomUser={this.state.prenom} logout={this.logOut} />

                </div>                <div>
                    <div>  <Link to='/creation'> <input className='ajouter' style={{ marginTop: '200px' }} type='button' value='AJOUTER' /></Link></div>

                    <div style={{ marginLeft: '650px', marginBottom: '10px' }}>
                        <form>
                            <label>Trier par :</label>
                            <select name='trie' id='trie' onChange={this.handleChangeSelect} value={this.state.valueSelect}>
                                <option value='date'>Date d'application au poste</option>
                                <option value='nom'>Nom de l'entreprise</option>
                            </select>
                            <input type='submit' value='OK' onClick={this.handleClickSelect} />
                        </form>
                    </div>
                    {this.state.applications.length === 0 ? <EtudiantVide type='applications' />

                        : <div className='main-container'>
                            <InformationsEtudiantomponent
                                applications={this.state.applications}
                                valueAppToDelete={this.state.idApp}
                                onChangeCheckbox={this.handleChangeChecbox.bind(this)}
                                hide={this.hide.bind(this)}
                                isAdmin={this.state.isAdmin}
                                updatesuivie={this.updatesuivie.bind(this)}
                                change={this.change.bind(this)}
                                color={this.state.color}
                            />

                            <InfoSpecificationsComponent
                                applications={listeApplications}
                            />

                            <InfoDocAchemineComponent
                                applications={listeApplications}
                            />

                            <InfoSuiviAppEtudiant
                                applications={listeApplications}
                            />

                            <InfoEntretientSuiviComponent
                                applications={listeApplications}
                            />

                            <EntrevueEnPersonneSuiviComponent
                                applications={listeApplications}
                                handleOnClickModify={this.handleOnClickModify.bind(this)}
                                isAdmin={this.state.isAdmin}
                            />
                        </div>}
                    <div>
                        <button onClick={this.handleDeleteApp.bind(this)} type='submit' className='ajouter'>SUPPRIMER</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default TousInfoEtudiantContainer
