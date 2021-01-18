import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/Homepage.css";
import Cardservice from "./Cardservice";
import {Link, Redirect} from 'react-router-dom'
import { useSelector } from "react-redux";
const Homepage = () => {
  const isAuth = useSelector(state=>state.userReducer.token);

  const cardList = [
    {
      id: "1",
      title: "Création des devis",
      desc:
        "Générez devis et factures gratuitement. Dupliquez les documents ou transformez-les. Exportez-les sous différents formats. Chaque document est rattaché à un client. Obtenez facilement une vision d'ensemble !",
      class: "fas fa-file-invoice-dollar fa-5x",
    },
    {
      id: "2",
      title: "Gestion des clients",
      desc:
        "Un véritable CRM au sein de votre outil de facturation gratuit. Ajoutez, supprimez et modifiez vos clients. Ajoutez des informations, rentrez votre activité au fur et à mesure (appels, rendez-vous, emails) et ajoutez des devis, des factures, des avoirs et même des opportunités d'affaire.",
      class: "far fa-user fa-5x",
    },
    { id: "3", title: "Opportunités d'affaires", desc: "Les opportunités d'affaire permettent une visibilité claire de votre prévisionnel de chiffre d'affaires. C'est une fonction CRM puissante. Rentrez juste pour chaque client les projets que vous pensez pouvoir signer puis précisez simplement le montant du projet et le pourcentage de chance de le remporter !", class: "fas fa-sort-amount-up fa-5x" },
    { id: "4", title: "Exporter tout en un clic", desc: "Vous pouvez exporter vos factures et vos devis en un seul clic. Fonctionnement idéal pour transmettre ses documents à un comptable ou à un client", class: "fas fa-file-export fa-5x" },
    { id: "5", title: "Moteur de recherche puissant", desc: "Trouvez facilement vos documents. Notre moteur de recherche vous permet de filtrer, de trouver et de sélectionner clients, devis et factures en quelques instants.", class: "fas fa-search fa-5x" },
    { id: "6", title: "Classement par catégories", desc: "Que ce soit pour améliorer le fonctionnement de votre CRM gratuit ou pour mieux classer votre comptabilité, le classement par catégorie permet de rassembler les devis, factures et clients selon une thématique ou une classe particulière.", class: "fas fa-sort-alpha-up fa-5x" },
  ];

  return (
    <>

   { isAuth ? 
   <Redirect to="/profile"/>
   :
   
   <div>
      <div className="homepage">
        <h1 className="titlehomepage">
          Votre outil de facturation et devis totalment gratuit !
        </h1>
        <br /><Link to='/register'  style={{ textDecoration: "none", color: "inherit" }}>
        <button className="btn btn-newbtn">Créez un compte</button></Link>

        <div className="d-flex container flex-row flex-wrap">
          {cardList.map(e=><Cardservice key={e.id} title={e.title} desc={e.desc} classid={e.class}/>)}
        </div>
      </div>
    </div>}
    
    </>
  );
};

export default Homepage;
