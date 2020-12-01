import React, { Component } from 'react'
import ConnexionComponent from '../component/connexion-component'
import AccueilAdminComponent from '../component/accueil-admin-component'
import logo from '../photos/LogoMakr_4nCnY1.png'

class LoginContainer extends Component {
    constructor () {
        super()
        this.state = {
            username: '',
            password: '',
            login: false
        }
    }

    handleClickLogin () {
        const request = new Request('http://localhost/api/user/login.php', {
            method: 'POST',
            body: JSON.stringify({ username: this.state.username, password: this.state.password })
        })

        fetch(request).then((response) => {
            response.json().then((result) => {
                // console.warn('result:', JSON.stringify(result))

                localStorage.setItem('login', JSON.stringify({
                    login: true,
                    token: result.jwt
                }))
                this.setState({ login: true })
            })
        })
    }

    handleSubmit (event) {
        event.preventDefault()
    }

    render () {
        let acceuilAdmin
        let connexion
        if (this.state.login) {
            acceuilAdmin = <AccueilAdminComponent />
        } else {
            connexion = <ConnexionComponent
                onClickFunction={this.handleClickLogin.bind(this)}
                onChangeUsername={(event) => { this.setState({ username: event.target.value }) }}
                onChangePwd={(event) => { this.setState({ password: event.target.value }) }}
                onSubmitFunction={this.handleSubmit.bind(this)}
            />
        }
        return (

            <div>
                <div className='header'>
                    <img src={logo} alt='logo' />
                </div>

                {acceuilAdmin}
                {connexion}
            </div>
        )
    }
}

export default LoginContainer
