import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { popupSetup } from "../../State/Reducers/PopUpManager";
import BackgroundPopUp from "./BackgroundPopup";
import WrapperPopup from "./WrapperPopup";

const Background: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {
  const dispatch = useDispatch();
  const BackgroundCloser = (ref: React.RefObject<HTMLElement>) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          dispatch(popupSetup(''))
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
    <BackgroundPopUp>
      <WrapperPopup ref={wrapperRef}>
        {children}
      </WrapperPopup>
    </BackgroundPopUp>
  );
};

export default Background;
