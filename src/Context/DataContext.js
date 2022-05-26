import React from "react";

const Context = React.createContext({
  localdata: [],
  clonedData: [],
  setLocalData: () => {},
  setShowForm: () => {},
  setClonedData: () => {},
  setColor: () => {},
});

export default Context;
