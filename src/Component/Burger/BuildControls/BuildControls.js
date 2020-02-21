import classes from './BuildControls.module.css';
import React from 'react';
import BuildControl from './BuildControl/BuildControl';

const controls=[
    {label:"Salad", type:"salad"},
    {label:"Bacon", type:"bacon"},
    {label:"Cheese", type:"cheese"},
    {label:"Meat", type:"meat"}
];

const buildControls=(props)=>{
    return (
        <div className={classes.BuildControls}>
        <p>Current Price: <strong>AU$ {props.price.toFixed(2)}</strong></p>
        {controls.map(
            (control)=>{
                return <BuildControl key={control.type} disabled={props.disabled[control.type]} ingreType={control.type} label={control.label} removeThisIngredient={()=>props.decreaseIngredient(control.type)} addThisIngredient={props.addIngredient}></BuildControl>;
            })}
        
        <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.orderAll}>Order Now</button>
        </div>
    )
}

export default buildControls;