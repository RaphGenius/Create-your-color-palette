import React from "react";
import tinycolor from "tinycolor2";
import { useStateContext } from "../contexts/ContextProvider";

const ShowLittlePalette = ({ item, showHex }) => {
  const { setCurrentColor, allBoxes, isFocused, setIsFocused } =
    useStateContext();

  const getFocused = () => {
    setCurrentColor(allBoxes[item.index].background);
    if (isFocused === item.index) {
      setIsFocused(undefined);
      return;
    }
    setIsFocused(item.index);
  };

  const getBrightness = (color) => {
    const getBrightnessColor = tinycolor(color);

    if (getBrightnessColor.getBrightness() > 125) {
      return "black";
    } else {
      return "white";
    }
  };

  return (
    <div
      style={{ background: allBoxes[item.index].background }}
      className={`mt-4 cursor-pointer h-20 w-full flex justify-center items-center transition-all  ${
        isFocused === item.index ? "  border-white border-4 scale-110  " : ""
      } `}
      onClick={() => getFocused()}
    >
      {showHex && (
        <div>
          <p className="text-center "> {allBoxes[item.index].background}</p>

          <p style={{ color: getBrightness(item.background) }}> TEST</p>
        </div>
      )}
    </div>
  );
};

export default ShowLittlePalette;
