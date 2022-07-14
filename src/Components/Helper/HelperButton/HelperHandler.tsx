import HelpButton from "./Help";
import { useDispatch } from "react-redux";
import { popupSetup } from "../../../State/Reducers/PopUpManager";

const HelperHandler: React.FC<{ typeHelp: string }> = ({ typeHelp }) => {
  const dispatch = useDispatch();
  return <HelpButton onClick={() => dispatch(popupSetup(typeHelp))} />;
};
export default HelperHandler;
