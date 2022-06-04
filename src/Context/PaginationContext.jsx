import React, { useState, useContext } from "react";
import Context from "./DataContext";

const PaginationContext = React.createContext({
  currentPage: null,
  pageNumber: null,
  currentPosts: [],
});

export const PaginationContextProvider = (props) => {
  // declarations
  const [postPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  //logic
  const ctx = useContext(Context);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = ctx.clonedDataCount.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  const pageNumber = Math.ceil(ctx.clonedDataCount.length / postPerPage);

  return (
    <PaginationContext.Provider
      value={{
        setCurrentPage: setCurrentPage,
        currentPosts: currentPosts,
        pageNumber: pageNumber,
      }}
    >
      {props.children}
    </PaginationContext.Provider>
  );
};

export default PaginationContext;
