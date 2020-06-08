import React from "react";
import "./styles.css"
import feedsource from '../../data/data';
import StarRating from '../../components/StarRating/index'

 
const Grid = () => {
    return(
        <div className="cards">{
            feedsource.map(el=>
                <div className="card">
                    <h4 style={{textAlign:'left'}}>{el.title}</h4>
                    <span><StarRating/></span>
            <div className="text">{el.text}</div>
                </div>

            )
           
        }
          
        </div>
    )
};

export default Grid;
