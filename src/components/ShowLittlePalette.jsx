import React, { useState } from "react";
import tinycolor from "tinycolor2";
import { useStateContext } from "../contexts/ContextProvider";
import { BsFillCheckCircleFill } from "react-icons/bs";

const ShowLittlePalette = ({ item, showHex }) => {
  const { setCurrentColor, allBoxes, isFocused, setIsFocused, changeNameBox } =
    useStateContext();
  const [isInputNameOpen, setIsInputNameOpen] = useState(false);

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
        isFocused === item.index
          ? "  border-white border-4 scale-110 shadow-lg  "
          : ""
      } `}
      onClick={() => getFocused()}
    >
      {showHex && (
        <div
          style={{ color: getBrightness(item.background) }}
          className="flex flex-col justify-center items-center"
        >
          <p className="text-center ">{allBoxes[item.index].background}</p>

          <div>
            {isInputNameOpen ? (
              <div className="flex justify-center">
                <input
                  className="w-3/4 text-center"
                  style={{
                    color: getBrightness(item.background),
                    background: "transparent",
                    border: "none",
                    outline: "none",
                  }}
                  type="text"
                  defaultValue={item.name}
                  onChange={(e) => changeNameBox(e.target.value, item.index)}
                />
                <button onClick={() => setIsInputNameOpen(false)}>
                  <BsFillCheckCircleFill />{" "}
                </button>
              </div>
            ) : (
              <p
                style={{ color: getBrightness(item.background) }}
                onClick={() => setIsInputNameOpen(true)}
              >
                {item.name}{" "}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowLittlePalette;
