import { useEffect, useState } from "react";

export type Card = {
  id: string;
  name: string;
  image: string;
  tags: string[];
  bgColor: string;
};

export type CardsContextProps = {
  filteredCards: Card[];
  tags: string[];
  isLoading: boolean;
  error: string;
  filterCards: (filter: string) => void;
};

export const useCards = (): CardsContextProps => {
  const url = "https://logiclike.com/docs/courses.json";

  const [cards, setCards] = useState<Card[]>([]);
  const [filteredCards, setFilteredCards] = useState<Card[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json() as Promise<Card[]>)
      .then((fetchedCards) => {
        setCards(fetchedCards);
        setFilteredCards(fetchedCards);
        const calculatedTags = fetchedCards.reduce<string[]>((acc, card) => {
          acc.push(...card.tags);
          return acc;
        }, []);
        setTags([...new Set(calculatedTags)]);
      })
      .catch((e) => {
        console.log(e);
        setError(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const filterCards = (filter: string) => {
    if (!filter) {
      setFilteredCards(cards);
      return;
    }

    const newFilteredCards = cards.filter(
      (card) => card.tags.indexOf(filter) !== -1
    );
    setFilteredCards(newFilteredCards);
  };

  return { filteredCards, tags, isLoading, error, filterCards };
};
