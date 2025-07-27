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
    <div className='card_container'>
        <div className='card_image'>
            <img src={tour.image}></img>
        </div>
        <div className='card_content'>
            <p className='price'>₹{tour.price}</p>
            <p className='tour_name'>{tour.name}</p>
            <div>
                {description}
                <span className='read_more' onClick={read_more_handle}>{read_more ? `Read More` : `Show Less`}</span>
            </div>
        </div>
        <div className='card_btn'>
             <button className='not_interested-btn' onClick={Not_interest_handle}>Not Interested</button>
        </div>
       
    </div>
   )
}

export default Card;