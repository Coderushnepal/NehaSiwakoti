import {COUNTER_INCREMENT,COUNTER_DECREMRNT,COUNTER_MODIFY} from "../constants/actions";

export const  increaseCount = () =>{
    return  {type:COUNTER_INCREMENT };

};
export const  decreaseCount = () =>{
    return  {type:COUNTER_DECREMRNT };

};
export const modifyCount = (payload) => {
    return {
        type:COUNTER_MODIFY,
        payload
    }
}