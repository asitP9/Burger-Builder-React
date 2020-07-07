import React from 'react';
import classes from './Logo.module.css';
// see the video no 28---becoz of bundling webpack in prod, we hav to do this.

import burgerLogo from '../../Assets/Images/burger-logo.png';

const logo=(props)=>{
    // return <div className={classes.Logo} style={{height:props.height}}>
    return <div className={classes.Logo} >
                <img src={burgerLogo} alt="burgerLogo"/>
            </div>
}

export default logo;    