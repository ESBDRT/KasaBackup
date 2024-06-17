import HomeBanner from '../Banner/HomeBanner/HomeBanner.jsx';
import AboutBanner from '../Banner/AboutBanner/AboutBanner.jsx';


function Banner({ mode }) {
    if (mode === "Home") {
      return (
        <div className='banner'>
            <HomeBanner/>
        </div>
      )
        
    } else if (mode === "About") {
      return (
        <div>
          <AboutBanner/>
        </div>       
      );
    }
}

export default Banner;