import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {

    const [ formState, setFormState ] = useState( initialForm );

    // const { username, email, password } = formState;

    const onInputChange = ({ target }) => {
        // console.log( event.target );
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm
            // {
            // username: '',
            // email: '',
            // password: ''}
        );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
  }
}
