import React from "react";
import { addLogic, OneJob } from "../../State/Reducers/DataManager";
import { popupSetup } from "../../State/Reducers/PopUpManager";
import { useDispatch } from "react-redux";
import { reset } from "../../State/Reducers/ValidationForm";
const AddHandler: React.FC<{
  children: JSX.Element | JSX.Element[];
  newJob: OneJob;
}> = ({ children, newJob }) => {
  const dispatch = useDispatch();
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addLogic(newJob));
    dispatch(popupSetup(""));
    dispatch(reset());
  };

  return <form onSubmit={onSubmit}>{children}</form>;
};

export default AddHandler;
