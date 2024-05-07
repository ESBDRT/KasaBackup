import KasaLogo from '../../assets/kasa_red.svg';
import './Header.css' 
import { Link } from 'react-router-dom';

function Header() {
    return (
      <div className='header-display'>
      <img src={KasaLogo} className='logo' alt='kasalogo' />
      <nav className='header-display anchors-text'>
        <Link to='/' className='anchor'>
          <ul id='Accueil' className='anchor'>Accueil</ul>
        </Link>
        <Link to='/about' className='anchor'>
          <ul id='A_propos'>A propos</ul>
        </Link>
      </nav>
    </div>
    );
  }

export default Header;