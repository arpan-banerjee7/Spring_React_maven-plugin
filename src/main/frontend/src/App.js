import './App.css';
import ContextDemo from './ContextDemo';
import LocaleContext from './LocaleContext';
import Login from './Login';
import TestUseReducer from './TestUseReducerHook';
import { useStateValue } from './StateProvider';
import React, { useState } from 'react';

function App() {
  const [state,dispatch]=useStateValue();

  const [locState, setlocState] = useState({locale:"en"}); 
  console.log(locState.locale)
  return (
    <div>
      <h1>This is react Use Context demo setup</h1>
      <h3>
        {state.user ? `Logged in as ${state.user}`:"No user Logged In"}
      </h3>
      <Login/>
      <LocaleContext.Provider value={locState.locale}>
      <ContextDemo/>
      </LocaleContext.Provider>
      <hr/>
      <TestUseReducer/>
    
    </div>
  );
}

export default App;
