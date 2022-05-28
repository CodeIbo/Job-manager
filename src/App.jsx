import React, { useState, useEffect } from "react";
import Form from "./Form/Form";
import Data from "./Data/Data";
import NavBar from "./NavBar/NavBar";
import "./index.module.scss";
import Context from "./Context/DataContext";
import HelpButton from "./CustomComponents/Help";
import Helper from "./Helper/Helper";
function App() {
  const [showItem, setshowItem] = useState("");
  const [localdata, setlocalData] = useState(
    JSON.parse(localStorage.getItem("data"))
  );
  const [clonedData, setClonedData] = useState(structuredClone(localdata));
  const [colorChanger, setColorChanger] = useState("");

  if (localdata === null) {
    localStorage.setItem("data", JSON.stringify([]));
  } else {
    localStorage.setItem("data", JSON.stringify(localdata));
  }

  useEffect(() => {
    setClonedData(localdata);
  }, [localdata]);

  useEffect(() => {
    if (showItem.length > 0) {
      document.body.style.overflow ='hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showItem]);

  useEffect(() => {
    setlocalData((prevState) => {
      return prevState.map((singleObject) => {
        if (singleObject.id === colorChanger.id) {
          return { ...singleObject, status: colorChanger.status };
        }
        return singleObject;
      });
    });
  }, [colorChanger]);

  const helpHandler = () => {
    setshowItem("helper");
  };

  return (
    <Context.Provider
      value={{
        localdata: localdata,
        clonedData: clonedData,
        setLocalData: setlocalData,
        setShowItem: setshowItem,
        setClonedData: setClonedData,
        setColor: setColorChanger,
      }}
    >
      <NavBar />
      {showItem === "form" && <Form />}
      {showItem === "helper" && <Helper />}
      <Data />
      <HelpButton onClick={helpHandler} />
    </Context.Provider>
  );
}

export default App;
