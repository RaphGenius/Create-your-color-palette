import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useStateContext } from "../contexts/ContextProvider";
const ShowBoxName = ({ getBrightness, item, setIsInputNameOpen }) => {
  const { changeNameBox } = useStateContext();

  return (
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
  );
};

export default ShowBoxName;
