import NavMainTopContainer from "./NavMainTopContainer";
import RadioButtonsHandler from "../SearchField/RadioButtonsHandler";
import SearchHandler from "../SearchField/SearchHandler";
import RightSiteNavContainer from "./RightSiteNavContainer";
import AddNewHandler from "../AddNewButton/AddNewHandler";
import MenuIcon from "@mui/icons-material/Menu";
import HelperHandler from "../HelperButton/HelperHandler";
import LeftSiteNavContainer from "./LeftSiteNavContainer";

const navBar = () => (
  <NavMainTopContainer color="standardBox">
    <LeftSiteNavContainer>
      <MenuIcon sx={{
        width:'1.3em',
        height:'1.3em',
        marginRight:'0.5em'
      }}/>
      <RadioButtonsHandler />
      <SearchHandler />
    </LeftSiteNavContainer>
    <RightSiteNavContainer>
      <AddNewHandler />
      <HelperHandler />
    </RightSiteNavContainer>
  </NavMainTopContainer>
);
export default navBar;
