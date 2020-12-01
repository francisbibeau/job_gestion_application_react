import React from 'react'

const ModifyComponent = ({
    id, application, soumettreInfoGenerale, getDate, getNomEntreprise, soummettreCommentaire,
    getNomContactDeEntreprise,
    getTelephone,
    getEmail,
    getLinkedin,
    getAdresse,
    geTitreDuPosteTitre,
    getDescriptionPsote,
    getLanguageUtilise,
    getNumeroReference,
    getRemuneration,
    getDateFinAffichage,
    getSourcePoste,
    getMatchPoste,
    getCv,
    getLettre_motivation,
    getReleve_note,
    getAutres,
    getLesreferences,
    getDateSuiviCourriel,
    getDateSuiviEnPersonne,
    getDateRelanceInternet,
    getDateEntretien,
    getCourrielRemerciement,
    getInvitationLinkedIn,
    getCourrielOuAppelDeSuivi,
    getDateEntrevue,
    getCourrielRemerciement2,
    getInvitationLinkedIn2,
    getCourrielOuAppelDeSuivi2,
    getCommentaire,
    soumettre,
    cv,
    lettre_motivation,
    releve_not,
    autres,
    lesreferences,
    soumettreInfoSpecifique, soummetreDocAchemine, soummettreSuiviApplication, soummettreEntretientTelephonique, soummettreEntrevueEnPersonne
}) => (
    <div className='modificationBackground'>
        <form className='creation-component' onSubmit={soumettreInfoGenerale}>
            <div className='categorie-vide'>

                <fieldset>
                    <legend>Informations Generales de l'application</legend>
                    <label htmlFor={id} />
                    <div>
                        <label htmlFor={id}>Date</label>
                        <input type='date' name='string' defaultValue={application.date_application} onChange={getDate} />
                    </div>
                    <div>
                        <label>Nom de l'Entreprise</label>
                        <input type='text' name='fname' defaultValue={application.nom_de_lentreprise} onChange={getNomEntreprise} />
                    </div>
                    <div>
                        <label>Nom du ContactnDe l'Entreprise</label>
                        <input type='text' id='fname' name='fname' defaultValue={application.nom_contact_de_lentreprise} onChange={getNomContactDeEntreprise} />
                    </div>
                    <label>Telephone</label>
                    <input type='text' id='fname' name='fname' defaultValue={application.telephone} onChange={getTelephone} />
                    <div>
                        <label>Email</label>
                        <input type='text' id='fname' name='fname' defaultValue={application.email} onChange={getEmail} />
                    </div>
                    <div>
                        <label>Linkedin</label>
                        <input type='text' id='fname' name='fname' defaultValue={application.linkedin} onChange={getLinkedin} />
                    </div>
                    <div>
                        <label>Address</label>
                        <input type='text' id='fname' name='fname' defaultValue={application.addresse} onChange={getAdresse} />
                    </div>
                    <div className='btn_container'><button type='submit' name='modInfoGen' className='sinscrire'>Modifier</button></div>
                </fieldset>
            </div>
        </form>
        <form className='creation-component' onSubmit={soumettreInfoSpecifique}>
            <div className='categorie-vide'>
                <fieldset>
                    <legend>Informations specifique de l'application</legend>
                    <div>
                        <label>TitreDuPoste</label>
                        <input type='text' id='fname' name='fname' defaultValue={application.titre_du_poste} onChange={geTitreDuPosteTitre} />
                    </div>
                    <div>
                        <label>Description du Poste</label>
                        <input type='text' id='fname' name='fname' defaultValue={application.description_poste} onChange={getDescriptionPsote} />
                    </div>
                    <div>
                        <label>Language Utilise</label>
                        <input type='text' id='fname' name='fname' defaultValue={application.language_utilise} onChange={getLanguageUtilise} />
                    </div>
                    <div>
                        <label>Numero de Reference</label>
                        <input type='text' id='fname' name='fname' defaultValue={application.numero_reference} onChange={getNumeroReference} />
                    </div>
                    <div>
                        <label>Remuneration</label>
                        <input type='text' id='fname' name='fname' defaultValue={application.remuneration} onChange={getRemuneration} />
                    </div>
                    <div>
                        <label>Date de Fin d'Affichage</label>
                        <input type='date' id='fname' name='fname' defaultValue={application.date_fin_affichage} onChange={getDateFinAffichage} />
                    </div>
                    <div>
                        <label>Source du Poste</label>
                        <input type='text' id='fname' name='fname' defaultValue={application.source_poste} onChange={getSourcePoste} />
                    </div>
                    <div>
                        <label>Match du Poste</label>
                        <input type='text' id='fname' name='fname' defaultValue={application.match_poste} onChange={getMatchPoste} />
                    </div>
                    <div className='btn_container'><button type='submit' name='modInfoSpecifique' className='sinscrire'>Modifier</button></div>

                </fieldset>
            </div>

        </form>
        <form className='creation-component' onSubmit={soummetreDocAchemine}>

            <fieldset>
                <legend>Documents achemines</legend>
                <div>
                    <label>Cv</label>
                    <input type='Checkbox' name='fname' defaultChecked={application.cv} onChange={getCv} />
                </div>
                <div>
                    <label>Lettre de motivation</label>
                    <input type='Checkbox' name='fname' defaultChecked={application.letre_motivation} onChange={getLettre_motivation} />
                </div>
                <div>
                    <label>Releve de note</label>
                    <input type='Checkbox' name='fname' defaultChecked={application.releve_note} onChange={getReleve_note} />
                </div>
                <div>
                    <label>Autres</label>
                    <input type='Checkbox' name='' defaultChecked={application.autres} onChange={getAutres} />
                </div>
                <div>
                    <label>References</label>
                    <input type='Checkbox' name='' defaultChecked={application.lesreferences} onChange={getLesreferences} />
                </div>
                <div className='btn_container'><button type='submit' name='modDocAchemine' className='sinscrire'>Modifier</button></div>

            </fieldset>
        </form>
        <form className='creation-component' onSubmit={soummettreSuiviApplication}>

            <fieldset>
                <legend>Suivie de l'application</legend>
                <div>
                    <label>Date suivie courriel</label>
                    <input type='date' id='fname' name='fname' defaultValue={application.date_suivie_telephonique} onChange={getDateSuiviCourriel} />
                </div>
                <div>
                    <label>Date suivie par telephone</label>
                    <input type='date' id='fname' name='fname' defaultValue={application.date_suivie_en_personne} onChange={getDateSuiviEnPersonne} />
                </div>
                <div>
                    <label>Date RelanceInternet</label>
                    <input type='date' id='fname' name='fname' defaultValue={application.relance_interet} onChange={getDateRelanceInternet} />
                </div>
                <div className='btn_container'><button type='submit' name='modSuiviApp' className='sinscrire'>Modifier</button></div>

            </fieldset>
        </form>
        <form className='creation-component' onSubmit={soummettreEntretientTelephonique}>

            <fieldset>
                <legend>Suivie(Entretien) telephonique</legend>
                <div>
                    <label>DateEntretien</label>
                    <input type='date' id='fname' name='fname' defaultValue={application.date_entretien} onChange={getDateEntretien} />
                </div>
                <div>
                    <label>CourrielRemerciement</label>
                    <input type='date' id='fname' name='fname' defaultValue={application.courriel_remerciement_st} onChange={getCourrielRemerciement} />
                </div>
                <div>
                    <label>InvitationLinkedIn</label>
                    <input type='date' id='fname' name='fname' defaultValue={application.invitation_linkedin_st} onChange={getInvitationLinkedIn} />
                </div>
                <div>
                    <label>CourrielOuAppelDeSuivi</label>
                    <input type='date' id='fname' name='fname' defaultValue={application.courriel_ouappel_suivie_st} onChange={getCourrielOuAppelDeSuivi} />
                </div>
                <div className='btn_container'><button type='submit' name='modEntretientTel' className='sinscrire'>Modifier</button></div>

            </fieldset>
        </form>
        <form className='creation-component' onSubmit={soummettreEntrevueEnPersonne}>

            <fieldset>
                <legend>Suivie(Entrevue) en personne</legend>
                <div>
                    <label>DateEntrevue</label>
                    <input type='date' id='fname' name='fname' defaultValue={application.date_entrevue} onChange={getDateEntrevue} />
                </div>
                <div>
                    <label>CourrielRemerciement</label>
                    <input type='date' id='fname' name='fname' defaultValue={application.courriel_remerciement} onChange={getCourrielRemerciement2} />
                </div>
                <div>
                    <label>InvitationLinkedIn</label>
                    <input type='date' id='fname' name='fname' defaultValue={application.invitation_linkedin} onChange={getInvitationLinkedIn2} />
                </div>
                <div>
                    <label>CourrielOuAppelSuivi</label>
                    <input type='date' id='fname' name='fname' defaultValue={application.courriel_ouappel_suivie} onChange={getCourrielOuAppelDeSuivi2} />
                </div>
                <div className='btn_container'><button type='submit' name='suiviEntrevue' className='sinscrire'>Modifier</button></div>
            </fieldset>
        </form>
        <form className='creation-component' onSubmit={soummettreCommentaire}>

            <div>
                <label>Commentaire/Notes/Precisions</label>
                <input type='text' id='fname' name='fname' defaultValue={application.commentaire} onChange={getCommentaire} />
            </div>
            <div className='btn_container'><button type='submit' className='sinscrire'>Modifier</button></div>
        </form>

    </div>

)

export default ModifyComponent
