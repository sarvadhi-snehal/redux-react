import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import {buyCake, giveCake, resetCake} from '../redux'
import  './HooksCake.scss'
function HooksCake(props) {
    const numOfCake = useSelector(state => state.cake.numOfCake)
    const dispatch = useDispatch()
    return (
        <section className="hooks">
            <h1>Redux Hooks</h1>
       <button onClick={()=> dispatch(buyCake())}>Increment</button>

        <p>{numOfCake}</p>
        <button disabled={numOfCake < 1 ? true : false } onClick={()=> dispatch(giveCake())}>Decrement</button>
       <button onClick={()=> dispatch(resetCake())}>reset</button>

     </section>
    )
}

export default HooksCake
