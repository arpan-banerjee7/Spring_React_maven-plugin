import React from 'react';
import LocaleContext from './LocaleContext';
import ConsumeContext from './ConsumeContext';
function ContextDemo(){

    return (
    
    <LocaleContext.Consumer>
    {(value)=>
    
    <ConsumeContext locale={value}/>
    
    }
    </LocaleContext.Consumer>
    
    )
};

export default ContextDemo;