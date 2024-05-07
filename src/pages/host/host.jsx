import { IoIosArrowForward } from "react-icons/io";
import Header from '../../components/Header/Header.jsx';
import Carrousel from '../../components/Carrousel/Carrousel.jsx';
import '../../components/Accordion/Accordion.css'
import Description from '../../components/Description/Description.jsx';
import Accordion from '../../components/Accordion/Accordion.jsx';


function Host () {
    return (
        <div>
            <Header/>
            <Carrousel/>
            <Description/>
        </div>
    )
}

export default Host;