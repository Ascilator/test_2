import React from "react";
import { CardList, Menu } from "./components";

const App: React.FC = () => {
  return (
    <div className="w-full">
      <div className="max-w-wrapper mx-auto flex p-6 gap-6 items-start">
        <Menu />
        <CardList />
      </div>
    </div>
  );
};

export default App;
