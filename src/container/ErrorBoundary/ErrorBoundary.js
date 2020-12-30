import React,{Component} from 'react'
import Fallback from '../FallBack/Fallback'

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        // this.state = {error:false};
    }

    // static getDerivedStateFromError(error){
    //    // alert(error.message)
    //     return{error:true};
    // }

    // componentDidCatch(error, errorInfo) {
    //     // You can also log the error to an error reporting service
    //     console.log(error, errorInfo);
    //   }


    render(){
        // if(this.state.error){
        //     return <Fallback/>
        // }

         return this.props.children

        
    }

}
export default ErrorBoundary;