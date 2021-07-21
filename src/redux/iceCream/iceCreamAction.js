import {BUY_ICECREAM,SELL_ICECREAM, RESET_ICECREAM} from './iceCreamType'

export const  buyIcecream= () => {
    return{
        type: BUY_ICECREAM
    }
}

export const  sellIcecream= () => {
    return{
        type: SELL_ICECREAM
    }
}

export const  resetIcecream= () => {
    return{
        type: RESET_ICECREAM
    }
}