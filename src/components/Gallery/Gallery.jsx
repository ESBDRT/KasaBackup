import './Gallery.css' 
import jsonData from '../../data/logements.json';
import { Link } from 'react-router-dom';

function Gallery() {
    return (
        <div className='Gallery'>
            {jsonData.map((item) => (
                <Link to={`/host/${item.id}`} key={item.id} className='article'>
                    <img src={item.cover} className='cover-img' alt='cover'/>
                    <p className='title'>{item.title}</p>                 
                </Link>
            ))}
        </div>
    );
}

export default Gallery;