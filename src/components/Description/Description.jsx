import jsonData from '../../data/logements.json';
import { useParams } from 'react-router-dom';
import Accordion from '../..//components/Accordion/Accordion.jsx';
import './Description.css'
import { FaStar } from "react-icons/fa";

function Description() {
  const { id } = useParams();
  const data = jsonData;

  const item = data.find((item) => item.id === id);

  const tags = item.tags || [];
  const tagElements = tags.map((tag, index) => (
    <p className="tag" key={index}>
      {tag}
    </p>
  ));

  const equipments = item.equipments || [];
  const equipmentsList = equipments.map((equipment, index) => (
    <li key={index}>
      {equipment}
    </li>
  ));

  const rating = parseInt(item.rating);

  // Function to render stars with appropriate classes
  const renderStars = (rating) => {
    const stars = [];
    // Iterate over each star
    for (let i = 0; i < 5; i++) {
      // Check if current star should be red
      const starClass = i < rating ? "red-star" : "";
      stars.push(<FaStar key={i} className={`star ${starClass}`} />);
    }
    return stars;
  };

  return (
    <div>
        <div className='container'>
          <div className='left'>
            <h1 className='Red-text host-title'>{item.title}</h1>
            <p className='location'>{item.location}</p>
            <div className='tags'>
              {tagElements}
            </div>
          </div>
          <div className='right'>
            <p className='Red-text name'>{item.host.name}</p>
            <img src={item.host.picture} className='host-picture' alt="host-picture" />
          </div>
        </div>
        <div className='star-div'>
          {renderStars(rating)}
          </div>
        <div className='Accordion-host-div'>
            <Accordion className='test' title='Description' content={item.description}/>
            <Accordion className='test' title='Equipments' content={equipmentsList}/>
        </div>
    </div>
  ); 
}

export default Description;