import './../Banner.css' 
import BannerImg from '../../../assets/Background2.png';

function AboutBanner() {
    return (
    <div className='banner'>
        <img src={BannerImg} className='banner-img' alt='landscape-img'/>
    </div>
)}

export default AboutBanner;