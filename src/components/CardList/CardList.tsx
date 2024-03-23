import { useContext } from "react";
import { CardItem } from "./CardItem/CardItem";
import { CardsContext } from "../../context/cardsContext";

export const CardList: React.FC = () => {
  const { filteredCards } = useContext(CardsContext);

  console.log(124);

  return (
    <div className="flex-auto flex flex-wrap gap-base gap-y-base">
      {filteredCards?.map((card) => (
        <CardItem card={card} key={card.id} />
      ))}
    </div>
  );
};
