import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../../components/navbar/Navbar";

function Resources (){
  return (
    <div className="resources">
      <Navbar/>
      <Container>
        <Row>
          <Col>
            <div>
              <h1 style={{ color: "black", fontSize: "50px" }}>Engagement Qualité</h1>
              <hr />
              <p style={{ textAlign: "justify" }}>
              La plateforme d’enseignement NASR ACADEMY soutient l'enseignement et l'apprentissage en ligne.

Elle permet aux étudiant-e-s d'accéder aux supports de cours ainsi qu'aux activités (QCM, forums de discussion, remise de travaux, travail collaboratif, etc.) mis en ligne par leurs enseignant-e-s. 
              </p>
              <h5>ACCESSIBILITÉ: </h5>
              <p style={{ textAlign: "justify" }}>
                L’ensemble des cours, des supports pédagogiques et énoncés des épreuves est diffusé exclusivement en ligne.

L’APPRENANT accède, par Internet, 24 heures sur 24 et 7 jours sur 7, à la plateforme de NASR ACADEMY mise à sa disposition par NASR ACADEMY en indiquant son identifiant et le mot de passe qui lui sont transmis par NASR ACADEMY.

L’accès est possible depuis n’importe quel ordinateur équipé d’un navigateur Internet Mozilla Firefox ou Google Chrome et connecté à Internet.
              </p>
              <h5>RESPONSABILITE ET ASSURANCES: </h5>
              <p style={{ textAlign: "justify" }}>
              NASR ACADEMY est tenu à une obligation de moyen.

En aucun cas NASR ACADEMY ne saurait être tenu responsable d’un défaut total ou partiel de connexion Internet qui ne lui serait pas imputable ou de la non maîtrise ou des pannes du matériel informatique de l’APPRENANT.

NASR ACADEMY souscrit et maintient en cours de validité les polices d’assurance nécessaires pour garantir les éventuels dommages aux biens ou aux personnes qui pourraient survenir dans le cadre de l’exécution des présentes.
              </p>
            </div>
          </Col>
          <Col>
            <div className="aboutUsElement">
            <p style={{ textAlign: "justify",marginTop:"10px" }}>
            Un accompagnement et un positionnement individualisé dès la première prise de contact.
              La confidentialité des informations qui lui sont transmises à toutes étapes des parcours.
              La mise à niveau permanente de ses méthodes et outils pédagogiques.
              Une accessibilité totale aux personnes en situation de handicap en conformité (en e-learning).
              De veiller à ce que nos pratiques s’inscrivent dans une démarche respectueuse du développement durable.  
              </p>
            </div>
            <img
      className="d-block w-100"
      src="https://image.jimcdn.com/app/cms/image/transf/dimension=282x10000:format=jpg/path/sfae7560db735c964/image/i6219c6f7d44cc8bf/version/1481475796/image.jpg"
      alt=""
      style={{border: "1px solid #ddd",
        borderRadius: "4px",
        padding: "10px",
        width: "40px",marginTop:"5px"}}
    />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Resources;