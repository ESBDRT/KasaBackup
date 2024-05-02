import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import './404.css' 

function error404() {
    return (
        <div>
            <Header/>
            <div className='div'>
                <p className='text404 Red'>404</p>
                <p className='error Red'>Oups ! La page que vous demandez n'éxiste pas</p>
                <p className=''>Retourner sur la page d'accueil</p>
            </div>
            <Footer/>
        </div>
    )
}

export default error404;