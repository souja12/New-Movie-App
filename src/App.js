import React from "react";
import "./App.css";
import { useState } from "react";
import Registration from "./components/Registration";

function App() {
  const [login, setLogin] = useState(true);

  const handleClick = () => {
    setLogin(!login);
  };

  return (
    <div className="App">
      <Registration handleClick={handleClick} login={login} />
    </div>
  );
}

export default App;
