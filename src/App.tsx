import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import routes from "./config/routes";
import store from "./redux/store";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {routes.map(({ path, Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
