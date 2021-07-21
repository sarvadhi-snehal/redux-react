import  {BUY_CAKE, GIVE_CAKE, RESET_CAKE} from './cakeType'

const intialState = {
    numOfCake : 1
}

const cakeReducer = (state = intialState, action) => {
        switch (action.type) {
            case BUY_CAKE:
                return{
                    ...state,
                    numOfCake :state.numOfCake + 1
                }
                break;
            case GIVE_CAKE:
                return{
                    ...state,
                    numOfCake :state.numOfCake - 1
                }
                break;
            case RESET_CAKE:
                return{
                    ...state,
                    numOfCake : 0
                }
            default:
                return state
        }
}

export default cakeReducer;