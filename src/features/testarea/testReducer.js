import {INCREMENT_COUNTER,DECRIPMENT_COUNTER} from './testConstants';

const initialState = {
    data:34
}
const testReducer = (state =  initialState,action)=>{
    switch (action.type){
        case INCREMENT_COUNTER :
            return {...state,data:state.data+1};
        case DECRIPMENT_COUNTER :
            return {...state,data:state.data-1} ;
        default:
            return state ;
    }
}
export default testReducer ;