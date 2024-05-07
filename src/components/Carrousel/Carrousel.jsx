import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useParams } from 'react-router-dom';
import jsonData from '../../data/logements.json';
import './Carrousel.css';

function Carrousel() {
  let { id } = useParams();
  const data = jsonData;
  const pictures = data.find(item => item.id === id)?.pictures;
  const [currentPicture, setCurrentPicture] = React.useState(0);

  const handleNextPicture = () => {
    setCurrentPicture((prevPicture) => (prevPicture + 1) % pictures.length);
  };

  const handlePreviousPicture = () => {
    setCurrentPicture((prevPicture) => (prevPicture - 1) % pictures.length);
  };

  return (
    <div className='host-carrousel'>
      {pictures?.map((picture, index) => (
        <img className='pictures'key={index} src={picture} alt={`picture-${index}`} style={{ display: index === currentPicture? 'block' : 'none' }} />
      ))}
      <IoIosArrowBack className='arrow-left'/>
      <IoIosArrowForward className='arrow-right' onClick={handleNextPicture} />
    </div>
  );
}

export default Carrousel;