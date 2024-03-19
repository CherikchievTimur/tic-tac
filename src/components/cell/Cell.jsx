import React from "react";
import "./cell.style.css";

const Cell = ( { id, content, onClickHandler } ) => {

    const onClick = () => onClickHandler(id)

    return <div className="cell" onClick={onClick}>
        <h1>{content}</h1>
        </div>
} 

export default Cell;