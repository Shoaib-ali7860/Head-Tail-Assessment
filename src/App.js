import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import WebsiteLayout from "./component/layout/layout";
function App({ }) {
  return (
    <WebsiteLayout >
      <main className="p-3 container">
       <h2 >Home page</h2>
       <ul className="mt-3 ml-4">
        <li>
        <Link to="/about" className='text-decoration-none text-dark'>
           <p className="text-white">About Us</p>
        </Link>
        </li>
        <li>
        <Link to="/head-and-tail" className='text-decoration-none text-dark'>
        <p className="text-white">Head and tail </p>
        </Link>
        </li>
      </ul>
      </main>
    
    </WebsiteLayout>
  );
}


export default App;
