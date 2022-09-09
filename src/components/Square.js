import React from "react"
import "./CSS/Square.css"

const Square = (props) => {
  return (
    <button className="button" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

export default Square
