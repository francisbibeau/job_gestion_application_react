import React from 'react'

const InfoSuiviAppEtudiant = ({ applications }) => (

    <div>  {applications.map((application, index) =>
        <div key={index}>
            <div className='section'>
                <div className='column'>
                    <span className='each-info-suivi'>Suivi Courriel</span>
                    <input className='each-info-suivi2' type='text' id='suiviCourriel' name='suiviCourriel' placeholder={application.date_suivie_en_personne} />

                </div>
                <div className='column'>

                    <span className='each-info-suivi'>Suivi Telephonique</span>
                    <input className='each-info-suivi2' type='text' id='suiviTel' name='suiviTel' placeholder={application.date_suivie_telephonique} />

                </div>

                <div className='column'>

                    <span className='each-info-suivi'>Relance Interet</span>
                    <input className='each-info-suivi2' type='relance' id='relance' name='relance' placeholder={application.relance_interet} />

                </div>
            </div>
        </div>)}
    </div>
)

export default InfoSuiviAppEtudiant
