import Header from '../../components/Header/Header.jsx';
import Carrousel from '../../components/Carrousel/Carrousel.jsx';
import '../../components/Accordion/Accordion.css'
import Description from '../../components/Description/Description.jsx';
import Footer from '../../components/Footer/Footer.jsx';

function Host () { 
    return (
        <div>
            <Header/>
            <Carrousel/>
            <Description/>
            <Footer/>
        </div>
    )
}

export default Host;