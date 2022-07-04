import { useState } from "react";
import Background from "../BackgroundPopup/Background";
import DropDownMenu from "../../CustomComponents/DropDownMenu";
import CustomButtonSubmit from "../../CustomComponents/Style/MuiCustomComponents/CustomSubmitButton";
import CloserPopup from "../CloserPopupX/CloserHandler";
import { useDispatch, useSelector } from "react-redux";
import { popupSetup } from "../../State/Reducers/PopUpManager";
import { OneJob } from "../../State/Reducers/DataManager";
import { addLogic } from "../../State/Reducers/DataManager";
import EditTextField from "../InputFormTextField/EditInput";
import useArrayValid from "../../Hooks/use-arrayValid";
import { validArray } from "../../State/Reducers/DataManager";
import { RootState } from "../../State/store";
import PopupWrapper from "../Popup/FormPopUp";
import FormWrapper from "./FormWrapper";

const Form = () => {
  const validationArray = useSelector((state: RootState) => state.data.validationForm.skillArray)
  const validArrayHook = useArrayValid
  const dispatch = useDispatch();
  const [addNew, setAddNew] = useState<OneJob>({
    id: Date.now(),
    status: "",
    companySite: "",
    skills: [],
    link: "",
    customDescription: "",
  });
  const setJobStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddNew({ ...addNew, status: e.target.value })
  }
  const addHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(addNew);
    dispatch(addLogic(addNew));
    dispatch(popupSetup(""));
  };
  const companyAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddNew({ ...addNew, companySite: e.target.value })
  }
  const skillAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputConvert = e.target.value.split(",")
    setAddNew({ ...addNew, skills: inputConvert })
    if (!validArrayHook(inputConvert)) {
      dispatch(validArray(true))
    }
    else {
      dispatch(validArray(false))
    }
  }
  const linkAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddNew({ ...addNew, link: e.target.value })
  }
  const descriptionAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddNew({ ...addNew, customDescription: e.target.value })
  }
  return (
    <Background>
      <FormWrapper onSubmit={addHandler} >
        <PopupWrapper>
          <CloserPopup />
          <EditTextField labelName="Company name" onChange={companyAdd} value={addNew.companySite} required={true} maxLenght={50} color='white'/>
          <EditTextField labelName="skills" onChange={skillAdd} value={addNew.skills.join(',')} required={true} maxLenght={150} color='white'/>

          <EditTextField labelName='Link' onChange={linkAdd} value={addNew.link} maxLenght={500} required={true} color='white'/>
          <EditTextField labelName='Description' onChange={descriptionAdd} value={addNew.customDescription} maxLenght={200} required={false} color='white'/>
          <DropDownMenu onChange={setJobStatus} initialValue={addNew.status} />
          <CustomButtonSubmit type="submit" variant="contained" disabled={!validationArray}>
            Send
          </CustomButtonSubmit>
        </PopupWrapper>
      </FormWrapper>
    </Background>
  );
};

export default Form;
