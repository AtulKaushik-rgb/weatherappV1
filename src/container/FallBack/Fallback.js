import React from 'react'

import "./FallBack.css";

const Fallback = props => {
    let errorMessage = <h1>Something Went Wrong</h1>
    if(props??props.message)
    {
    errorMessage = <h1>{props.message}</h1>
    }
    return (
        <div className ="blur">
            <div className = "modal">
                {errorMessage}
            </div>
            
        </div>
    )
}
export default Fallback;

