import React from 'react'
import './card3.css'
import img1 from '../images/💼️ Job.png'
import img2 from '../images/Rectangle 3 (4).png'
import img3 from '../images/Vector (10).png'

 const Card3 = () => {
    return (
        <div>
            <div className='card'>
             <div className='card3i1'>
                 <img src={img1} alt=''></img>
             </div>
             <div className='card1hi'>
            
                <h3>Software Developer</h3>
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
                <h4> Apply on Timesjobs</h4>
            </div>
            <div className='card1hi'>
                <div className='cardcirimg'>
                    <img src={img2} alt=''></img>
                    <h4>Joseph Gray</h4>
                    
                </div>
                <div className='card1hi2'>
                <img src={img3} alt=''></img>
                </div>
            </div>
             </div>
        </div>
    )
}
export default Card3;
