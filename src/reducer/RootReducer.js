const initialState = {
    count: 0,
  };

const Reducer = (state=initialState,action) =>{

    console.log("inside reducer")
    switch(action.type){

        case "add":{
            state.count = state.count + 1;
            console.log("value of current count is ",state.count)
            break;
        }
        case "substract":{
            console.log("substracted");
            break;
        }
        default:
            console.log("will never reach here")
            
    }

}

export default Reducer;