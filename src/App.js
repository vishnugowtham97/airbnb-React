import React from "react";
import AllRoutes from "./AllRoutes";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <AllRoutes />
      </Router>
    </div>
  );
};

export default App;
