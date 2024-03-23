import { useContext } from "react";
import { CardsContext } from "../../context/cardsContext";
import { CardItem } from "./components/CardItem";

export const CardList: React.FC = () => {
  const { filteredCards } = useContext(CardsContext);

  return (
    <div className="flex-auto flex flex-wrap gap-base gap-y-base">
      {filteredCards?.map((card) => (
        <CardItem card={card} key={card.id} />
      ))}
    </div>
  );
};
