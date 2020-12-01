import React, { Component } from 'react'
import '../css/etudiant-informations.css'
import InfoSuiviAppEtudiant from 'component/etudiant-suivi-application-component'
const proxyurl = 'https://cors-anywhere.herokuapp.com/'

class InfoInfoSuiviApplicationContainer extends Component {
    constructor () {
        super()
        this.state = {
            applications: [],
            idUser: '',
            idEtudiant: ''
        }
    }

    componentDidMount () {
        let id
        if (localStorage && localStorage.getItem('prenom')) {
            // prenom = (localStorage.getItem('prenom'))
            id = (localStorage.getItem('id'))
        }
        fetch(proxyurl + 'https://test-api3.herokuapp.com/application?idUser=' + id)
            .then((response) => response.json())
            .then(resp => this.setState({ applications: resp }))
    }

    render () {
        return (
            <div>
                <InfoSuiviAppEtudiant
                    applications={this.state.applications}
                />
            </div>
        )
    }
}
export default InfoInfoSuiviApplicationContainer
