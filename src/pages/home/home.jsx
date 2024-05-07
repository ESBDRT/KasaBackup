import Header from '../../components/Header/Header.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import Gallery from '../../components/Gallery/Gallery.jsx';
import Footer from '../../components/Footer/Footer.jsx';

function Home() {
    return (
        <div>
            <Header/>
            <Banner/>
            <Gallery/>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Home; 