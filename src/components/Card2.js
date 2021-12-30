import React from 'react'
import img3 from '../images/✍️ Article.png'
import img6 from '../images/Vector (10).png'

import './card.css'

 const Card2 = (props) => {
    return (
        <div>
            <div className='card'>
            <div className='card1'>
                <img src={props.img2} alt=''></img>
            </div>
            <div >
                <img src={img3} alt=''></img>
                
            </div>
            <div className='card1hi'>
            
                <h3>{props.text}</h3>
                <div class="dropdown-container" tabindex="-1">
    <div class="three-dots"></div>
    <div class="dropdown">
      <a href="#"><div>Edit</div></a>
      <a href="#"><div>Report</div></a>
      <a href="#"><div>Option-3</div></a>
    </div>
  </div>
            </div>
            <div className='card2website'>
                <h4> Visite Website</h4>
            </div>
            <div className='card1hi'>
                <div className='cardcirimg'>
                    <img src={props.img4} alt=''></img>
                    <h4>{props.text2}</h4>
                    
                </div>
                <div className='card1hi2'>
                <img src={img6} alt=''></img>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Card2;
