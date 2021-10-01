import { AppBar, Toolbar } from '@material-ui/core';
import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import logo from '../../images/LOGO1.svg';


function Header() {
    return (
        <div style={{ flexGrow: 1 }}>
            <AppBar position="sticky">
                <Toolbar style={{ justifyContent: "space-between", backgroundColor: "lightgrey" }}>
                    <a href='/'>
                        <img src={logo} alt='web logo' className='logo'/>
                    </a>

                    <div className="button">
                        <Link to='/' className='home'>Home</Link>

                        <Link to='/adult'>Courses</Link>

                        <Link to='/about'>About Us</Link>
                    </div>

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
