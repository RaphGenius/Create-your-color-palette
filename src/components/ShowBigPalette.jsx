import React, { useState } from "react";
import ShowLittlePalette from "./ShowLittlePalette";
import { useStateContext } from "../contexts/ContextProvider";

const ShowBigPalette = () => {
  const { count, allBoxes } = useStateContext();
  const [showHex, setShowHex] = useState(true);

  return (
    <div className=" border border-red-500 p-4">
      <h3 className="text-center">Grosse palette</h3>
      <button onClick={() => setShowHex((prev) => !prev)} className="border-4">
        ENLEVE HEX
      </button>
      <div className="flex">
        {allBoxes.slice(0, count).map((item) => (
          <ShowLittlePalette key={item.index} item={item} showHex={showHex} />
        ))}
      </div>
    </div>
  );
};

export default ShowBigPalette;
// {Array.from({ length: count }).map((_, index) => (
//     <div key={index}>
//       <ShowLittlePalette />
//     </div>
//   ))}
