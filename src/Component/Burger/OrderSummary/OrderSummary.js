import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary';
import CustomButton from '../../UI/Button/Button';

class OrderSummary extends Component{
       
    render(){
        let ingredientsChild=this.props;
        let btnTypes=["Danger","Success"];
        let tempIngredients=Object.keys(ingredientsChild.stateDetails.ingredients).map(
            (ingredient)=>{                  
                return <li key={ingredient}><span style={{textTransform:"capitalize"}}>{ingredient}-{ingredientsChild.stateDetails.ingredients[ingredient]}</span> </li>;
            }
        )

        return <Aux>
            <h3>Your Order:</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
            {tempIngredients}
            </ul>
            <p><strong>Total Price: AU${this.props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            
            <CustomButton btnType={btnTypes[0]} clickedButton={this.props.cancelBtnClicked}>CANCEL</CustomButton>
            <CustomButton btnType={btnTypes[1]} clickedButton={this.props.continueButtonClicked}>CONTINUE</CustomButton>
        </Aux>
    }

    componentDidUpdate(){
        console.log("component did update [OrderSummary]");
    }
}

export default OrderSummary;