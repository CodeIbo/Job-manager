import  { useRef, useContext, useEffect } from "react";
import clasess from "./Background.module.scss";
import Context from "../../Context/DataContext";

const Background = (props) => {
  const localDataContext = useContext(Context);

  const BackgroundCloser = (ref) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          localDataContext.setShowItem('');
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
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
