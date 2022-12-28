import React, { useState } from "react";
import "./App.css";
import UseContext from "./components/UseContext";

export const ToggleTheme = React.createContext();

function App() {
  const [state, setState] = useState(true);

  const handleToggle = () => {
    setState((state) => !state);
  };

  return (
    <div className="App">
      <ToggleTheme.Provider value={state}>
        <button onClick={handleToggle}>Toggle</button>
        <UseContext />
      </ToggleTheme.Provider>
    </div>
  );
}

export default App;
