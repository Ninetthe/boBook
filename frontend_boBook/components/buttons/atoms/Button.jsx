import React from 'react'

export default function Button(props) {
  return (
    <div>
         <button className={props.buttonStyle}>{props.content}</button>
    </div>
  )
}
