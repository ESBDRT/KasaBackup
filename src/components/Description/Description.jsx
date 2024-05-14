import jsonData from '../../data/logements.json';
import { useParams } from 'react-router-dom';
import Accordion from '../..//components/Accordion/Accordion.jsx';
import './Description.css'
import { FaStar } from "react-icons/fa";
import Error404 from '../../pages/404/404.jsx';
import { Navigate } from 'react-router-dom';

function Description() {

  // On récupére l'ID dans l'url et on défini une constante qui représente notre json
  const { id } = useParams();
  const data = jsonData;

  // On trouve l'objet avec l'ID correspondant
  const item = data.find((item) => item.id === id);

  // Si l'item avec l'ID correspondant n'est pas trouvé, alors on redirige sur la page d'erreur
  if (!item) {
    return (
      <Navigate to="../..pages/404/404.jsx" />
    )
  }
  
  // On récupére les tags, on les mets dans un tableau
  const tags = item.tags || [];
  const tagElements = tags.map((tag, index) => (
    <p className="tag" key={index}>
      {tag}
    </p>
  ));
  // On récupére les equipments, on les mets dans un tableau
  const equipments = item.equipments || [];
  const equipmentsList = equipments.map((equipment, index) => (
    <li key={index}>
      {equipment}
    </li>
  ));

  // On récupére l'entier qui correspond a la notation
  const rating = parseInt(item.rating);

  // La boucle for itére sur chaque étoile, et ajoute une classe
  // si l'index est inférieur au rating
  const renderStars = (rating) => {
    const stars = [];
    
    for (let i = 0; i < 5; i++) {
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