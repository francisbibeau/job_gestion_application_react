import React from 'react'
import { Link } from 'react-router-dom'
import BellIcon from 'react-bell-icon'

const EntrevueEnPersonneSuiviComponent = ({ applications, handleOnClickModify, change, isAdmin, updatesuivie }) => (

    <div>  {applications.map((application, index) =>
        <div key={index}>

            <div className='section'>
                <div className='column'>
                    <span className='dateEntretient'>Date de l'entrevue</span>
                    <input className='dateEntretient2' type='dateEntrevue' id='dateEntrevue' name='dateEntrevue' placeholder={application.date_entrevue} />
                </div>
                <div className='column'>
                    <span className='dateEntretient'>Couriel de remerciment</span>
                    <input className='dateEntretient2' type='text' id='remerciement' name='remerciement' placeholder={application.courriel_remerciement} />
                </div>
                <div className='column'>
                    <span className='dateEntretient'>Invitation LinkedIn</span>
                    <input className='dateEntretient2' type='text' id='description' name='description' placeholder={application.invitation_linkedin} />
                </div>

                <div className='column'>
                    <span className='dateEntretient'>Courriel/Appel de suivi</span>
                    <input className='dateEntretient2' type='text' id='description' name='description' placeholder={application.courriel_ouappel_suivie} />
                </div>
                <div className='column'>
                    <span className='dateEntretient'>Commentaire</span>
                    <input className='' type='text' id='description' name='description' placeholder={application.commentaire} />

                </div>
                <div className='column'>
                    <Link to='/modification'> <button className='dateEntretient' style={{ borderRadius: '100px 100px 100px 100px', backgroundColor: '#FF0000', width: '100px' }} value={application.id} onClick={handleOnClickModify}>Modifier </button></Link>
                </div>
                <div value={application.etat_suivie}>
                    {!isAdmin && application.etat_suivie ? <BellIcon width='40' color='#FF0000' active animate /> : ''}
                </div>

            </div>

        </div>)}
    </div>
)

export default EntrevueEnPersonneSuiviComponent
