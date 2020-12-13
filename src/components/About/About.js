import React from 'react'
import {connect} from 'react-redux'
import {RootReducer} from '../../reducer/RootReducer'

// const countHandler = (props) =>{
// props.increment();
// }
const About = (props) => {
    return (
        <div>
            <h1>It's just a weather app</h1>
           
            {/* <button onClick = {countHandler(props)}>click to count</button> */}
        </div>
    )
}

// const mapStateToProps  = state =>{
    
//     return {
//        count:state.count
//     }
// }
// const mapDispatchToProps  = dispatch =>{
//     return {
//         increment: () =>dispatch("Add")
//     }
// }

export default  connect(null,null)(About)