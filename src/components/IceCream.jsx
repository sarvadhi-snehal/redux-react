import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import {buyIcecream, sellIcecream, resetIcecream  } from '../redux'
export default function numOfIceCreams() {
    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
    const dispatch = useDispatch()
    return (
        <section className="hooks">
        <h1>Ice Cream</h1>
   <button onClick={()=> dispatch(buyIcecream())}>Increment</button>
    <p>{numOfIceCreams}</p>
    <button disabled={numOfIceCreams < 1 ? true : false } onClick={()=> dispatch(sellIcecream())}>Decrement</button>
   <button onClick={()=> dispatch(resetIcecream())}>reset</button>

 </section>)
}

