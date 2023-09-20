import React from 'react'
import "./logo.css"
import bookmark from "../../../assets/images/bookmark.svg"



export default function Logo() {
  return (
    <div className='LogoContainer'>
      <div className='Logo'>
        <img className='imgLogo' src={bookmark}/>
      </div>
      <div className="textContainerLogo">
        <p className="paragraphLogo">
          Enjoy the Story
        </p>
        <h2 className="h2Logo">
          boBook
        </h2>
      </div>


    </div>
  )
}
