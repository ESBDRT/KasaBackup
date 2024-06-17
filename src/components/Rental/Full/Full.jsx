import Accordion from '../../Accordion/Accordion'
import { FaStar } from "react-icons/fa"


function Full({ item }) {
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
      <div className='Accordion-host-div style'>
        <Accordion title='Description' content={item.description}/>
        <Accordion title='Equipments' content={equipmentsList}/>
      </div>
    </div>
  ); 
}
  export default Full;