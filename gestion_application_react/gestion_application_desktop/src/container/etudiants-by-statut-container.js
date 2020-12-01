import React, { Component } from 'react'
import EtudiantsByStatut from '../component/etudiants-by-statut-component'
import HeaderComponent from '../component/header-component'
import SearchBar from '../component/search-bar-component'
const proxyurl = 'https://cors-anywhere.herokuapp.com/'

class EtudiantsByStatutContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            etudiants: [],
            prenom: '',
            searchValue: '',
            etudiantTrouvee: [],
            goSearch: false
        }

        this.logOut = this.logOut.bind(this)
    }

    componentDidMount () {
        const { match: { params } } = this.props
        fetch(proxyurl + 'http://test-api3.herokuapp.com/users?idStatut=' + params.statut)
            .then((response) => {
                return response.json()
            })

            .then((data) => {
                this.setState({ etudiants: data })
            })

        let prenom
        if (localStorage && localStorage.getItem('prenom')) {
            prenom = (localStorage.getItem('prenom'))
        }
        this.setState({ prenom: prenom })
    }

    logOut () {
        localStorage.removeItem('x-access-token')
        localStorage.removeItem('prenom')
        this.props.history.push('/')
    }

    handleChangeSearch (event) {
        this.setState({ searchValue: event.target.value })
    }

    handleClickSearch () {
        // const search = this.state.searchValue
        this.setState({ goSearch: true })
        // console.log(this.state.goSearch)
        const etudiantTrouvee = this.state.etudiants.filter(
            etu => {
                return etu.prenom.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !== -1
            }
        )

        this.setState({ etudiantTrouvee: etudiantTrouvee })
        // console.log(etudiantTrouvee)
    }

    render () {
        let affichageEtudiant
        this.state.goSearch ? affichageEtudiant = this.state.etudiantTrouvee : affichageEtudiant = this.state.etudiants
        // console.log(this.state.etudiantTrouvee)
        return (
            <div>
                <HeaderComponent
                    nomUser={this.state.prenom}
                    logout={this.logOut}
                />

                <SearchBar
                    valueSearch={this.state.search}
                    onChangeSearch={this.handleChangeSearch.bind(this)}
                    onClickSearch={this.handleClickSearch.bind(this)}
                />

                <EtudiantsByStatut
                    // etudiants={this.state.etudiants}
                    etudiants={affichageEtudiant}
                />

            </div>
        )
    }
}

export default EtudiantsByStatutContainer
