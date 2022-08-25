import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AboutPage from './component/about-page/about-page'
import HeadAndTail from './component/head-and-tail-page/head-and-tails-page'
ReactDOM.render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/head-and-tail" element={<HeadAndTail />}/>
        </Routes>
      </BrowserRouter>
 ,
  document.getElementById("root")
);
reportWebVitals();
