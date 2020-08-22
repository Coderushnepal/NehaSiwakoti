import  React ,{Component} from "react";

import { connect } from "react-redux";
import { bindActionCreators} from "redux";

import {counterActions,dateActions } from '../../../actions';


class Counter extends Component{
    constructor(props){
        super(props);
        this.state ={
            count:this.props.count,

        };
    };

     handleIncrease = () =>{
         this.setState(
             {
             count: this.props.count+1,
             },
             ()=>{
                 this.props.increaseCount();
                 this.props.addDate();
             }
         );
         
     };
     handleDecrease = () =>{
        this.setState(
            {
            count: this.props.count-1,
            },
            ()=>{
                this.props.decreaseCount();
                this.props.removeDate();
            }
        );
        
    };
    handleModify = () =>{
        const newValue = Math.floor(Math.random()*10);
        this.setState(
            {
            count: newValue,
            },
            ()=>{
                this.props.modifyCount(newValue);
            }
        );
        
        };


 
 render() {
     const {count} = this.state;
     const {actions}= this.props;
     return(
     <div>
         <p> 
             <span onClick={this.handleModify}> Counter {count} </span>
         <button style={{
             position:"relative",
             clear:"both",
             padding:"10px",
             margin:"10px",
         }}
         onClick={actions.increaseCount}
         > +</button>
         <button style={{
             position:"relative",
             clear:"both",
             padding:"10px",
             margin:"10px",
         }}
         onClick={actions.decreaseCount}
         > -</button>

         
         
         </p>
         
     </div>
     
     );
        }
    };
    

    
     

 
 

 const mapStateToProps = (state) =>{
     return{
         count:state.counterReducer.count,
     };
    };
    
    const mapDispatchToProps = (dispatch) =>{
        return{
            actions: bindActionCreators({ ...counterActions , ...dateActions}, dispatch),
        };
    };


 export default  connect(mapStateToProps, mapDispatchToProps)(Counter);