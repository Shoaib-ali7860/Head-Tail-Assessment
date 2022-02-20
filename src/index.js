import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import store from "./redux/reducer/index";
import Product from "./product";
import { Routes, Route, Navigate, BrowserRouter,Outlet } from "react-router-dom";
import ProductPage from './component/product-page/product-page'
ReactDOM.render(
  
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="product" element={<Product ><Outlet/></Product>}>
              <Route path=":productId" element={<ProductPage  text='id will be her'/>} />
            </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
 ,
  document.getElementById("root")
);
reportWebVitals();
