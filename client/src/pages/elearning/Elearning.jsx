import React from 'react';
import Navbar from '../../components/navbar/Navbar'
import { Container, Row,Col } from "react-bootstrap";


const Elearning = () => {
    return (
<div className="elearning">
<Navbar/>
<div>
<Row>
    <Col>
      <h1 style={{marginTop:"20px",textIndent:"300px"}}>E-learning</h1>
      <hr/>
      <div style={{ color: "black", fontSize: "20px",textAlign: "justify",marginTop:"20px",textIndent:"40px" }}>
      <p>
        Afin de vous accompagner dans le développement de vos activités, NASR ACADEMY vous propose des modules de formation sur mesure garantissant l’implication des apprenants et un réel impact sur leurs performances.
      </p>
      <p>
      Le E-learning permettant le pilotage des enseignements à distance et la construction de ses cours en ligne c’est une démarche rigoureuse basée sur des méthodes pédagogiques éprouvées et met à votre service une connaissance métiers qui enrichit l’accompagnement de votre entreprise.
      </p>
      <p>NASR ACADEMY vous propose un large choix de formations 100% à distance.Nos formations à distance bénéficient des mêmes ressources et du même suivi que ceux utilisés en présentiel. Les cours, la pratique, et les exercices se font à distance, mais l’interaction avec le formateur reste notre engagement premier. L’utilisation de la plateforme est simple et son contenu est personnalisé pour chaque apprenant..
      </p>
      <p> En quête constante d’innovation, nous optons pour une innovation technologique en plein essor qu’est la Réalité Augmentée. Nous vous accompagnons pour donner du dynamisme à vos projets et réinventer votre façon de communiquer.</p>
      </div>
    </Col>
    <Col>
    <img
      className="d-block w-100"
      src="/logo.png"
      alt=""
      style={{border: "1px solid #ddd",
        borderRadius: "4px",
        padding: "10px",
        width: "40px",marginTop:"5px"}}
    />
    </Col>
    </Row>
  </div>
</div>
)
}
export default Elearning;