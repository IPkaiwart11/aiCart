import React from 'react'
import "./navbar.scss"
export default function Navbar() {
  return (
    <>
    <div className='navContainer'>
        <div className='logo'>AI Cart</div>
        <div className='navigate'>
                <div>About</div>
                <div>Latest</div>
                <div className='addtool'>Add your Tool</div>
        </div>
    </div>
      
    </>
  )
}
