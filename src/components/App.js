import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {
  const [colorToggle, setColorToggle] = useState( false );

  function changeColor() {
    setColorToggle(!colorToggle)
  }

  const appClass = colorToggle ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={changeColor}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
