import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./config/routes";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
