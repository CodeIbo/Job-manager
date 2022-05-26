import React from "react";

const Context = React.createContext({
  localdata: [],
  clonedData: [],
  setLocalData: () => {},
  setShowItem: () => {},
  setClonedData: () => {},
  setColor: () => {},
});

export default Context;
