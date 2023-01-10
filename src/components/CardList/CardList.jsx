import React from "react";
import './cardList.css';
import Card from '../Card/Card';
import data from '/Users/user/Documents/reactdogfood/my-app/src/assets/data.json';
const CardList=()=>{

    return (
        <div className="cards">
            {data.map((iton, index)=>(
             <Card  {...iton} key={`${index} - ${iton.name}`}/>   
            )
            )
            };
            
        </div>
        
        
    );
};
export default CardList;