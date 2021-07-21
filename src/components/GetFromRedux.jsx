import React from 'react'
import {buyCake, giveCake, resetCake} from '../redux'
import {connect} from 'react-redux'
import './HooksCake.scss'
function getFromRedux(props) {
    return (
        <section className="hooks">
            <h1>Redux connect function</h1>

           <button onClick={props.buyCake}>Increment</button>
           <p>{props.numOfCake}</p>
          <button disabled={props.numOfCake === 0 && "true" } onClick={props.giveCake}>give cake</button>
       <button onClick={props.resetCake}>reset</button>
        

        </section>
    )
}
const mapStateToProps = state => {
    return {
        numOfCake : state.numOfCake
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        buyCake : ()=> dispatch(buyCake()),
        giveCake : ()=> dispatch(giveCake()),
        resetCake : ()=> dispatch(resetCake())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(getFromRedux)
