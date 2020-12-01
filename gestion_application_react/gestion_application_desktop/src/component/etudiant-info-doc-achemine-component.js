import React from 'react'

const InfoDocAchemineComponent = ({ applications }) => (
    <div>  {applications.map((application, index) =>
        <div key={index}>
            <div className='section'>

                <div className='column'>
                    <span className='each-info-borderCheck'>CV</span>
                    <input className='each-info-borderCheck' type='checkbox' id='cv' name='cv' defaultChecked={application.cv} />
                </div>

                <div className='column'>
                    <span className='each-info-borderCheck'>Lettre</span>
                    <input className='each-info-borderCheck' type='checkbox' id='cv' name='cv' defaultChecked={application.letre_motivation} />
                </div>

                <div className='column'>
                    <span className='each-info-borderCheck'>Releve de notes</span>
                    <input className='each-info-borderCheck' type='checkbox' id='cv' name='cv' defaultChecked={application.releve_note} />
                </div>

                <div className='column'>
                    <span className='each-info-borderCheck'>Référence</span>
                    <input className='each-info-borderCheck' type='checkbox' id='cv' name='cv' defaultChecked={application.lesreferences} />
                </div>
            </div>
        </div>)}
    </div>
)

export default InfoDocAchemineComponent
