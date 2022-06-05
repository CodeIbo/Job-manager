import React from "react";

const Context = React.createContext({
  localdata: [],
  clonedDataCount: [],
  setLocalData: () => {},
  setShowItem: () => {},
  setClonedData: () => {},
  setColor: () => {},
});

export default Context;
