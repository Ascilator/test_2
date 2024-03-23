import { createContext, ReactNode } from "react";
import { useCards } from "../hooks";
import { CardsContextProps } from "../hooks/useCards";

export const CardsContext = createContext({} as CardsContextProps);

export const CardsContextProvider = ({ children }: { children: ReactNode }) => {
  const { filteredCards, tags, isLoading, error, filterCards } = useCards();

  return (
    <CardsContext.Provider
      value={{
        filteredCards,
        tags,
        isLoading,
        error,
        filterCards,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};
