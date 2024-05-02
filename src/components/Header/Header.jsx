import KasaLogo from '../../assets/kasa_red.svg';
import './Header.css' 
import { Link } from 'react-router-dom';

function Header() {
    return (
      <div className='header-display'>
      <img src={KasaLogo} className='logo' alt='kasalogo' />
      <nav className='header-display anchors-text'>
        <Link to='/'>
          <ul id='Accueil'>Accueil</ul>
        </Link>
        <Link to='/about'>
          <ul id='A_propos'>A propos</ul>
        </Link>
      </nav>
    </div>
    );
  }

export default Header;