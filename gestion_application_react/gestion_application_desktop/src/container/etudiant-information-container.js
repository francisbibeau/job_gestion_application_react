import React, { Component } from 'react'
import '../css/etudiant-informations.css'
import InformationsEtudiantomponent from 'component/etudiant-information-component'
const proxyurl = 'https://cors-anywhere.herokuapp.com/'

class InfoEtudiantContainer extends Component {
    constructor () {
        super()
        this.state = {
            applications: [],
            idUser: ''
        }
    }

    componentDidMount () {
        let prenom
        let id
        if (localStorage && localStorage.getItem('prenom')) {
            prenom = (localStorage.getItem('prenom'))
            id = (localStorage.getItem('id'))
        }
        this.setState({ prenom: prenom })
        this.setState({ idUser: id })
        fetch(proxyurl + 'https://test-api3.herokuapp.com/application?idUser=' + id)
            .then((response) => response.json())
            .then(resp => this.setState({ applications: resp }))
    }

    render () {
        return (
            <div>

                <InformationsEtudiantomponent
                    applications={this.state.applications}
                />
            </div>
        )
    }
}
export default InfoEtudiantContainer
