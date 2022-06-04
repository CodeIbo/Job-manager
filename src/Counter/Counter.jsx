import React, { useContext } from "react";
import Context from "../Context/DataContext";
import clasess from "./Counter.module.scss";


const Counter = () => {
  const clonedContext = useContext(Context);

  return (
    <div className={clasess["counter"]}>
      <span>Actual number offers: {clonedContext.clonedDataCount.length}</span>
     
    </div>
  );
};

export default React.memo(Counter);
