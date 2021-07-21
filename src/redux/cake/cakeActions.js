import { BUY_CAKE, GIVE_CAKE, RESET_CAKE } from "./cakeType"


export const buyCake = (number) => {
    return{
        type: BUY_CAKE,
       
    }
}

export const giveCake = (number) => {
    return{
        type: GIVE_CAKE
    }
}

export const resetCake = () => {
    return{
        type: RESET_CAKE
    }
}