import React from 'react';
import classes from './BuildControl.module.css';

const buildControl=(props)=>{
    return (
        // below i am passing the ingredient type in 2 WebAssembly. it can be done in either of the two ways
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less} disabled onClick={props.removeThisIngredient} disabled={!props.disabled}>Less</button>
            <button className={classes.More} onClick={()=>props.addThisIngredient(props.ingreType)}>More</button>
        </div>
    )
}

export default buildControl;