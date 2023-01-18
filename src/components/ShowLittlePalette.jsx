import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const ShowLittlePalette = ({ item }) => {
  const {
    setCurrentColor,
    currentColor,
    allBoxes,
    setAllBoxes,
    isFocused,
    setIsFocused,
  } = useStateContext();

  const getFocused = () => {
    setIsFocused(item.index);
    setCurrentColor(allBoxes[item.index].background);
  };

  return (
    <div
      style={{ background: allBoxes[item.index].background }}
      className={`mt-4 cursor-pointer h-20 w-full flex justify-center items-cente ${
        isFocused === item.index ? " borerlx border-x-violet-900 border-4" : ""
      } `}
      onClick={() => getFocused()}
    >
      <p className="text-center "> {allBoxes[item.index].background}</p>
    </div>
  );
};

export default ShowLittlePalette;
