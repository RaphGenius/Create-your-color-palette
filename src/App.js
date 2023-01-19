import { useState } from "react";
import Header from "./components/Header";
import NumberOfPalette from "./components/NumberOfPalette";

import ShowBigPalette from "./components/ShowBigPalette";
import ColorChooser from "./components/ColorChooser";

function App() {
  return (
    <div className=" min-h-screen ">
      <div className="p-2">
        <Header />
        <div className="m-6 flex justify-around ">
          <ColorChooser />
          <NumberOfPalette></NumberOfPalette>
        </div>

        <ShowBigPalette />
      </div>
    </div>
  );
}

export default App;
