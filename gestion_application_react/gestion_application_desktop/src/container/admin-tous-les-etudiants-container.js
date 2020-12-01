import React, { Component } from 'react'
import AdminTousEtudiantsComponent from '../component/admin-tous-etudiants-component'
import HeaderComponent from '../component/header-component'
import '../css/tous-etudiants.css'
const proxyurl = 'https://cors-anywhere.herokuapp.com/'

class AdminTousEtudiantContainer extends Component {
    constructor () {
        super()
        this.state = {
            programmes: [],
            etudiants: [],
            etudiantsFilter: [],
            idSelectedProgramme: '',
            status: false,
            prenom: ''

        }
        this.logOut = this.logOut.bind(this)
    }

    handleClickBtn (event) {
        event.preventDefault()
        this.setState({ idSelectedProgramme: event.currentTarget.value })
        console.log(this.state.idSelectedProgramme)

        fetch(proxyurl + 'https://test-api3.herokuapp.com/users?idProgramme=' + event.target.value)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                this.setState({ etudiantsFilter: data })
            })
    }

    handleClickBtnTous () {
        this.setState({ idSelectedProgramme: '' })
    }

    handleChangeStatut (event) {
        const newStatut = event.target.value !== 'true'
        /* console.log('Avant : ' + event.target.value + ' New statut : ' + newStatut) */

        const request = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ statut: newStatut, userId: Number.parseInt(event.target.name) })
        }

        fetch(proxyurl + 'https://test-api3.herokuapp.com/userModificationControl', request)
            .then((response) => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText)
                }
                response.json()
            })
            .then((result) => {
                console.log(result)
            })
        // const body = JSON.stringify({ statut: statutModified, userId: Number.parseInt(event.target.name) })
        // console.log(body)
    }

    logOut () {
        localStorage.clear()
        this.props.history.push('application')
        window.history.replaceState(null, null, '/')
    }

    componentDidMount () {
        Promise.all([
            fetch(proxyurl + 'https://test-api3.herokuapp.com/programme'),
            fetch(proxyurl + 'https://test-api3.herokuapp.com/users')
        ])
            .then(([response1, response2]) => Promise.all([response1.json(), response2.json()]))
            .then(([data1, data2]) => this.setState({
                programmes: data1,
                etudiants: data2
            }))

        let prenom
        if (localStorage && localStorage.getItem('prenom')) {
            prenom = (localStorage.getItem('prenom'))
        }
        this.setState({ prenom: prenom })
    }

    render () {
        let listEtudiants
        // let isChecked

        this.state.idSelectedProgramme !== '' ? listEtudiants = this.state.etudiantsFilter : listEtudiants = this.state.etudiants

        return (
            <div>
                <HeaderComponent
                    nomUser={this.state.prenom} logout={this.logOut}
                />

                <AdminTousEtudiantsComponent
                    programmes={this.state.programmes}
                    etudiants={listEtudiants}
                    // checked={isChecked}
                    onClickBtnTous={this.handleClickBtnTous.bind(this)}
                    onClickProgramme={this.handleClickBtn.bind(this)}
                    onChangeStatut={this.handleChangeStatut.bind(this)}
                />
            </div>
        )
    }
}
export default AdminTousEtudiantContainer
