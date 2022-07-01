import React from 'react'
import { editLogic, editSetupID, inputFilterManager } from '../../State/Reducers/DataManager';
import { useDispatch } from "react-redux";
import styled from '@emotion/styled';

const FormEditor = styled('form')({
   height: "500px",
   display: 'flex',
})


const FormEdit: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const dispatch = useDispatch();

    const formHandler = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(editLogic());
        dispatch(editSetupID(NaN));
        dispatch(inputFilterManager(""));
    };
    return (
        <FormEditor
            onSubmit={formHandler}
        >
            {children}
        </FormEditor>)
}

export default FormEdit


