import { useState } from "react";
import Header from "./components/Header";
import NumberOfPalette from "./components/NumberOfPalette";
import { useStateContext } from "./contexts/ContextProvider";
import ShowBigPalette from "./components/ShowBigPalette";

function Box() {
  return (
    <div>
      <p>EXEMPLE BOITE</p>
    </div>
  );
}

function App() {
  const { count } = useStateContext();

  return (
    <div>
      <Header />
      <NumberOfPalette />
      {Array.from({ length: count }).map((_, index) => (
        <Box key={index} />
      ))}
      <ShowBigPalette />
    </div>
  );
}

export default App;
