/*  import * as React from 'react'
>>>>>>> 82a4c60071eb08d6360875d5b3e7720bb4188f8c
=======
/* import * as React from 'react'
>>>>>>> 35044b4c6b55f8e055814d73c2e5e527c9518bc5
import * as ReactDOM from 'react-dom'

import AdminTousEtudiantContainer from 'container/admin-tous-les-etudiants-container'
import InscriptionContainer from 'container/inscription-container'
import ApplicationContainer from 'container/application-container'
import TousInfoEtudiantContainer from 'container/affichage-tous-info-container'
import CreationApplicationContainer from 'container/creation-application-container'

// console.log('Execution JavaScript du fichier main.js produit par webpack et chargé par le fichier index.html')

ReactDOM.render(
    <CreationApplicationContainer />,
    document.getElementById('app')
) */

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './container/app'

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
