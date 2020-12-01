import React from 'react'
import { Link } from 'react-router-dom'
import '../css/tous-etudiants.css'
import CategorieVide from './categorie-vide-component'

const EtudiantsByStatut = ({ etudiants }) => (
    <div>
        {etudiants.length === 0 ? <CategorieVide type='etudiants' />
            : <div>
                <div className='nom-prenom-status'>
                    <p>Nom</p>
                    <p>Programme</p>
                </div>
                {etudiants.map((etudiant, i) =>
                    <div key={i} className='nom-prenom-status-valeur'>
                        <Link to={'/infoEtudiant/' + etudiant.id}><p>{etudiant.prenom + ' ' + etudiant.nom}</p></Link>
                        <p>{etudiant.nom_programme}</p>
                    </div>
                )}
            </div>}
    </div>
)

export default EtudiantsByStatut
