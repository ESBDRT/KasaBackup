import './../Banner.css' 
import BannerImg from '../../../assets/background.png';

function HomeBanner() {
    return (
    <div className='banner'>
        <p className='text'>Chez vous, partout et ailleurs</p>
        <img src={BannerImg} className='banner-img filter' alt='landscape-img'/>
    </div>
)}

export default HomeBanner;