import { useParams } from "react-router-dom";
import Error404 from '../404/404.jsx'
import Logement from '../../components/Rental/logement.jsx'
import jsonData from '../../data/logements.json'
import '../../components/Rental/Full/Full.css'
import Header from '../../components/Header/Header.jsx'
import Carrousel from '../../components/Carrousel/Carrousel.jsx'
import Footer from '../../components/Footer/Footer.jsx'

function Host () {

    const { id } = useParams();
    const data = jsonData;

  // On trouve l'objet avec l'ID correspondant
    const item = data.find((item) => item.id === id);
    if (!item) {
        return (<Error404/>)
    }
    return (
        <div>
            <Header/>
            <Carrousel/>
            <Logement Logement={item} mode="Full"/>
            <Footer/>
        </div>
    )  
}

export default Host;