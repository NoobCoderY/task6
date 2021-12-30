import React from 'react'
import './usercard1.css'
import img2 from '../images/Rectangle 5.png'
import img3 from '../images/Rectangle 3 (2).png'
import img6 from '../images/Rectangle 6.png'
import img5 from '../images/Rectangle 3 (3).png'
import img7 from '../images/✍️ Article.png'
import img8 from '../images/🔬️ Education.png'
import img9 from '../images/Rectangle 3 (8).png'
import img10 from '../images/Rectangle 3 (7).png'
import img11 from '../images/🗓️ Meetup.png'

import Card from './Card'
import Card2 from './Card2'
import Card3 from './Card3'
import { Groups } from './Groups'
import Group2 from './Group2'
import Header from './Header'

export const Usercard1 = () => {
    return (
        <div>
            
            <div className='us1h'>
                <div className='us1nav2'>
            <div className='us1nav'>
                <ul>
                    <li>All Post(32)</li>
                    <li className='l1'>Article</li>
                    <li className='l1'>Event </li>
                    <li className='l1'>Education</li>
                    <li className='l1'>Job</li>
                </ul>
                </div>
                <div className='us1nav3'>
                <select>
    <option value="0">Write Post:</option>
    <option value="1">sdd</option>
    </select>
    <button className='l1'>SELECT</button>

                </div>
                
                
            
            </div>
            <hr></hr>
            <div className='us1main'>
                <div className='us1main1'>
            <div className='us1img'>
                <Card img2={img2}  text="What if famous brands had regular fonts? Meet RegulaBrands!" text2="Sarthak Kamra" img4={img3 }img1={img7}/>
            </div>
            <div className='us1img us1img2'>
                <Card img2={img6}  text="Tax Benefits for Investment under National Pension Scheme launched by Government" text2="Sarah West" img4={img5} img1={img8}/>
            </div>
            <div className='us1img '>
                <Card2 img2={img9}  text="Finance & Investment Elite Social Mixer @Lujiazui" text2="Ronal Jones" img4={img10} img1={img11}/>
            </div>
            <div className='us1img '>
               <Card3></Card3>
            </div>
            </div>
            <div className='us1main2'>
           <Group2 cond={false}/>
            </div>
            </div>
            
            </div>
        </div>
    )
}
