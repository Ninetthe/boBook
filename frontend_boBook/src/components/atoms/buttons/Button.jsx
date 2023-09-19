import React from 'react'
import "./button.css"

function Button(props) {
  
  return (
  <div>
    <p className={props.styleButtonParagraph}>{props.textButtonParagraph}</p>
    <button className={props.styleButton}>
      {props.texButton}
      </button>
    </div>
  )
  
}

export default Button