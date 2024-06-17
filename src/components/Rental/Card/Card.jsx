import './Card.css' 
import { Link } from 'react-router-dom';

function Card({ item }) {
    return (
                <Link to={`/host/${item.id}`} key={item.id} className='article'>
                    <img src={item.cover} className='cover-img' alt='cover'/>
                    <p className='title'>{item.title}</p>                 
                </Link>
    );
}

export default Card;