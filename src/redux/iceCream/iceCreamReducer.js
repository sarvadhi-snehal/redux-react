import { BUY_ICECREAM ,
    SELL_ICECREAM,
    RESET_ICECREAM} from './iceCreamType'


const intialState = {
    numOfIceCreams : 0
}


const iceCreamReducer = (state= intialState,action) => {
    switch(action.type) {
        case BUY_ICECREAM:
            return{
                ...state,
                numOfIceCreams : state.numOfIceCreams + 1
            }
            break;
        case SELL_ICECREAM:
            return{...state,
                numOfIceCreams : state.numOfIceCreams - 1
            }
            break;
        case RESET_ICECREAM:
            return{
                ...state,
                numOfIceCreams : 0
            }
            break;
        default: return state
    }
}



export default iceCreamReducer;