import React from "react";

// text, isClickButton, handleClick son props desestructurados//
export function ButtonClick({ text, isClickButton, handleClick}){
    return(
        <button
            className={isClickButton ? "button-click" : "button-repeat"}
            onClick={handleClick}
        >
            {text}
        </button>
    )
}