import React from 'react';

function reducer(state,action){
    if(action==="increment"){
        return state+1;
    }
    else if(action==="decrement"){
        return state-1;
    }
    else if(action==="reset"){
        return state=0;
    }
    else{
        throw new Error;
    }
};

function TestUseReducer(){
    const [count,dispatch]=React.useReducer(reducer,0);
    return(
        <React.Fragment>
            <h1>{count}</h1>
            <br/>
            <button onClick={()=>dispatch("increment")}>+</button>
            <button onClick={()=>dispatch("decrement")}>-</button>
            <button onClick={()=>dispatch("reset")}>Reset</button>
        </React.Fragment>
    );
}

export default TestUseReducer;