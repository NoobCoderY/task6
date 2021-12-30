import React from 'react'
import './group.css'
import img1 from '../images/Vector (11).png'

export const Groups = () => {
    return (
        <div>
            <div className='groups'>
            <textarea rows="2" placeholder="Whats's on Your Mind Yasshu"></textarea>
            <div className='us1main3'>
                <img src={img1} alt=''></img>
            <p>Your location will help us serve better.</p>
            </div>

            </div>
        </div>
    )
}
