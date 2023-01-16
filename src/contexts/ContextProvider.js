import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  //Combien de boite
  const [count, setCount] = useState(2);
  //Quel couleur
  const [currentColor, setCurrentColor] = useState("#D0021B");

  const AllBoxesColor = [
    {
      index: 1,
      background: "#fff",
    },
    {
      index: 2,
      background: "#333",
    },
    {
      index: 3,
      background: "#ccc",
    },
    {
      index: 4,
      background: "#ddd",
    },
    {
      index: 5,
      background: "#511212",
    },
    {
      index: 6,
      background: "#ca4",
    },
    {
      index: 7,
      background: "#ed5",
    },
    {
      index: 8,
      background: "#444",
    },
  ];

  return (
    <StateContext.Provider
      value={{ count, setCount, currentColor, setCurrentColor, AllBoxesColor }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
