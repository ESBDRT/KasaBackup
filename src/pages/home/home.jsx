import Header from '../../components/Header/Header.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import Logement from '../../components/Rental/logement.jsx'
import Footer from '../../components/Footer/Footer.jsx';

function Home() {
    return (
        <div>
            <Header/>
            <Banner/> 
            <Logement mode="Card"/>
            <Footer/>
        </div>
    )
}

export default Home; 