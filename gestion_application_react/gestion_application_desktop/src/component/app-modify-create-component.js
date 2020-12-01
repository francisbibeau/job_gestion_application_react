import React from 'react'

const CreateModifyComponent = ({
    application,
    type, id,
    getDate,
    getNomEntreprise,
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
    lesreferences
}
) => (
    <form className='creation-component' onSubmit={soumettre}>
        <div className='categorie-vide'>
            <fieldset>
                <legend>Informations Generales de l'application</legend>
                <label htmlFor={id} />
                <div>
                    <label htmlFor={id}>Date</label>
                    <input type='date' name='string' onChange={getDate} />
                </div>
                <div>
                    <label>Nom de l'Entreprise</label>
                    <input type='text' onChange={getNomEntreprise} />
                </div>
                <div>
                    <label>Nom du Contact De l'Entreprise</label>
                    <input type='text' onChange={getNomContactDeEntreprise} />
                </div>
                <label>Telephone</label>
                <input type='telephone' onChange={getTelephone} />
                <div>
                    <label>Email</label>
                    <input type='email' onChange={getEmail} />
                </div>
                <div>
                    <label>Linkedin</label>
                    <input type='text' onChange={getLinkedin} />
                </div>
                <div>
                    <label>Address</label>
                    <input type='text' onChange={getAdresse} />
                </div>
            </fieldset>

            <fieldset>
                <legend>Informations specifique de l'application</legend>
                <div>
                    <label>TitreDuPoste</label>
                    <input type='text' onChange={geTitreDuPosteTitre} />
                </div>
                <div>
                    <label>Description du Poste</label>
                    <input type='text' onChange={getDescriptionPsote} />
                </div>
                <div>
                    <label>Language Utilise</label>
                    <input type='text' onChange={getLanguageUtilise} />
                </div>
                <div>
                    <label>Numero de Reference</label>
                    <input type='text' onChange={getNumeroReference} />
                </div>
                <div>
                    <label>Remuneration</label>
                    <input type='number' onChange={getRemuneration} />
                </div>
                <div>
                    <label>Date de Fin d'Affichage</label>
                    <input type='date' name='string' onChange={getDateFinAffichage} />
                </div>
                <div>
                    <label>Source du Poste</label>
                    <input type='text' onChange={getSourcePoste} />
                </div>
                <div>
                    <label>Match du Poste</label>
                    <input type='text' onChange={getMatchPoste} />
                </div>

            </fieldset>

            <fieldset>
                <legend>Documents achemines</legend>
                <div>
                    <label>Cv</label>
                    <input type='Checkbox' onChange={getCv} />
                </div>
                <div>
                    <label>Lettre de motivation</label>
                    <input type='Checkbox' onChange={getLettre_motivation} />
                </div>
                <div>
                    <label>Releve de note</label>
                    <input type='Checkbox' onChange={getReleve_note} />
                </div>
                <div>
                    <label>Autres</label>
                    <input type='Checkbox' onChange={getAutres} />
                </div>
                <div>
                    <label>References</label>
                    <input type='Checkbox' onChange={getLesreferences} />
                </div>
            </fieldset>
            <fieldset>
                <legend>Suivie de l'application</legend>
                <div>
                    <label>Date suivie courriel</label>
                    <input type='text' onChange={getDateSuiviCourriel} />
                </div>
                <div>
                    <label>Date suivie par telephone</label>
                    <input type='text' onChange={getDateSuiviEnPersonne} />
                </div>
                <div>
                    <label>Date RelanceInternet</label>
                    <input type='text' onChange={getDateRelanceInternet} />
                </div>
            </fieldset>
            <fieldset>
                <legend>Suivie(Entretien) telephonique</legend>
                <div>
                    <label>DateEntretien</label>
                    <input type='text' onChange={getDateEntretien} />
                </div>
                <div>
                    <label>CourrielRemerciement</label>
                    <input type='text' onChange={getCourrielRemerciement} />
                </div>
                <div>
                    <label>InvitationLinkedIn</label>
                    <input type='text' onChange={getInvitationLinkedIn} />
                </div>
                <div>
                    <label>CourrielOuAppelDeSuivi</label>
                    <input type='text' onChange={getCourrielOuAppelDeSuivi} />
                </div>
            </fieldset>
            <fieldset>
                <legend>Suivie(Entrevue) en personne</legend>
                <div>
                    <label>DateEntrevue</label>
                    <input type='text' onChange={getDateEntrevue} />
                </div>
                <div>
                    <label>CourrielRemerciement</label>
                    <input type='text' onChange={getCourrielRemerciement2} />
                </div>
                <div>
                    <label>InvitationLinkedIn</label>
                    <input type='text' onChange={getInvitationLinkedIn2} />
                </div>
                <div>
                    <label>CourrielOuAppelSuivi</label>
                    <input type='text' onChange={getCourrielOuAppelDeSuivi2} />
                </div>
            </fieldset>
            <div>
                <label>Commentaire/Notes/Precisions</label>
                <input type='text' onChange={getCommentaire} />
            </div>
            <div className='btn_container'><button type='submit' className='ajouter'>AJOUTER</button></div>
        </div>

    </form>
)

export default CreateModifyComponent
