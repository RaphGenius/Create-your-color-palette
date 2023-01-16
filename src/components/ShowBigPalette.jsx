import React from "react";
import ShowLittlePalette from "./ShowLittlePalette";
import { useStateContext } from "../contexts/ContextProvider";

const ShowBigPalette = () => {
  const { count, AllBoxesColor } = useStateContext();

  return (
    <div className=" border border-red-500">
      <h3>Grosse palette</h3>
      {AllBoxesColor.slice(0, count).map((item, index) => (
        <ShowLittlePalette key={index} item={item} />
      ))}
    </div>
  );
};

export default ShowBigPalette;
// {Array.from({ length: count }).map((_, index) => (
//     <div key={index}>
//       <ShowLittlePalette />
//     </div>
//   ))}
