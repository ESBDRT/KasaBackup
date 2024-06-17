import Card from "./Card/Card";
import Full from "./Full/Full";

function Logement({ item, mode }) {
    if (mode === "Card") {
      return (
        <Card item={item}/>
      )
        
    } else if (mode === "Full") {
      return (
        <div>
          <Full item={item}/>
        </div>       
      );
    }
  }

export default Logement;