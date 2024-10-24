import Header from "../../components/Header/Header.jsx";
import Banner from "../../components/Banner/HomeBanner/HomeBanner.jsx";
import Logement from "../../components/Rental/logement.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import jsonData from "../../data/logements.json";

function Home() {
  return (
    <div>
      <Header />
      <Banner mode="Home" />
      <div className="Gallery">
        {jsonData.map((item) => (
          <Logement key={item.id} item={item} mode="Card" />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
