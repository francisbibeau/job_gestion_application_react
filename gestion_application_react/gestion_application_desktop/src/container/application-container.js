import React, { Component } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import '../css/connexion.css'
import ConnexionComponent from 'component/connexion-component'
import HeaderNoConnect from '../component/header-no-connect-component'
const baseUrl = 'https://test-api3.herokuapp.com/'
const anyWhere = 'https://cors-anywhere.herokuapp.com/'

class ApplicationContainer extends Component {
    constructor () {
        super()
        this.state = {
            userName: '',
            userNameValide: true,
            password: '',
            users: [],
            passwordValide: true,
            connexionValide: false,
            idPrivilege: '',
            inscriptiption: true,
            userConnect: ''
        }
        this.connexion = this.connexion.bind(this)
        this.getPsw = this.getPsw.bind(this)
        this.getUserName = this.getUserName.bind(this)
        this.redirection = this.redirection.bind(this)
    }

    componentDidMount () {
        fetch(anyWhere + baseUrl + 'userPrivilege')
            .then((response) => response.json())
            .then(resp =>
                this.setState({ users: resp }))
    }

    redirection () {
        this.props.history.push('inscription')
    }

    getUserName (e) {
        if (e.target.value.split(' ').length > 1) {
            console.log('pas de spaces')
            this.setState({ userNameValide: false })
        } else {
            this.setState({ userNameValide: true })

            this.setState({ userName: e.target.value })
            console.log(e.target.value)
        }
    }

    getPsw (e) {
        console.log(e.target.value)
        this.setState({ password: e.target.value })
    }

    connexion (event) {
        event.preventDefault()
        const urlConnexion = 'login'
        const valuesConnexion = 'prenom=' + this.state.userName + '&password=' + this.state.password
        console.log(valuesConnexion)
        const urlFinalConnexion = anyWhere + baseUrl + urlConnexion
        console.log(urlFinalConnexion)
        let token
        fetch(urlFinalConnexion, {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: valuesConnexion

        }).then(response => {
            token = response.headers.get('Authorization')
            return response.json()
        })
            .then(response => {
                localStorage.setItem('x-access-token', token)
                localStorage.setItem('x-access-token-expiration', Date.now() + 2 * 60 * 60 * 1000)
                localStorage.setItem('prenom', response.prenom)
                localStorage.setItem('id', response.id)

                if (response !== null) {
                    this.setState({ idPrivilege: response.id_privilege })
                    this.setState({ connexionValide: true })
                    this.setState({ userConnect: response.prenom })
                } else {
                    this.setState({ connexionValide: false })
                    alert('le nom dutilisateur ou le mot de passe est incorrecte')
                }
            })
    }

    render () {
        console.log(this.state.userConnect)

        const idP = this.state.idPrivilege
        if ((this.state.connexionValide) && idP === 1) {
            return <Redirect to='/acceuil-admin' />
        } else if ((this.state.connexionValide) && (idP !== 1)) {
            return <Redirect to='/infoEtudiant' />
        }
        return (
            <div className='accueil-container'>
                <HeaderNoConnect />
                <ConnexionComponent redirection={this.redirection} connexion={this.connexion} getPsw={this.getPsw} getUserName={this.getUserName} userNameValide={this.state.userNameValide} connexionValide={this.state.connexionValide} />
            </div>
        )
    }
}
export default ApplicationContainer
