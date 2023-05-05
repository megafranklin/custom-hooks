// { type: [ todo remove, payload: ID ] }

export const todoReducer = ( todos = [], action ) => {


    switch ( action.type ) {
        case '[TODO] Add Todo':
            return [ ...todos, action.payload ];
        
        case '[TODO] Remove Todo':
            return todos.filter( todo => todo.id !== action.payload );

        case '[TODO] Toggle Todo':
            return todos.map( todo => {

                if ( todo.id === action.payload ) {// id
                    return {
                        ...todo,
                        done: !todo.done,
                    }
                }

                return todo;
            });
    
        default:
            return todos;
    }

    
}