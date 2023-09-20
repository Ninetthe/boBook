import React from 'react'
import bookmark from "../../../assets/images/bookmark.svg"
import "./logo.css"

export default function Logo() {
  return (
    <div className='Logo'>
      <img className='imgLogo' src={bookmark} alt="bookmark" />
      <div>
        <p className="paragraphLogo"></p>
        <h2 className="h2Logo"></h2>
      </div>
    </div>
  )
}
