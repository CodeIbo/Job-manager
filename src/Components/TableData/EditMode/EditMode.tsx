import { TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import DropDownMenu from '../../../CustomComponents/DropDownMenu';
import CustomTableCell from '../../../CustomComponents/Style/MuiCustomComponents/CustomTableCell';
import { editChanges, editSetupID, OneJob, validArray } from '../../../State/Reducers/DataManager'
import useArrayValid from '../../../Hooks/use-arrayValid';
import { RootState } from '../../../State/store';
import EditTextField from '../../InputFormTextField/EditInput';
import EditModeButton from './EditModeButtons';
import ButtonWrapper from './ButtonWrapper';

const EditMode: React.FC<{ object: OneJob }> = ({ object }) => {
  const validationArray = useSelector((state: RootState) => state.data.validationForm.skillArray)
  const validArrayHook = useArrayValid
  const dispatch = useDispatch();
  const [defaultValue, setDefaultValue] = useState(object.status)
  const [edited, setEdited] = useState<OneJob>({
    id: object.id,
    status: object.status,
    companySite: object.companySite,
    skills: object.skills,
    link: object.link,
    customDescription: object.customDescription,
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDefaultValue(e.target.value)
  }

  useEffect(() => {
    setEdited((prevState) => ({
      ...prevState,
      status: defaultValue,
    }))
  }, [defaultValue])

  const removeEditModeHandler = () => {
    dispatch(editSetupID(NaN));
    dispatch(editChanges({
      id: NaN,
      status: "",
      companySite: "",
      skills: [],
      link: "",
      customDescription: "",
    }))
  };
  const companyEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEdited((prevState) => ({
      ...prevState,
      companySite: e.target.value,
    }))
  }
  const skillEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputConvert = e.target.value.split(',')
    setEdited((prevState) => ({
      ...prevState,
      skills: inputConvert,
    }))

    if (!validArrayHook(inputConvert)) {
      dispatch(validArray(true))
    }
    else {
      dispatch(validArray(false))
    }
  }
  const linkEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEdited((prevState) => ({ ...prevState, link: e.target.value }))
  }
  const descriptionEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEdited((prevState) => ({
      ...prevState,
      customDescription: e.target.value,
    }))
  }

  useEffect(() => {
    dispatch(editChanges(edited))
  }, [edited]);
  return (
    <TableRow key={object.id}>
      <CustomTableCell>
        <DropDownMenu onChange={onChange} initialValue={defaultValue} />
      </CustomTableCell>
      <CustomTableCell>
        <EditTextField onChange={companyEdit} value={edited.companySite} maxLenght={50} required={true} color='black' />
      </CustomTableCell>
      <CustomTableCell>
        <EditTextField onChange={skillEdit} value={edited.skills.join(",")} maxLenght={150} required={true} color='black' />
      </CustomTableCell>
      <CustomTableCell>
        <EditTextField onChange={linkEdit} value={edited.link} maxLenght={500} required={true} color='black' />
      </CustomTableCell>
      <CustomTableCell>
        <EditTextField onChange={descriptionEdit} value={edited.customDescription} maxLenght={200} required={false} color='black' />

      </CustomTableCell>
      <CustomTableCell>
        <ButtonWrapper>
          <EditModeButton type="submit" disabled={!validationArray}>Save</EditModeButton>

          <EditModeButton type="button" onClick={removeEditModeHandler}>
            Cancel
          </EditModeButton>
        </ButtonWrapper>
      </CustomTableCell>
    </TableRow>
  );
}

export default EditMode