import React from "react";
import ReactDOM from 'react-dom';  
//import { Route, BrowserRouter as Router } from 'react-router-dom';
import {BrowserRouter, Route, Routes }    from 'react-router-dom'
import "./index.css";
import App from "./components/App";
import Login from "./components/Login";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);