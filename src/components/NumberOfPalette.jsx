import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const NumberOfPalette = () => {
  const { count, setCount } = useStateContext();

  return (
    <div>
      <label htmlFor="rangeColor">Nombre de boite : {count} </label>
      <input
        id="rangeColor"
        min="2"
        max="8"
        type="range"
        defaultValue={count}
        onChange={(e) => {
          setCount(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default NumberOfPalette;
