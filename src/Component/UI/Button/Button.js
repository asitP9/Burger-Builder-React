import React from 'react';
import classes from './Button.module.css';

const customButton=(props)=>{
return <button className={[classes.Button, classes[props.btnType]].join(' ')} onClick={props.clickedButton}>{props.children}</button>;
}

export default customButton;