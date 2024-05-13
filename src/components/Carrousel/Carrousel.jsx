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

  const NextPicture = () => {
    setCurrentPicture((prevPicture) => (prevPicture + 1) % pictures.length);
  };
  
  const PreviousPicture = () => {
    setCurrentPicture((prevPicture) => prevPicture === 0 ? pictures.length - 1 : prevPicture - 1);
  };

  return (
    <div className='host-carrousel'>
      {pictures?.map((picture, index) => (
        <img className='pictures'key={index} src={picture} alt={`picture-${index}`} style={{ display: index === currentPicture? 'block' : 'none' }} />
      ))}
      <IoIosArrowBack className='arrow-left' onClick={PreviousPicture}/>
      <IoIosArrowForward className='arrow-right' onClick={NextPicture} />
    </div>
  );
}

export default Carrousel;