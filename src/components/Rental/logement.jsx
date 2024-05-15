import Card from "./Card/Card";
import Full from "./Full/Full";

function Logement({ logement, mode }) {

    if (mode === "Card") {
      return (
        <Card item={logement}/>
      )
        
    } else if (mode === "Full") {
      return (
        <div>
          <Full item={logement}/>
        </div>       
      );
    }
  }

export default Logement;