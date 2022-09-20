import React from "react";

function Card(props) {
    return(
        <div className="dictionary">
            <div className="term">
                <div>
                    <dt>
                        <span className="emoji">{props.emoji}</span>
                        <span>{props.name}</span>
                    </dt>
                    <dd>{props.meaning}</dd>
                </div>
                
            </div>
            
        </div>
    )
}

export default Card;