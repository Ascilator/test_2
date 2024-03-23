import { Card } from "../../../hooks/useCards";

export const CardItem: React.FC<{ card: Card }> = ({ card }) => {
  return (
    <div className="flex-[0_1_calc(33.333%_-_12px)] rounded shadow">
      <div
        style={{
          backgroundColor: card.bgColor,
        }}
        className="rounded-t py-small"
      >
        <img
          className="w-36 h-36 object-contain object-center mx-auto"
          src={card.image}
          alt=""
        />
      </div>
      <p className="text-base px-base py-3 font-bold">{card.name}</p>
    </div>
  );
};
