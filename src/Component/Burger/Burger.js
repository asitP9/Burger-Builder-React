import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.module.css';

const burger=(props)=>{
    // this below line is very important
    let transformedIngredient=Object.keys(props.ingredientsType).map(
        (igKey)=>{
            // console.log("this is my key "+igKey);
            return [...Array(props.ingredientsType[igKey])].map(
                (_,i)=>{
                    return <BurgerIngredients key={igKey+i} type={igKey}></BurgerIngredients>
                });
        }).reduce((accumulator, currVal)=>{
            // console.log("acc ",accumulator,"currVal ",currVal);
            return accumulator.concat(currVal);
        },[]);
    if(transformedIngredient.length===0)
        transformedIngredient="Please start adding ingredients";
    // console.log("this is my transformed ingredient",transformedIngredient);
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="breadTop"></BurgerIngredients>
            {transformedIngredient}
            {/* <BurgerIngredients type="cheese"></BurgerIngredients>
            <BurgerIngredients type="meat"></BurgerIngredients> */}
            <BurgerIngredients type="breadBottom"></BurgerIngredients>
            

        </div>
    );
}

export default burger;