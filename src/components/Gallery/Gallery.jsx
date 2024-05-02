import './Gallery.css' 
import jsonData from '../../data/logements.json';

function Gallery() {
    return (
        <div className='Gallery'>
            {jsonData.map((item) => (
                <article key={item.id} className='article'>
                    <img src={item.cover} className='cover-img' alt='cover'/>
                    <p className='title'>{item.title}</p>                 
                </article>
            ))}
        </div>
    )
}

export default Gallery;