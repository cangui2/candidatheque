create referentiel_code_rom (
    code_rome varchar(255) ,
    code_fiche_em varchar(255),
    code_ogr_metier varchar(255) PRIMARY KEY,
    libelle_rome varchar(255),
    statut varchar(255)
);

create table liens_rome_referentiels (
    code_rome varchar(255) ,
    code_ogr_metier varchar(255) PRIMARY KEY,
    code_ref_rubrique varchar(255) ,
    position_bloc varchar(255) ,
    code_type_referentiel varchar(255) ,
    code_compo_bloc varchar(255) ,
    position_item varchar(255) ,
    id_priorisation varchar(255)
);

create table referentiel_env_travail (
    code_ogr_env varchar(255) PRIMARY KEY,
    libelle_env_travail varchar(255),
    code_type_section_env_trav varchar(255), -- 1, 2, 3
    libelle_type_section_env_trav varchar(255), -- 1=structures, 2=secteurs, 3=conditions
    statut varchar(255)
);

create table referentiel_competences (
    code_ogr_competence varchar(255) PRIMARY KEY,
    libelle_competence varchar(255),
    code_type_competence varchar(255), -- 1=savoir théorique
    libelle_type_competence varchar(255),
    statut varchar(255)
);

create table referentiel_activite (
    code_ogr_activite varchar(255) PRIMARY KEY,
    code_tete_rgpmt varchar(255),
    libelle_activite varchar(255),
    libelle_activite_impression varchar(255),
    code_type_activite varchar(255), --2=activité de base == savoir faire
    libelle_type_activite varchar(255),
    code_type_item_activite varchar(255),
    libelle_type_item_activite varchar(255),
    statut varchar(255)
);

-- liste des metiers par code rome
create table referentiel_appelation (
    code_ogr_appelation varchar(255) PRIMARY KEY,
    libelle_appellation_long varchar(255),
    libelle_appellation_court varchar(255),
    code_rome varchar(255),
    code_type_section_appellation varchar(255),
    libelle_type_section_appellation varchar(255),
    statut varchar(255)
);

create table type_referentiel (
    code_type_referentiel varchar(255) PRIMARY_KEY,
    code_type_particulier varchar(255),
    libelle_type_referentiel varchar(255),
    nom_table_corresp_arbre varchar(255),
    nom_table_referentiel varchar(255)
);

-- definitions/acces au metier/conditions d'exercice
create table texte (
    code_rome varchar(255),
    position_libelle_txt varchar(255),
    code_type_texte varchar(255), -- 1=definition, 2=acces à l'emploi, 3=conditions d'exercice de l'activité
    libelle_texte varchar(255),
    libelle_type_texte varchar(255)
);

create table rubrique_mobilite (
    code_rome varchar(255),
    code_rome_cible varchar(255),
    code_appellation_source varchar(255),
    code_appellation_cible varchar(255),
    code_type_mobilite varchar(255), -- 1=PROCHE, 2=EVOLUTION
    libelle_type_mobilite varchar(255) --
);

create table item_arborescence (
    code_ogr_item varchar(255) PRIMARY KEY,
    code_type_referentiel varchar(255),
    code_pere varchar(255),
    code_noeud varchar(255),
    libelle_item_arbo varchar(255),
    code_item_arbo_associe varchar(255), -- code_ogr_metier
    code_type_noeud varchar(255),
    libelle_type_noeud varchar(255),
    statut varchar(255),
);

create table composition_bloc (
    code_compo_bloc varchar(255),
    libelle_bloc varchar(255),
    type_referentiel varchar(255) -- code_type_referentiel
);

create table descriptif_rubrique (
    code_ref_rubrique varchar(255),
    code_type_referentiel varchar(255),
    code_compo_bloc varchar(255),
    position_bloc varchar(255),
    libelle_ref_rubrique varchar(255)
);

create table grand_domaine (
    code_grand_domaine varchar(255),
    libelle_grand_domaine varchar(255)
);

create table domaine_professionnel (
    code_domaine_professionnel varchar(255),
    libelle_domaine_professionnel varchar(255)
);

create table cr_gd_dp (
    code_rome varchar(255),
    libelle_rome varchar(255),
    code_grand_domaine varchar(255),
    libelle_grand_domaine varchar(255),
    code_domaine_professionel varchar(255),
    libelle_domaine_professionel varchar(255)
);

-- liste competences/activités
create table item (
    code_ogr_competence_ou_activite varchar(255),
    libelle varchar(255),
    code_type_referentiel varchar(255),
    code_ref_rubrique varchar(255),
    code_tete_rgpmt varchar(255),
    libelle_activite_impression varchar(255),
    libelle_en_tete_regroupement varchar(255)
);

-- lien rome -- item
create table coherence_item (
    code_rome varchar(255),
    code_ogr_competence_ou_activite varchar(255)
);


create table cr_gd_dp_appelations (
    code_grand_domaine varchar(255),
    code_domaine_professionnel varchar(255),
    numero_fiche_rome varchar(255),
    intitule varchar(255),
    libelle_appellation_long varchar(255),
    libelle_appellation_court varchar(255),
    type_provenance varchar(255),
    code_fiche varchar(255),
    ogr_rome varchar(255),
    ogr_appellation varchar(255),
    priorisation varchar(255)
);
