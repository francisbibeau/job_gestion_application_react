import React, { Component } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import '../css/etudiant-informations.css'
import EntrevueEnPersonneSuiviComponent from 'component/etudiant-info-entrevue-en-personne-suivi-component'
const proxyurl = 'https://cors-anywhere.herokuapp.com/'

class InfoEntrevueSuivi extends Component {
    constructor () {
        super()
        this.state = {
            applications: [],
        

        }
    }

    componentDidMount () {
        let id = (localStorage.getItem('id'))
        fetch(proxyurl + 'https://test-api3.herokuapp.com/application?idUser=' + id)
            .then((response) => response.json())
            .then(resp => this.setState({ applications: resp }))

    }

    render () {
        return (
            <div>
                <EntrevueEnPersonneSuiviComponent
                    applications={this.state.applications}
                />
            </div>
        )
    }
}
export default InfoEntrevueSuivi
