import React, { Component } from 'react'

import ConnexionComponent from 'component/connexion-component'
const baseUrl = 'https://test-api3.herokuapp.com/'
const anyWhere = 'https://cors-anywhere.herokuapp.com/'
class ConnexionContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            userName: '',
            userNameValide: true,
            password: '',
            users: [],
            passwordValide: true,
            connexionValide: true
        }
        this.connexion = this.connexion.bind(this)
        this.recupererLesUtilisateurs = this.recupererLesUtilisateurs.bind(this)
        this.getPsw = this.getPsw.bind(this)
        this.getUserName = this.getUserName.bind(this)
        // this.returnePageGeneral = this.props.returnePageGeneral
        this.putUser = this.putUser.bind(this)
    }

    componentDidMount () {
        fetch(anyWhere + baseUrl + 'users')
            .then((response) => response.json())
            .then((resp => this.setState({
                users: resp
            }))
    }

    recupererLesUtilisateurs () {
        fetch(baseUrl + 'users')
            .then(response => response.json())
            .then(response => {
                console.log(response)
                this.setState({ users: response })
            })
    }

    getPsw (e) {
        console.log(e.target.value)
        this.setState({ password: e.target.value })
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

    connexion (event) {
        event.preventDefault()
        const urlConnexion = '/users'
        const valuesConnexion = 'email=' + this.state.userName + '&password=' + this.state.password
        const urlFinalConnexion = baseUrl + urlConnexion + '?' + valuesConnexion
        fetch(urlFinalConnexion, {
            method: 'POST',
            body: {},
            headers: { 'Content-type': 'application/x-www-form-urlencoded' }
        }).then(response => response.json())
            .then(response => {
                localStorage.setItem('x-access-token', response.token)
                localStorage.setItem('x-access-token-expiration', Date.now() + 2 * 60 * 60 * 1000)
                this.setState({ userCompte: response })
                //  console.log(compte)
                if (response !== null) {
                    this.setState({ connexionValide: true })

                    /* fetch(urlConnexionSaveSession, {
                        method: 'POST',
                        body: JSON.stringify({
                            json: response
                        }),
                        headers: { 'Content-Type': 'application/json' }
                    }) */
                    /*  this.props.setNavBar(LIENS);
                    this.props.returnePageGeneral('Pannier');
                    LIENS_DEFAULT.push({ label: 'profil', lien: 'profil' }); */
                    console.log('connecte')
                } else {
                    this.setState({ connexionValide: false })
                    alert('le nom dutilisateur ou le mot de passe est incorrecte')
                }
            })
    }

    render () {
        return (
            <div>
                <h3>CONNEXION</h3>
                <ConnexionComponent connexion={this.connexion} getPsw={this.getPsw} getUserName={this.getUserName} userNameValide={this.state.userNameValide} connexionValide={this.state.connexionValide} />
            </div>
        )
    }
}
export default ConnexionContainer
