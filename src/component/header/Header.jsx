import React from 'react'
import './header.scss'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export default function Header() {
  return (
    <>
      <div className='headContainer'>
               <div>
               <div className='htitle'>Collection of AI tools</div>
               <div><input className='inputsearch' type="text" placeholder='Search' /></div>
               <div className='hlist'>
                <div>Price <ArrowDropDownIcon /></div>
                <div>Category<ArrowDropDownIcon/></div>
                <div>India<ArrowDropDownIcon/></div>
               </div>
            </div>
      </div>
    </>
  )
}
