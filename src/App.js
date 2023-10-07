import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavigationMain from "./navigation/navigation";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <NavigationMain />
    </BrowserRouter>
  );
};

export default App;
