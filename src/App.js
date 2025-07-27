import React, { useState } from "react";
import data from "./data";
import Tours from "./components/Tours";

const App = () => {
  console.log(data);
  const [tours, setTours]= useState(data);
  return <div className="wrapper">
    <Tours tours={tours}></Tours>
  </div>;
};

export default App;
