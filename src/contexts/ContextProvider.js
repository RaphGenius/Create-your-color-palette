import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  //Combien de boite
  const [count, setCount] = useState(2);
  //Quel couleur
  const [currentColor, setCurrentColor] = useState("#D0021B");

  //Quel boite est focus (l'index est la référence)
  const [isFocused, setIsFocused] = useState(0);

  const [allBoxes, setAllBoxes] = useState([
    {
      index: 0,
      background: "#ff4",
    },
    {
      index: 1,
      background: "#333",
    },
    {
      index: 2,
      background: "#ccc",
    },
    {
      index: 3,
      background: "#ddd",
    },
    {
      index: 4,
      background: "#511212",
    },
    {
      index: 5,
      background: "#ca4",
    },
    {
      index: 6,
      background: "#ed5",
    },
    {
      index: 7,
      background: "#444",
    },
  ]);

  const changeColorBox = (color, index) => {
    const newBox = allBoxes;
    newBox[index].background = color;
    setAllBoxes(newBox);
  };
  return (
    <StateContext.Provider
      value={{
        count,
        setCount,
        currentColor,
        setCurrentColor,
        allBoxes,
        setAllBoxes,
        isFocused,
        setIsFocused,
        changeColorBox,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
