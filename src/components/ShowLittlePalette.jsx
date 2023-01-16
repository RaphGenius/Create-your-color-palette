import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const ShowLittlePalette = ({ item }) => {
  const { currentColor, setCurrentColor } = useStateContext();
  console.log(item.background);
  return (
    <div
      style={{ background: item.background }}
      className="mt-4 border border-sky-500 cursor-pointer"
      onClick={() => setCurrentColor(item.background)}
    >
      petite palette
    </div>
  );
};

export default ShowLittlePalette;
