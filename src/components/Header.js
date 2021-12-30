import React from "react"
import './header.css'
import img1 from '../images/Windows-10.jpg'
import { Usercard1 } from "./Usercard1"
import { Link } from "react-router-dom"



const Header = () => {
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
                    <div className=" user">
                        <h5>Create Account <Link to="/Signup"> Its'Free </Link></h5>
                        

                    </div>
                </div>
                <div className="header-img">
                    <img src={img1} alt=""></img>
                </div>
            </header>
            <Usercard1></Usercard1>
        </div>
    )
}

export default Header
