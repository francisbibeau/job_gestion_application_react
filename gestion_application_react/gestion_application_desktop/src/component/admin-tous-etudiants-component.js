import React from 'react'
import CategorieVide from './categorie-vide-component'
import { Link } from 'react-router-dom'

const AdminTousEtudiantsComponent = ({ programmes, etudiants, onClickBtnTous, onClickProgramme, onClickStatut, onChangeStatut }) => (
    <div>
        <div className='tous-cours-container'>
            <button onClick={onClickBtnTous} className='bouton-choix-cours'>Tous</button>
            {programmes.map((programme, index) => <button onClick={onClickProgramme} className='bouton-choix-cours' key={index} value={programme.id}>{programme.nom}</button>)}
        </div>

        {etudiants.length === 0 ? <CategorieVide type='etudiants' />
            : <div>
                <div className='nom-prenom-status'>
                    <p>Prenom</p>
                    <p>Nom</p>
                    <p>Statut</p>
                </div>

                {etudiants.map((etudiant, index) =>
                    <div key={index} className='nom-prenom-status-valeur'>
                        <Link to={'/infoEtudiant/' + etudiant.id}><p>{etudiant.prenom} </p></Link>
                        <p>{etudiant.nom} </p>

                        <input type='checkbox' value={etudiant.status} defaultChecked={etudiant.status} onChange={onChangeStatut} onClick={onClickStatut} name={etudiant.id} />
                    </div>)}
            </div>}
    </div>

)
export default AdminTousEtudiantsComponent
