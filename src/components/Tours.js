import Card from "./Card";

function Tours({tours,removeTours}) {
  return (
   <div className="container">
    <div className="header">
        <h2>Plan With Manikanta</h2>
    </div>
    <div className="content">
       {
         tours.map((tour)=>{
          return  <Card key={tour.id} tour={tour} removeTours={removeTours}></Card>
         })
       }

    </div>
   </div>
  );

}

export default Tours;