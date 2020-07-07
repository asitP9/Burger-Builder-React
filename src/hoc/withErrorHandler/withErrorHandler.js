import React,{Component} from 'react';
import Aux from '../Auxiliary';
import Modal from '../../Component/UI/Modal/Modal';
import axios from '../../axios-orders';

const withErrorHAndler=(WrappedComponent, axios)=>{
   
//    below is the anonymous class called class Factory, so withErrorHandler create this classes
    return class extends Component{

        componentDidMount(){
            axios.interceptors.request.use(req=>{
                this.setState({
                    error:null
                });
                return req;
            },)
            axios.interceptors.response.use(res=>res, error=>{
                console.log("ERROR!!!!!!", error);
                this.setState({
                    error:error
                })
            })
        }

        modalCloseHandler=()=>{
            this.setState({
                error:null
            })
        }

        constructor(props){
            super(props);
            this.state={
                error:null,
            }
        }

        render(){
            return <Aux>
                <Modal showThisModal={this.state.error} clickBackdrop={this.modalCloseHandler}>
                    {this.state.error?this.state.error.message:null}
                </Modal>
                <WrappedComponent {...this.props}/>
            </Aux>
        }
    }
}


export default withErrorHAndler;