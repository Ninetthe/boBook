import React from 'react'
import arrow from '../../assets/images/arrowleft.svg'
import './register.css'

export default function Register() {
  return (
    <div className='signUpContainer'>
     <a className='textDecoration' href="/"><img className='arrow' src={arrow} alt="arrow" /></a>
     <h2 className='h2Logo'>SIGN UP</h2>
     <div className=''>
        <form action="">
            <label className="styleFormsLabel" >Name</label> <br />
            <input className="styleFormsInput" type="text" name="" id="" placeholder='Write Name' /><br />
            <label className="styleFormsLabel">Last name</label> <br />
            <input className="styleFormsInput" type="text" name="" id="" placeholder='Write last name' /><br />
            <label className="styleFormsLabel">Email</label><br />
            <input className="styleFormsInput" type="text" name="" id="" placeholder='Write email' /><br />
            <label className="styleFormsLabel">Password</label><br />
            <input className="styleFormsInput" type="text" name="" id="" placeholder='Write password'/><br />
            <label className="styleFormsLabel">Phone</label><br />
            <input className="styleFormsInput" type="text" name="" id="" placeholder='Write phone'/><br />
            <label className="styleFormsLabel">Photo</label><br />
            <input className="styleFormsInput" type="text" name="" id="" placeholder='Add photo'/><br /> <br />
            <input className="bttnGreenMedium " type="submit" value="Sign Up" name="" id="" />
        </form>
        </div>
    </div>
  )
}
