import { Box } from "@mui/system";
import Background from "../BackgroundPopup/Background";
import CloserPopup from "../CloserPopupX/CloserHandler";
import HelpButton from "../HelperButton/Help";
import TabContext from "@mui/lab/TabContext";
import { FormControlLabel, Radio } from "@mui/material";
import { useEffect, useState } from "react";
import { LinkIcon } from "../Icons/Icons";
import MainFormContainer from "../FormComponents/MainFormContainer";
import TitleBox from "../FormComponents/TitleBox";
import FormTabPanel from "../FormComponents/FormTabPanel";
import FormTabList from "../FormComponents/FormTabList";
import FormTab from "../FormComponents/FormTab";
import {
  FormRadioGroup,
  FormSentRadioSX,
  FormPendingRadioSX,
  FormRejectRadioSX,
  FormActiveRadioSX,
} from "../FormComponents/FormRadioComponents";
import FormButton from "../FormComponents/FormButton";
import FormBoxButton from "../FormComponents/FormBoxButtons";
import {
  editChanges,
  editSetupID,
  OneJob,
} from "../../State/Reducers/DataManager";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../State/store";
import CustomFormInpuLabel from "../FormComponents/FormInput/CustomFormInpuLabel";
import useColorRecognize from "../../Hooks/use-recognizeColor";
import EditHandler from "./EditHandler";
import { popupSetup } from "../../State/Reducers/PopUpManager";
import {
  validTittle,
  validArray,
  validLink,
  reset,
} from "../../State/Reducers/ValidationForm";
import LinkWrapper from "../TableComponents/LinkWrapper";
const EditForm: React.FC<{ object?: OneJob }> = ({ object }) => {
  const validForm = useSelector((state: RootState) => state.validForm);

  const dispatch = useDispatch();
  const [defaultValue, setDefaultValue] = useState(object.status);
  const [edited, setEdited] = useState<OneJob>({
    id: object.id,
    status: object.status,
    companySite: object.companySite,
    skills: object.skills,
    link: object.link,
    customDescription: object.customDescription,
  });
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDefaultValue(e.target.value);
  };

  useEffect(() => {
    setEdited((prevState) => ({
      ...prevState,
      status: defaultValue,
    }));
  }, [defaultValue]);

  const removeEditModeHandler = () => {
    dispatch(editSetupID(NaN));
    dispatch(
      editChanges({
        id: NaN,
        status: "",
        companySite: "",
        skills: [],
        link: "",
        customDescription: "",
      })
    );
    dispatch(popupSetup(""));
    dispatch(reset());
  };
  const companyEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEdited((prevState) => ({
      ...prevState,
      companySite: e.target.value,
    }));
  };
  const skillEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputConvert = e.target.value.split(",");

    setEdited((prevState) => ({
      ...prevState,
      skills: inputConvert,
    }));
  };
  const linkEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEdited((prevState) => ({ ...prevState, link: e.target.value }));
  };
  const descriptionEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEdited((prevState) => ({
      ...prevState,
      customDescription: e.target.value,
    }));
  };
  const colorRecognize = useColorRecognize(defaultValue);

  useEffect(() => {}, [edited]);

  useEffect(() => {
    const inputTimer = setTimeout(() => {
      dispatch(validTittle({ type: "edit", content: edited.companySite }));
    }, 200);

    return () => {
      clearTimeout(inputTimer);
    };
  }, [edited.companySite]);
  useEffect(() => {
    const inputTimer = setTimeout(() => {
      dispatch(validArray({ type: "edit", content: edited.skills }));
    }, 200);

    return () => {
      clearTimeout(inputTimer);
    };
  }, [edited.skills]);
  useEffect(() => {
    const inputTimer = setTimeout(() => {}, 200);
    dispatch(validLink({ type: "edit", content: edited.link }));
    return () => {
      clearTimeout(inputTimer);
    };
  }, [edited.link]);

  return (
    <Background>
      <MainFormContainer sx={{ borderColor: colorRecognize }}>
        <EditHandler editedRow={edited}>
          <TitleBox>
            Edit existing job
            <HelpButton sx={{ fontSize: "2em" }} />
            <CloserPopup />
          </TitleBox>
          <hr />
          <TabContext value={value}>
            <FormTabList onChange={handleChange} variant="fullWidth">
              <FormTab label="Company" value="1" />
              <FormTab label="Tags" value="2" />
              <FormTab label="Comment" value="3" />
            </FormTabList>
            <FormTabPanel value="1">
              <CustomFormInpuLabel
                labelName="CompanyName"
                onChange={companyEdit}
                value={edited.companySite}
                maxLenght={150}
                required={true}
              />
              <Box
                sx={{
                  marginTop: "1em",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5em",
                }}
              >
                <CustomFormInpuLabel
                  labelName="Link"
                  onChange={linkEdit}
                  value={edited.link}
                  maxLenght={500}
                  required={true}
                />
                <LinkWrapper
                  href={edited.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon
                    sx={{
                      width: "2em",
                      height: "2em",
                      transform: "translateY(40%)",
                    }}
                  />
                </LinkWrapper>
              </Box>
            </FormTabPanel>
            <FormTabPanel value="2">
              <Box>
                <CustomFormInpuLabel
                  labelName="Tags"
                  onChange={skillEdit}
                  value={edited.skills.join(",")}
                  maxLenght={150}
                  required={true}
                  rows={5}
                  multiline={true}
                />
              </Box>
            </FormTabPanel>
            <FormTabPanel value="3">
              <Box>
                <CustomFormInpuLabel
                  labelName="Comment"
                  onChange={descriptionEdit}
                  value={edited.customDescription}
                  maxLenght={200}
                  required={false}
                  multiline={true}
                  rows={5}
                />
                <FormRadioGroup row onChange={onChange} value={defaultValue}>
                  <FormControlLabel
                    value="sended"
                    control={<Radio color="sentJob" sx={FormSentRadioSX} />}
                    label="Sent"
                    disableTypography
                  />
                  <FormControlLabel
                    value="opened"
                    control={
                      <Radio color="pendingJob" sx={FormPendingRadioSX} />
                    }
                    label="Opened"
                    disableTypography
                  />
                  <FormControlLabel
                    value="canceled"
                    control={
                      <Radio color="rejectedJob" sx={FormRejectRadioSX} />
                    }
                    label="Declined"
                    disableTypography
                  />
                  <FormControlLabel
                    value="offer"
                    control={<Radio color="activeJob" sx={FormActiveRadioSX} />}
                    label="Hired"
                    disableTypography
                  />
                </FormRadioGroup>
              </Box>
            </FormTabPanel>
          </TabContext>
          <FormBoxButton>
            <FormButton
              variant="text"
              color="interactiveColor"
              type="button"
              onClick={removeEditModeHandler}
            >
              Cancel
            </FormButton>
            <FormButton
              type="submit"
              variant="contained"
              color="interactiveColor"
              disabled={Object.values(validForm.edit).includes(false)}
            >
              Done
            </FormButton>
          </FormBoxButton>
        </EditHandler>
      </MainFormContainer>
    </Background>
  );
};

export default EditForm;
