import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const NumberOfPalette = () => {
  const { count, setCount, isFocused, setIsFocused } = useStateContext();
  const showPalette = (e) => {
    setCount(parseInt(e.target.value));
    //Mettre le focus sur la dernière palette
    // if (count < isFocused) setIsFocused(count);
  };

  return (
    <div>
      <label htmlFor="rangeColor">Nombre de boite : {count} </label>
      <input
        id="rangeColor"
        min="1"
        max="8"
        type="range"
        defaultValue={count}
        onChange={(e) => {
          showPalette(e);
        }}
      ></input>
    </div>
  );
};

export default NumberOfPalette;
