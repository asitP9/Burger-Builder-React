import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../Component/Burger/Burger';
import BuildControls from '../../Component/Burger/BuildControls/BuildControls';
import OrderSummary from '../../Component/Burger/OrderSummary/OrderSummary';
import Modal from '../../Component/UI/Modal/Modal';
import Axios from '../../axios-orders';
import Spinner from '../../Component/UI/Spinner/Spinner';
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENTS_PRICE={
    salad:0.5,
    bacon:0.7,
    cheese:0.4,
    meat:1.3
}
class BurgerBuilder extends Component{
    
    constructor(props){
        super(props);
        this.state={
            ingredients:{
                salad:0,
                bacon:0,
                cheese:0,
                meat:0
            },
            totalPrice:4,
            purchasable:false,
            purchasing:false,
            loading:false
        }
    }

    // here we faced an issue once we called the below funtion  from add and remove function because we were not passing 
    // the updated ingredients in the function rather we were accessing the state directly

    updatePurchaseState=(ingredient)=>{
        let sum=Object.keys(ingredient).map(
            (peringredient)=>{
                return ingredient[peringredient];
            }).reduce(
                (sum,el)=>{
                    return sum+el;
                },0
            
        );
        
        this.setState({
            purchasable:sum>0
        })
    }



    addIngredientsHandler=(type)=>{
       let oldCount=this.state.ingredients[type];
       let updatedCount=oldCount+1;

       let newIngredient={
            ...this.state.ingredients
       };
       newIngredient[type]=updatedCount;
       let oldPrice=this.state.totalPrice;
       let newTotalPrice=oldPrice + INGREDIENTS_PRICE[type];
       this.setState({
           ingredients:newIngredient,
           totalPrice:newTotalPrice
       })
       this.updatePurchaseState(newIngredient);
    }

    removeIngredientsHandler=(type)=>{
        let oldCount=this.state.ingredients[type];
        let newIngredient;
        if(oldCount>0){
            let updatedCount=oldCount-1;
            newIngredient={
                ...this.state.ingredients
            };
            newIngredient[type]=updatedCount;
            let oldPrice=this.state.totalPrice;
            let newTotalPrice=oldPrice-INGREDIENTS_PRICE[type];
            this.setState({
                ingredients:newIngredient,
                totalPrice:newTotalPrice
            })
            this.updatePurchaseState(newIngredient);

        }
    }

    purchaseHandler=()=>{
       let orderClickedUpdate=this.state.purchasing;
       orderClickedUpdate=true;
       this.setState({
        purchasing:orderClickedUpdate
       });
    }
    purchaseCancelHandler=()=>{
        this.setState({
            purchasing:false
           });
    }

  

    purchaseContinueHandler=()=>{
        this.setState({
            loading:true
        });
        // alert("continue");
        const order={
            ingredients:this.state.ingredients,
            // here the price should have been calculated in the server 
            // because it should not be changed by anypne...so be cautious in production environment
            price:this.state.price,
            customer:{
                name:'Asit Panda',
                address:{
                    street:'TestStreet 1',
                    zipCode:'3053',
                    country:'Australia'
                },
                email:'panda9asit@gmail.com'
            },
            deliveryMethod:'fastest'
        }

        Axios.post('/orders', order)
            .then(response=>{
                        // console.log(response);
                            this.setState({
                                loading:false,
                                purchasing: false
                            });
            }
                )
            .catch(
                error=>{console.log("THIS IS ERROR",error);
                    this.setState({
                        loading:false,
                        purchasing: false

                    });}
            );

        
    }

    purchaseCancelledHandler=()=>{
        this.setState({
            purchasing:false
           });
    }
    render(){

        let orderSummary=null;
        let btnType;
        
        if(this.state.purchasing){
            orderSummary = <Modal showThisModal={this.state.purchasing} clickBackdrop={this.purchaseCancelHandler.bind(this)}>
                                <OrderSummary stateDetails={this.state} continueButtonClicked={this.purchaseContinueHandler}  cancelBtnClicked={this.purchaseCancelHandler} totalPrice={this.state.totalPrice}/>
                            </Modal> ;
            if(this.state.loading)
                orderSummary=<Modal showThisModal={this.state.purchasing} clickBackdrop={this.purchaseCancelHandler.bind(this)}><Spinner/></Modal>;
        }
        const disabledInfo={...this.state.ingredients};
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]>0;
            // console.log("this is my key", disabledInfo[key]);

        }
        return(
            <Aux>
                {/* <Modal>
                    <OrderSummary stateDetails={this.state} continueButtonClicked={this.purchaseContinueHandler}  cancelBtnClicked={this.purchaseCancelHandler} totalPrice={this.state.totalPrice}/>
                </Modal> */}
                {orderSummary}
                <Burger ingredientsType={this.state.ingredients}></Burger>
                <BuildControls purchasable={this.state.purchasable} decreaseIngredient={this.removeIngredientsHandler} disabled={disabledInfo} addIngredient={this.addIngredientsHandler} price={this.state.totalPrice} orderAll={this.purchaseHandler}></BuildControls>
                {/* <button onClick={this.addIngredients.bind(this,'salad')}>i m</button>
                <button onClick={this.removeIngredients.bind(this,'salad')}>i m out</button> */}

            </Aux>
        )
    }
    
    componentDidUpdate(){
        console.log("component did update [burgerBuilder]");
    }

}

export default WithErrorHandler(BurgerBuilder, Axios); 