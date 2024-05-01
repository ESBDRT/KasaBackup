import './Footer.css'
import KasaLogo from '../../assets/kasa_white.svg';

function Footer() { 
    return (
        <div className='Footer'>
            <img src={KasaLogo} className='footer-logo' alt='kasalogo' />
            <p className='FooterText'>@ 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer;