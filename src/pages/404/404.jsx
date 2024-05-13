import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import './404.css' 
import { Link } from 'react-router-dom';

function error404() {
    return (
        <div>
            <Header/>
            <div className='div'>
                <p className='text404 Red'>404</p>
                <p className='error Red'>Oups ! La page que vous demandez n'éxiste pas</p>
                <Link to='/' className='error-anchor' ><p >Retourner sur la page d'accueil</p></Link>
            </div>
            <Footer/>
        </div>
    )
}

export default error404;