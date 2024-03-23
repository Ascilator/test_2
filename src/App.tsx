import React from "react";
import { CardList, Menu } from "./components";

const App: React.FC = () => {
  return (
    <div className="w-full">
      <div className="mx-auto flex p-6 gap-6 items-start relative">
        <Menu />
        <CardList />
      </div>
    </div>
  );
};

export default App;
