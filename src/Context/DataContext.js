import React from "react";

const Context = React.createContext({
  localdata: [],
  clonedDataCount: [],
  clonedData: [],
  setLocalData: () => {},
  setShowItem: () => {},
  setClonedData: () => {},
  setColor: () => {},
});

export default Context;
