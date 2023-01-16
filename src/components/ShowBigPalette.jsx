import React from "react";
import ShowLittlePalette from "./ShowLittlePalette";
import { useStateContext } from "../contexts/ContextProvider";

const ShowBigPalette = () => {
  const { count } = useStateContext();

  return (
    <div className="flex">
      <h3>Grosse palette</h3>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>
          <ShowLittlePalette />
        </div>
      ))}
    </div>
  );
};

export default ShowBigPalette;
