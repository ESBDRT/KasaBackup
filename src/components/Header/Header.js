import KasaLogo from '../../assets/kasa_red.svg';
import './Header.css' 

function Header() {
    return (
      <div className='header-display'>
        <img src={KasaLogo} className='logo' alt='kasalogo' />
        <nav className='header-display anchors-text'>
            <ul id='Accueil' href='#'>Accueil</ul>
            <ul id='A_propos' href='#'>A propos</ul>
        </nav>
    </div>

    );
  }

export default Header;