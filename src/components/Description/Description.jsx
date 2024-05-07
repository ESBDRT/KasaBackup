import jsonData from '../../data/logements.json';
import { useParams } from 'react-router-dom';
import Accordion from '../..//components/Accordion/Accordion.jsx';
import Footer from '../..//components/Footer/Footer.jsx';
import './Description.css'

function Description() {

    let { id } = useParams();
    const data = jsonData
    const title = data.find(item => item.id === id)?.title;
    const location = data.find(item => item.id === id)?.location;
    const tags = data.find(item => item.id === id)?.tags;
    const description = data.find(item => item.id === id)?.description;
    const equipments = data.find(item => item.id === id)?.equipments;
    
    return (
        <div>
            <div className='Description-div'>
                <h1 className='Red-text'>{title}</h1>
                <p className='location'>{location}</p>
                <p>{tags}</p>
            </div>
            <div className='Accordion-host-div'>
                <Accordion className='test' title='Description' content={description}/>
                <Accordion className='test' title='Equipments' content={equipments}/>
            </div>
            <Footer/>
        </div>
      ); 
}

export default Description;