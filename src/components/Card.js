import React, { useState } from 'react';
function Card({tour,removeTours}) {

    let desc=tour.info.substring(0,200)+"..."
    const [read_more, setReadMore] = useState(true);
    console.log(read_more)
    const [description, setDescription] = useState(desc);
    function Not_interest_handle(){
        removeTours(tour.id);
        
    }
    
    function read_more_handle(){
        setReadMore(!read_more);
        console.log(read_more);

        if(read_more)
        {
              setDescription(tour.info);
        }   
        else{
          
            setDescription(tour.info.substring(0,200)+"...")
        }
        
    }
    
   return(
    <div>
        <div>
            <img src={tour.image}></img>

        </div>
        <div>
            <p>₹{tour.price}</p>
            <p>{tour.name}</p>
            <div>
                <p>{description}</p>
                <span onClick={read_more_handle}>{read_more ? `Read More` : `Show Less`}</span>
            </div>
        </div>
        <button onClick={Not_interest_handle}>Not Interested</button>
    </div>
   )
}

export default Card;