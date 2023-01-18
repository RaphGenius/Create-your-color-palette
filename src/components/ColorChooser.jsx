import React from "react";
import { SketchPicker } from "react-color";
import { useStateContext } from "../contexts/ContextProvider";
const ColorChooser = () => {
  const { currentColor, setCurrentColor, changeColorBox, isFocused } =
    useStateContext();

  const handleChangeComplete = (color) => {
    setCurrentColor(color.hex);

    changeColorBox(color.hex, isFocused);
  };

  return (
    <div>
      <SketchPicker
        width="200px"
        disableAlpha={true}
        color={currentColor}
        onChange={handleChangeComplete}
      />
      <p>{currentColor} </p>
    </div>
  );
};

export default ColorChooser;
