import React from "react";
import {
  editLogic,
  editSetupID,
  inputFilterManager,
  OneJob,
} from "../../State/Reducers/DataManager";
import { useDispatch } from "react-redux";
import { popupSetup } from "../../State/Reducers/PopUpManager";

const EditHandler: React.FC<{
  children: JSX.Element | JSX.Element[];
  editedRow: OneJob;
}> = ({ children, editedRow }) => {
  const dispatch = useDispatch();
  const formHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(editLogic(editedRow));
    dispatch(editSetupID(NaN));
    dispatch(inputFilterManager(""));
    dispatch(popupSetup(""));
  };
  return <form onSubmit={formHandler}>{children}</form>;
};

export default EditHandler;
