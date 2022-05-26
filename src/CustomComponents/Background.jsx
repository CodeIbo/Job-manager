import React, { useRef, useContext, useEffect, forwardRef } from "react";
import clasess from "./Background.module.scss";
import Context from "../Context/DataContext";

const Background = (props) => {
  const localDataContext = useContext(Context);

  const BackgroundCloser = (ref) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          localDataContext.setShowForm(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
    //https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
  };
  const wrapperRef = useRef(null);
  BackgroundCloser(wrapperRef);

  return (
    <div className={clasess["backgroundLogic"]}>
      <div ref={wrapperRef} className={clasess["backgroundLogic--widthModif"]}>
        {props.children}
      </div>
    </div>
  );
};

export default Background;
