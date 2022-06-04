import React, { useState, useEffect } from "react";
import Form from "./Form/Form";
import Data from "./Data/Data";
import NavBar from "./NavBar/NavBar";
import "./index.module.scss";
import Context from "./Context/DataContext";
import HelpButton from "./CustomComponents/Help";
import Helper from "./Helper/Helper";
import PaginationFunction from "./Pagination/Pagination";
import { PaginationContextProvider } from "./Context/PaginationContext";
function App() {
  const [showItem, setshowItem] = useState("");
  const [localdata, setlocalData] = useState(
    JSON.parse(localStorage.getItem("data"))
  );
  const [clonedData, setClonedData] = useState(structuredClone(localdata));
  const [colorChanger, setColorChanger] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(3);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = clonedData.slice(indexOfFirstPost, indexOfLastPost);

  if (localdata === null) {
    localStorage.setItem("data", JSON.stringify([]));
  } else {
    localStorage.setItem("data", JSON.stringify(localdata));
  }

  useEffect(() => {
    setClonedData(structuredClone(localdata));
  }, [localdata]);

  useEffect(() => {
    if (showItem.length > 0) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
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
        clonedDataCount: clonedData,
        clonedData: currentPost,
        setLocalData: setlocalData,
        setShowItem: setshowItem,
        setClonedData: setClonedData,
        setColor: setColorChanger,
      }}
    >
      <PaginationContextProvider>
        <NavBar />
        {showItem === "form" && <Form />}
        {showItem === "helper" && <Helper />}
        <Data />

        <PaginationFunction
          totalPosts={clonedData.length}
          postsPerPage={postPerPage}
          paginate={setCurrentPage}
          startPage={currentPage}
        />

        <HelpButton onClick={helpHandler} />
      </PaginationContextProvider>
    </Context.Provider>
  );
}

export default App;
