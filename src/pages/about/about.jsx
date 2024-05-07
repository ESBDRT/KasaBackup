import Header from '../../components/Header/Header.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import Accordion from '../../components/Accordion/Accordion.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import './about.css';

function About() {
  return (
    <div>
      <Header/>
      <Banner/>
      <div className='Accordion-div'>
      <Accordion title='Fiabilité' content='La fiabilité blabla..'/>
      <Accordion title='Respect' content='Le respect blabla..'/>
      <Accordion title='Service' content='Le service blabla..'/>
      <Accordion title='Sécurité' content='La sécurité blabla..'/>
      </div>
      <div className='Footer-div'>
      <Footer/>
      </div>
    </div>
  );
}

export default About;