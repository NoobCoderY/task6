import React from 'react'
import { Groups } from './Groups';
import './group2.css'
import img1 from '../images/Rectangle 6 (1).png'
import img2 from '../images/Rectangle 6 (2).png'
import img3 from '../images/Rectangle 6 (3).png'
 const Group2 = (props) => {
    return (
        <div> 
            <div className='grp2'>
                
                <Groups/>
             
            
                <div className='grp7'>
            <h6>
            REcommended Groups
            </h6>
           
            <div className='grp21'>
                <div className='grp211'>
                    <img src={img1} alt=''></img>
                    <h5>Leisure</h5>

                </div>
                <div className='grp212'>
                    <button>Follow</button>
                </div>
                </div>
                <div className='grp21'>
                <div className='grp211'>
                    <img src={img2} alt=''></img>
                    <h5>Leisure</h5>

                </div>
                <div className='grp212'>
                    <button>Follow</button>
                </div>
                </div>
                <div className='grp21'>
                <div className='grp211'>
                    <img src={img3} alt=''></img>
                    <h5>Leisure</h5>

                </div>
                <div className='grp212'>
                    <button>Follow</button>
                </div>
                </div>
                </div>
            
 
            </div>
        </div>
    )
}
export  default Group2;
