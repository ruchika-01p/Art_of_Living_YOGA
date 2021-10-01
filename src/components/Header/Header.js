import { IconButton } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { AppBar, Button, Toolbar } from "@material-ui/core";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from '../../images/LOGO1.svg';


function Header() {
    return (
        <div style={{ flexGrow: 1}}>
            <AppBar position="sticky">
                <Toolbar style={{ justifyContent: "space-between",backgroundColor:"lightgrey" }}>
                <a href='/'>
                    <img src={logo} alt='web logo' className='logo' />

                    </a>
                    
                <div className="button">            
                    <a href='/' className='home'>Home</a>
                  
                    <a href='/adult'>Courses</a>
                    <a href='/yoga'>Yoga</a>
                    
                    
                    <a href='/about'>About Us</a>
                    {/* <a href='/form'>Form</a>
                    <a href='/form1'>Form1</a> */}

                            {/* <Link to='/'><button type="text" style={{margin:"7px",fontSize:"20px",fontFamily:"Open Sans Condensed"}}>Home</button> </Link>
                            <Link to='/about'><button type="button" style={{margin:"7px",fontSize:"20px",borderRadius:"10px",padding:"8px",fontFamily:"Open Sans Condensed"}}>About Us</button></Link>
                            <Link to='/form'><button type="button" style={{margin:"7px",fontSize:"20px",borderRadius:"10px",padding:"8px",fontFamily:"Open Sans Condensed"}}>Form1</button></Link>
                            <Link to='/form1'><button type="button" style={{margin:"7px",fontSize:"20px",borderRadius:"10px",padding:"8px",fontFamily:"Open Sans Condensed"}}>Form2</button></Link>
                            */}
                </div>
                
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
