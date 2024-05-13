import Header from '../../components/Header/Header.jsx';
import AboutBanner from '../../components/Banner/AboutBanner.jsx';
import Accordion from '../../components/Accordion/Accordion.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import './about.css';


function About() {
  return (
    <div>
      <Header/>
      <AboutBanner/>
      <div className='Accordion-div'>
      <Accordion title='Fiabilité' content='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'/>
      <Accordion title='Respect' content='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'/>
      <Accordion title='Service' content='Le service blabla..'/>
      <Accordion title='Sécurité' content='La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l&apos;hôte qu&apos;au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'/>
      </div>
      <div>
      <Footer/>
      </div>
    </div>
  );
}

export default About;