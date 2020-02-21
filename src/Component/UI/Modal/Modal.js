import React from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const modal=(props)=>{
    return (
    <Aux>
        <Backdrop clickedBackdrop={props.clickBackdrop} show={props.showThisModal}></Backdrop>
        <div className={classes.Modal}
                style={{transform:props.showThisModal?'translateY(0)':'translateY(50)'
                    }}>
            {props.children}
        </div>
    </Aux>);
}

export default modal;