import React from 'react'
import BellIcon from 'react-bell-icon'

const InformationsEtudiantomponent = ({ applications, onChangeCheckbox, valueAppToDelete, color, change, isAdmin, updatesuivie }) => (

    <div>  {applications.map((application, index) =>
        <div key={index}>
            <div className='section'>
                <div>
                    {isAdmin ? <BellIcon onClick={() => { change(), updatesuivie(application.id) }} value={application.etat_suivie} width='40' color={color} active /> : ''}
                </div>

                <div>
                    <input type='checkbox' name={application.id} onChange={onChangeCheckbox} />
                </div>
                <div className='column'>
                    <span className='each-info-border'>Date Application</span>
                    <input className='each-info-border2' type='text' id='dateApp' name='dateApp' placeholder={application.date_application} />
                </div>
                <div className='column'>

                    <span className='each-info-border'>Nom de l'entreprise</span>
                    <input className='each-info-border2' type='text' id='nomEntreprise' name='nomEntreprise' placeholder={application.nom_de_lentreprise} />
                </div>
                <div className='column'>

                    <span className='each-info-border'>Nom du contact</span>
                    <input className='each-info-border2' type='text' id='nomContact' name='nomContact' placeholder={application.nom_contact_de_lentreprise} />
                </div>
                <div className='column'>
                    <span className='each-info-border'>Telephone</span>
                    <input className='each-info-border2' type='text' id='telephone' name='telephone' placeholder={application.telephone} />
                </div>
                <div className='column'>
                    <span className='each-info-border'>Email</span>
                    <input className='each-info-border2' type='text' id='hotmail' name='hotmail' placeholder={application.email} />
                </div>
                <div className='column'>
                    <span className='each-info-border'>Linked</span>
                    <input className='each-info-border2' type='text' id='linkedin' name='linkedin' placeholder={application.linkedin} />
                </div>
                <div className='column'>
                    <span className='each-info-border'>Addresse</span>
                    <input className='each-info-border2' type='text' id='address' name='addresse' placeholder={application.addresse} />
                </div>
            </div>
        </div>)}
    </div>
)

export default InformationsEtudiantomponent
