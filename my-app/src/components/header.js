import React from 'react'
import Header from './Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';



export default function header() {
  return (
    <>
    <div className='p1'>
      <div className='first'>
      
      <h2><FontAwesomeIcon icon={faKeyboard} id='first'/>   Flashcard<span> .IO</span></h2>
        <div> <p>Site language</p></div>
      </div><hr></hr>
     
      <div className='second'>
        <ul>
          <li> <a href='#'><b> Try for free  </b> </a> </li>
          <li> <a href='#'> <b>Practice here</b> </a> </li>
          <li> <a href='#'> <b>Create your flashcard</b> </a> </li>
        </ul>
      </div>






    </div>

    
    </>
  )
}
