import {INCREMENT_COUNTER,DECRIPMENT_COUNTER} from './testConstants';
export const incrementCounter = () =>{
    return { type:INCREMENT_COUNTER}
}
export  const decrementCounter = ()=>{
    return {type:DECRIPMENT_COUNTER}
}
