import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";

const About = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <br />
      <div className="aboutContainer">
        <div className="aboutTextContainer">
          <h1 className="welcomeAbout">
            Bienvenue sur notre Application "InfosPays" !
          </h1>
          <p>
            Notre application a pour objectif de vous offrir un aperçu détaillé
            sur chaque pays à travers le monde. Que vous cherchiez des
            informations sur la superficie, la localisation continentale, ou
            simplement à découvrir de nouveaux drapeaux, nous sommes là pour
            vous.
          </p>
          <p>Ce que nous offrons :</p>

          <div className="aboutCard">
            1. Exploration Mondiale : Découvrez et explorez tous les pays du
            globe, leurs drapeaux, et leurs données essentielles en un seul
            endroit.
          </div>
          <p>
            2. Informations Complètes : Accédez à une mine d'informations,
            incluant la localisation continentale, la superficie, la capitale,
            et bien plus encore.
          </p>
          <p>
            3. Informations Complètes : Accédez à une mine d'informations,
            incluant la localisation continentale, la superficie, la capitale,
            et bien plus encore.
          </p>

          <p>Ce qui nous motive :</p>
          <p>
            Nous avons créé cette application avec une motivation simple :
            combler le fossé de connaissance sur les pays du monde. Souvent, des
            pays restent méconnus, et notre but est de rendre ces informations
            accessibles à tous, de manière claire et concise.
          </p>
          <p> Notre Engagement : </p>
          <p>
            Nous nous engageons à fournir un service de qualité, une expérience
            utilisateur agréable, et à continuer d'enrichir notre base de
            données pour vous offrir des informations actualisées.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
