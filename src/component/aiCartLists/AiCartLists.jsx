import React from 'react'
import './AiCartLists.scss'
import jsonData from '../../samplecart/sample.json';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
export default function AiCartLists() {
  return (
    <div className='bodycontainer'>
       {jsonData.map((item, index) => (
        <div className='cartContainer' key={index}>
               {/* <div> */}
                     {item.img?  <img src={item.img} width="100%" height="200px"/>: <p>Loading images...</p> }      
               {/* </div> */}
               <div className='textcontainer'>
                <div className='cartline1'>
                  <div className='aicart'>{item.AI_Cart}</div>
                  <div>{item.Price}</div>
                </div>
          
          <p>{item.Description}</p>
         
           <div className='thirdline'>
            {item.Tools.map((tool, toolIndex) => (
              <span  key={toolIndex}>{tool}</span>
            ))}
        </div>
          </div>
        </div>
      ))}
      <div className='pagination'>
        <div>Page<ArrowLeftIcon /> <span >1</span> <span>2</span><span>3</span><ArrowRightIcon/></div>
      </div>
    </div>
  )
}
