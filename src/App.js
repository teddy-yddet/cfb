import React, { useState } from "react";
import "./App.css";
import Numero from "./componentes/Numero";

export default function App() {
  const [num, setNum] = useState(10);

  return (
    <>
      <p>Valor do state num: {num}</p>
      <Numero num={num} setNum={setNum}></Numero>
    </>
  );
}
