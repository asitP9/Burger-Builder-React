import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems=(props)=>{
    return <ul className={classes.NavigationItems}>
    {/* here below the acive property has been attached (we could have written active=true, but as its a boolean value, 
        we can write just active) and its props will be used in the navigationItem component by attaching this to classes) */}
       <NavigationItem link="/" active>Burger Builder</NavigationItem>
       <NavigationItem link="/">Checkout</NavigationItem>

    </ul>
}

export default navigationItems;