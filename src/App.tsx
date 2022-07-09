import { useEffect } from "react";
import Data from "./Components/TableData/Data";
import NavBar from "./Components/NavBar/NavBar";
import "./index.module.scss";
import { useDispatch } from "react-redux";
import { validationLocalData } from "./State/Reducers/DataManager";
import PaginationFunction from "./Components/Pagination/Pagination";
import Wraper from "./CustomComponents/Containers/Wraper";
import ShowPopupManager from "./Components/PopUpManager/PopUpHandler";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(validationLocalData());
  }, []);

  return (
    <>
      <NavBar />
      <Wraper>
        <Data />
        <PaginationFunction />
      </Wraper>
      <ShowPopupManager />
    </>
  );
}

export default App;
