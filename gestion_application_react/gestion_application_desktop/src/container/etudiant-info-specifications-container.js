import React, { Component } from 'react'
import '../css/etudiant-informations.css'
import InfoSpecificationsComponent from 'component/etudiant-info-specifications-component'
const proxyurl = 'https://cors-anywhere.herokuapp.com/'

class InfoInfoSpecificationsContainer extends Component {
    constructor () {
        super()
        this.state = {
            applications: [],
          
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
        // console.log(this.state.idUser)
        fetch(proxyurl + 'https://test-api3.herokuapp.com/application?idUser=' + id)
            .then((response) => response.json())
            .then(resp => this.setState({ applications: resp }))
    }

    render () {
        return (
            <div>
                <InfoSpecificationsComponent
                    applications={this.state.applications}
                />
            </div>
        )
    }
}
export default InfoInfoSpecificationsContainer
