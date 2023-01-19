import React from "react";
import { IoMdOptions } from "react-icons/io";
import { useStateContext } from "../contexts/ContextProvider";
const OptionButton = () => {
  const { optionSettings, setOptionSettings } = useStateContext();

  return (
    <div className=" fixed float-right top-0 right-0">
      <div className="flex justify-between items-center p-4 ml-4">
        <button
          type="button"
          onClick={() => setOptionSettings((prevSettings) => !prevSettings)}
          style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
          className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
        >
          <IoMdOptions />
        </button>
      </div>
    </div>
  );
};

export default OptionButton;
