import React from 'react'

const InfoEntretientSuiviComponent = ({ applications }) => (

    <div>  {applications.map((application, index) =>
        <div key={index}>
            <div className='section'>
                <div className='column'>
                    <span className='dateEntretient'>Date de l'entretient</span>
                    <input className='dateEntretient2' type='text' id='description' name='description' placeholder={application.date_entretien} />
                </div>
                <div className='column'>
                    <span className='dateEntretient'>Courriel de remerciement</span>
                    <input className='dateEntretient2' type='text' id='description' name='description' placeholder={application.courriel_remerciement_st} />
                </div>
                <div className='column'>
                    <span className='dateEntretient'>Invitation Linked</span>
                    <input className='dateEntretient2' type='text' id='description' name='description' placeholder={application.invitation_linkedin_st} />
                </div>
                <div className='column'>
                    <span className='dateEntretient'>Courriel/Appel de suivi/Interet</span>
                    <input className='dateEntretient2' type='text' id='description' name='description' placeholder={application.courriel_ouappel_suivie_st} />
                </div>
            </div>
        </div>)}
    </div>
)

export default InfoEntretientSuiviComponent
