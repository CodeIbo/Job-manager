import NavMainTopContainer from "../CustomComponents/Containers/NavMainTopContainer";
import RadioButtonsHandler from "../CustomComponents/Logic/RadioButtonsHandler";
import SearchHandler from "../CustomComponents/Logic/SearchHandler";
import RightSiteNavContainer from "../CustomComponents/Containers/RightSiteNavContainer";
import AddNew from "../CustomComponents/Style/Html/AddNewButton";


const navBar = () => (

  <NavMainTopContainer>
    <AddNew/>
    <RightSiteNavContainer>
    <SearchHandler/>
    <RadioButtonsHandler/>
    </RightSiteNavContainer>
    
  </NavMainTopContainer>
)
export default navBar