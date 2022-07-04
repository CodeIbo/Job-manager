import { useEffect } from "react";
import { useSelector } from "react-redux";
import Helper from "../Helper/Helper";
import Form from "../Components/AddNewForm/AddForm";
import { RootState } from "../State/store";

const ShowPopupManager = () => {
  const popupHandler = useSelector((state: RootState) => state.popup.popup);

  useEffect(() => {
    if (popupHandler.length > 0) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  let manager:JSX.Element;

  if (popupHandler === "helper") {
    manager = <Helper />;
  }
  if (popupHandler === "addNew") {
    manager = <Form />
  }

  console.log(popupHandler);
  return <div>{manager}</div>;
};

export default ShowPopupManager;
