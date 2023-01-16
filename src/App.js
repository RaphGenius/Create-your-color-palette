import { useState } from "react";
import Header from "./components/Header";
import NumberOfPalette from "./components/NumberOfPalette";
import { useStateContext } from "./contexts/ContextProvider";
import ShowBigPalette from "./components/ShowBigPalette";
import ColorChooser from "./components/ColorChooser";

function Box() {
  return (
    <div>
      <p>EXEMPLE BOITE</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <NumberOfPalette />
      <ColorChooser />
      <ShowBigPalette />
    </div>
  );
}

export default App;
