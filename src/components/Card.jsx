import React from "react";

function Card(props) {
    return(
        <div className="dictionary">
            <div className="term">
                <div>
                    <h2 className="emoji">{props.emoji}</h2>
                    <dt><span>{props.name}</span></dt>
                    <dl>{props.meaning}</dl>
                </div>
                
            </div>
            
        </div>
    )
}

export default Card;