import Data from "./Components/TableData/Data";
import NavBar from "./Components/NavBar/NavBar";
import PaginationFunction from "./Components/Pagination/Pagination";
import MainContainer from "./Components/Container/MainContainer";
import ShowPopupManager from "./Components/PopUpManager/PopUpHandler";

function App() {
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
