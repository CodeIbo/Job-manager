import { useEffect } from "react";
import Data from "./Components/TableData/Data";
import NavBar from "./Components/NavBar/NavBar";
import { useDispatch } from "react-redux";
import { validationLocalData } from "./State/Reducers/DataManager";
import PaginationFunction from "./Components/Pagination/Pagination";
import MainContainer from "./Components/Container/MainContainer";
import ShowPopupManager from "./Components/PopUpManager/PopUpHandler";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(validationLocalData());
  }, []);

  return (
    <>
      <NavBar />
      <MainContainer>
        <Data />
      </MainContainer>
      <PaginationFunction />
      <ShowPopupManager />
    </>
  );
}

export default App;
