import React from 'react';
import { links } from './Links';

const Nav = () => {


    return (
    <div className="nav">
        <div className="logo">
            <a href="#Home">
                <img width='45px' src='https://res.cloudinary.com/daif0s5gi/image/upload/v1677097129/portfolio/NL-removebg-preview_1_mc8h3g.png' alt="logo" />
            </a>
        </div>
        <div className="menu-icon">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
        <div className="link-container">
                {links.map((link) => {
                    return <a href={link.url} key={link.id}>{link.text}</a>
                })}

                    <a href='/resume.pdf' target='_blank' rel='noopener noreferrer'>Resume</a>
        </div>
    </div>

    ) 
}

export default Nav;