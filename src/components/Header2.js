import React from 'react'
import './header.css'

import img1 from '../images/Rectangle 3 (3).png'
import { Usercard1 } from './Usercard1'

 const Usercard2 = () => {
    return (
        <div>
             <header>
                <div className="nav">
                    <div className="logo">
                        ATG WORLD
                    </div>
                    <div className="search">
                    <input type="text" placeholder="Search.."/>
                    </div>
                    <div className=" user us2">
                    <img src={img1} alt='' className='userimg'></img>
                        <h5>Saksham Verma</h5>
                    </div>
                </div>
               
            </header>
            <Usercard1></Usercard1>
            
        </div>
    )
}
export default Usercard2;
