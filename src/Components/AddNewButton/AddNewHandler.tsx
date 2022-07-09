import { useDispatch } from "react-redux";
import AddNew from "./AddNewButton";
import { popupSetup } from "../../State/Reducers/PopUpManager";


const AddNewHandler = () => {
    const dispatch = useDispatch();
    return <AddNew onClick={() =>  dispatch(popupSetup('addNew'))}>+ Add New</AddNew>


}
export default AddNewHandler