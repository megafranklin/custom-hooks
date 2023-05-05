import { useState } from 'react';


export const useCounter = ( initialValue = 10 ) => {

    const [ counter, setCounter ] = useState( initialValue )

    const increment = ( value = 1 ) => {
        setCounter( ( counter ) => counter + value );
    }

    const decrement = ( value = 1 ) => {
        // if ( counter === 0 ) return;

        setCounter( ( counter ) => counter - value );
    }

    const reset = () => {
        setCounter( ( counter ) => initialValue );
    }

    return {
        // counter: counter,
        counter,
        increment,
        decrement,
        reset,
    }

}

