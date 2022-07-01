import { useEffect } from "react";
import Data from "./Data/Data";
import NavBar from "./NavBar/NavBar";
import "./index.module.scss";
import HelpButton from "./CustomComponents/Style/Icons/Help";
import { useDispatch } from 'react-redux';
import { validationLocalData } from "./State/Reducers/DataManager";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(validationLocalData());
  }, []);

  return (
    <>
      <NavBar />
      <Data />
      <HelpButton/>
    </>
  );
}


export default App;
