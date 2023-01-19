import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  //Combien de boite
  const [count, setCount] = useState(2);
  //Quel couleur
  const [currentColor, setCurrentColor] = useState("#D0021B");

  //Quel boite est focus (l'index est la référence)
  const [isFocused, setIsFocused] = useState(0);

  const [optionSettings, setOptionSettings] = useState(false);

  const [allBoxes, setAllBoxes] = useState([
    {
      index: 0,
      background: "#ff4",
      name: "Box 1",
    },
    {
      index: 1,
      background: "#333",
      name: "Box 2",
    },
    {
      index: 2,
      background: "#ccc",
      name: "Box 3",
    },
    {
      index: 3,
      background: "#ddd",
      name: "Box 4",
    },
    {
      index: 4,
      background: "#511212",
      name: "Box 5",
    },
    {
      index: 5,
      background: "#ca4",
      name: "Box 6",
    },
    {
      index: 6,
      background: "#ed5",
      name: "Box 7",
    },
    {
      index: 7,
      background: "#444",
      name: "Box 8",
    },
  ]);

  const changeColorBox = (color, index) => {
    const newBox = allBoxes;
    newBox[index].background = color;
    setAllBoxes(newBox);
  };

  const changeNameBox = (name, index) => {
    const newBox = allBoxes;
    newBox[index].name = name;
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
        optionSettings,
        setOptionSettings,
        changeNameBox,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
