import React, { Component } from 'react'
import '../css/etudiant-informations.css'
import InfoEntretientSuiviComponent from 'component/etudiant-entretient-telephonique-suivi-component'
const proxyurl = 'https://cors-anywhere.herokuapp.com/'

class InfoEntretientTelephoneSuivi extends Component {
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
                <InfoEntretientSuiviComponent
                    applications={this.state.applications}
                />

            </div>
        )
    }
}
export default InfoEntretientTelephoneSuivi
