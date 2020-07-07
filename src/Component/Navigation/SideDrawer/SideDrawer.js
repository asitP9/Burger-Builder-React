import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';

const sideDrawer=(props)=>{
    let attachedClasses=[classes.SideDrawer, classes.Open];
    if(props.open){
        attachedClasses.pop();
        attachedClasses.push(classes.Open);
        
    }
    else{
        attachedClasses.pop();
        attachedClasses.push(classes.Close);
    }
    return <Aux>
        <Backdrop show={props.open} clickedBackdrop={props.closed}/>
        <div className={attachedClasses.join(" ")}>
        
        {/* <Logo height="8%"/> */}
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
    </Aux>
}

export default sideDrawer;