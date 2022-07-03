import NavMainTopContainer from "./NavMainTopContainer";
import RadioButtonsHandler from "../SearchField/RadioButtonsHandler";
import SearchHandler from "../SearchField/SearchHandler";
import RightSiteNavContainer from "./RightSiteNavContainer";
import AddNewHandler from "../AddNewButton/AddNewHandler";

const navBar = () => (
  <NavMainTopContainer>
    <AddNewHandler />
    <RightSiteNavContainer>
      <SearchHandler />
      <RadioButtonsHandler />
    </RightSiteNavContainer>
  </NavMainTopContainer>
)
export default navBar