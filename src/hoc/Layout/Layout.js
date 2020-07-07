import React, { Component } from 'react';
import Aux from '../Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../../Component/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Component/Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    constructor(props){
        super(props);
        this.state={
            showSideDrawer:false
        }
    }
    
    sideDrawerToggleHandler=()=>{
        let visibleSideDrawer=this.state.showSideDrawer;
        visibleSideDrawer=!visibleSideDrawer;
        // this.setState({
        //     // we should not handle the showsidedrawer like below due to the asynchronous nature of setstate 
        //     // (lead to unexpected outcomes)
        //     // showSideDrawer:!this.state.showSideDrawer
  
        //     // showSideDrawer:visibleSideDrawer

        // });

        this.setState((prevState)=>{
            return {
                showSideDrawer:!prevState.showSideDrawer
            }
        })
    }
    // sideDrawerOpenHandler=()=>{
    //     this.setState({
    //         showSideDrawer:true
    //     })
    // }

    render(){
        return <Aux>
                <Toolbar open={this.sideDrawerToggleHandler}/>
                <SideDrawer closed={this.sideDrawerToggleHandler} open={this.state.showSideDrawer}/>
                {/* <div>Toolbar, Side Drawer, Backdrop</div> */}
                <main className={classes.Content}>{this.props.children}</main>
            </Aux>;
    }
}
    

export default Layout;