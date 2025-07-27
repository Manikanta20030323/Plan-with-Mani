import React, { useState } from "react";
import data from "./data";
import Tours from "./components/Tours";

const App = () => {
  console.log(data);
  const [tours, setTours]= useState(data);
  function refresh_handle(){
      setTours(data);
  }
  function removeTour(id){
    let cur_tour_plan= tours.filter((tour)=>{
      return tour.id !=id;
    });
    setTours(cur_tour_plan);

    

  }
  if(tours.length ===0)
    {
      
      return( <div>
          <div>No Tour Left</div>
          <button onClick={refresh_handle}>Refresh It</button>
        </div>);
     console.log("No Tour Left");
    }
 
  return <div className="wrapper">
    <Tours removeTours={removeTour} tours={tours}></Tours>
  </div>;
};

export default App;