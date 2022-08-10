import * as React from "react";
import logo from "../Img/DesignThinking.jpg";
import { FaToggleOn } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import "./NavBar.css";
// import styled from "styled-components";
import { useState, useEffect } from "react";

export default function NavBar() {


    // const [toggle, setToggle] = useState(false)
    // const [screenWidth, setScreenWidth] = useState()
    //     (window.innerWidth)


    // const toggleNav = () => {
    //     setToggle(!toggle)
    // }

    // useEffect(() => {
    //     const changeWidth = () => {
    //         setScreenWidth(window.innerWidth);
    //     }
    //     window.addEventListener('recize', changeWidth)

    //     return () => {
    //         window.removeEventListener('resize', changeWidth)

    //     }
    // }, [])

        // const toggleBtn = document.querySelector('.nav__toggleBtn');
        // const menu = document.querySelector('.nav__menu');
        // const icons = document.querySelector('.nav__icons');

        // toggleBtn.addEventListener('click', () => {
        //     menu.classList.toggle('active');
        //     icons.classList.toggle('active');
        // })


    return (
        <nav className="navbar">
            <>
            <div className="nav__logo">
                <a href="https://www.missionreadyhq.com/">
                    <img src={logo} alt="Logo" size="18px" />
                </a>
            </div>

            {/* {(toggle || screenWidth > 768) && ( */}
                <ul className="nav__menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/faq">FAQ</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            {/* )} */}

            <ul className="nav__icons">
                {/* <li> <a href="https://www.facebook.com/"><FaFacebook size={"20px"}/> </a></li> */}
                {/* <li> <a href="https://twitter.com/"><AiFillTwitterCircle size={"22px"}/> </a></li> */}
                <li> <a href=""> LogIn <AiOutlineLogin size={"22px"} style={{ marginLeft: '.5rem' }}/> </a></li>
            </ul>

            <a href="#" className="nav__toggleBtn">
                <FaToggleOn />
            </a>
            </>
        </nav>
    );
}