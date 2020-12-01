import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AdminTousEtudiantContainer from '../container/admin-tous-les-etudiants-container'
import AccueilAdminContainer from '../container/accueil-admin-container'
import EtudiantsByStatutContainer from '../container/etudiants-by-statut-container'
import ApplicationContainer from '../container/application-container'
import InscriptionContainer from '../container/inscription-container'
import TousInfoEtudiantContainer from 'container/affichage-tous-info-container'
import CreationApplicationContainer from '../container/creation-application-container'
import ModifyApplicationContainer from '../container/modify-app-container'
const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ApplicationContainer} />
            <Route path='/application' component={ApplicationContainer} />
            <Route path='/acceuil-admin' component={AccueilAdminContainer} />
            <Route exact path='/infoEtudiant' component={TousInfoEtudiantContainer} />
            <Route path='/infoEtudiant/:idUser' component={TousInfoEtudiantContainer} />
            <Route path='/inscription' component={InscriptionContainer} />
            <Route path='/etudiants' component={AdminTousEtudiantContainer} />
            <Route path='/etudiants-by-statut/:statut' component={EtudiantsByStatutContainer} />
            <Route path='/creation' component={CreationApplicationContainer} />
            <Route path='/modification' component={ModifyApplicationContainer} />

        </Switch>
    </BrowserRouter>
)

export default App
