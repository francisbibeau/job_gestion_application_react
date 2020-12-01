import React from 'react'

const InfoSpecificationsComponent = ({ applications }) => (
    <div>  {applications.map((application, index) =>
        <div key={index}>
            <div className='section'>
                <div className='column'>
                    <span className='each-info-border'>Titre du poste</span>
                    <input className='each-info-border2' type='text' id='titrePoste' name='titrePoste' placeholder={application.titre_du_poste} />
                </div>
                <div className='column'>

                    <span className='each-info-border'>Description du poste</span>
                    <input className='each-info-border2' type='text' id='description' name='description' placeholder={application.description_poste} />
                </div>
                <div className='column'>

                    <span className='each-info-border'>Language/Technologies principales</span>
                    <input className='each-info-border2' type='text' id='languageTech' name='languageTech' placeholder ={application.language_utilise} />

                </div>
                <div className='column'>
                    <span className='each-info-border'>Numero de reference</span>
                    <input className='each-info-border2' type='text' id='numeroRef' name='numeroRef' placeholder={application.numero_reference} />

                </div>
                <div className='column'>

                    <span className='each-info-border'>Rémunération</span>
                    <input className='each-info-border2' type='text' id='remuneration' name='remuneration' placeholder={application.remuneration} />
                </div>
                <div className='column'>

                    <span className='each-info-border'>Date de fin d'affichage</span>
                    <input className='each-info-border2' type='dateFin' id='dateFin' name='dateFin' placeholder={application.date_fin_affichage} />

                </div>
                <div className='column'>

                    <span className='each-info-border'>Comment j'ai trouvé ce poste</span>
                    <input className='each-info-border2' type='infoTrouvaille' id='infoTrouvaille' name='infoTrouvaille' placeholder={application.source_poste} />
                </div>
            </div>
        </div>)}
    </div>

)

export default InfoSpecificationsComponent
