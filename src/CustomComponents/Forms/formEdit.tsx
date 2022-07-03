import React from 'react'
import { editLogic, editSetupID, inputFilterManager,validArray } from '../../State/Reducers/DataManager';
import { useDispatch } from "react-redux";


const FormEdit: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const dispatch = useDispatch();
    const formHandler = (e: React.FormEvent) => {

        e.preventDefault();
        dispatch(editLogic());
        dispatch(editSetupID(NaN));
        dispatch(inputFilterManager(""));
    };
    return (
        <form
            onSubmit={formHandler}
        >
            {children}
        </form>)
}

export default FormEdit


