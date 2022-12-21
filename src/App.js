// import logo from './logo.svg';
import './App.css';
import React from "react";
// import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";



function App() {
  return (
    <div className="App">
      <Signup/>
      {/* <Routes>
        <Route exact="true" path="/customerform" element={<Signup/>}/>
      </Routes> */}
    </div>
  );
}

export default App;
