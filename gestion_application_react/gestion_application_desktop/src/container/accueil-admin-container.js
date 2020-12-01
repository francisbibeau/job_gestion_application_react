import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/accueil.css'
import HeaderComponent from '../component/header-component'

class AccueilAdminContainer extends Component {
    constructor () {
        super()
        this.state = {
            goPageTous: false,
            goPageEtuByStatus: false,
            valueBtn: '',
            prenom: ''
        }
        this.logOut = this.logOut.bind(this)
    }

    componentDidMount () {
        let prenom
        if (localStorage && localStorage.getItem('prenom')) {
            prenom = (localStorage.getItem('prenom'))
        }
        this.setState({ prenom: prenom })
    }

    handleClickBtnTous () {
        this.setState({ goPageTous: true })
    }

    handleBtnProgram (event) {
        this.setState({ valueBtn: event.target.value })
        this.setState({ goPageEtuByStatus: true })
        return event.target.value
    }

    logOut () {
        localStorage.clear()
        this.props.history.push('application')
        window.history.replaceState(null, null, '/')
    }

    render () {
        /* if (this.state.goPageEtuByStatus) {
            return <Redirect to={'/etudiants-by-statut/' + this.state.valueBtn} />
        } */
        return (
            <div className='accueil-container'>
                <HeaderComponent nomUser={this.state.prenom} logout={this.logOut} />
                <div className='accueil-container-div'>
                    <Link to='/etudiants'><button className='choix' onClick={this.handleClickBtnTous.bind(this)}>Tous les etudiants</button></Link>
                    <Link to='/etudiants-by-statut/false' onClick={this.handleBtnProgram.bind(this)}><button className='choix' value='false' onClick={this.handleBtnProgram.bind(this)}>Etudiants en recherche de stage</button></Link>
                    <Link to='/etudiants-by-statut/true' onClick={this.handleBtnProgram.bind(this)}><button className='choix' value='true'>Etudiant ayant trouvé un stage</button></Link>
                </div>
            </div>
        )
    }
}
export default AccueilAdminContainer
