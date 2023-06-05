import React from "react";
import "../styles/Counter.css"

export function Counter({numClicks}){
    return (
        <div className="counter">
            {numClicks}
        </div>
    )
}