import { useEffect, useState } from "react";
import Background from "../BackgroundPopup/Background";
import CloserPopup from "../CloserPopupX/CloserHandler";
import { useDispatch, useSelector } from "react-redux";
import { OneJob } from "../../State/Reducers/DataManager";
import { RootState } from "../../State/store";
import AddHandler from "./AddHandler";
import useColorRecognize from "../../Hooks/use-recognizeColor";
import { TabContext } from "@mui/lab";
import { Box, FormControlLabel, Radio } from "@mui/material";
import FormBoxButton from "../FormComponents/FormBoxButtons";
import FormButton from "../FormComponents/FormButton";
import CustomFormInpuLabel from "../FormComponents/FormInput/CustomFormInpuLabel";
import LinkWrapper from "../TableComponents/LinkWrapper";
import {
  FormRadioGroup,
  FormSentRadioSX,
  FormPendingRadioSX,
  FormRejectRadioSX,
  FormActiveRadioSX,
} from "../FormComponents/FormRadioComponents";
import FormTab from "../FormComponents/FormTab";
import FormTabList from "../FormComponents/FormTabList";
import FormTabPanel from "../FormComponents/FormTabPanel";
import MainFormContainer from "../FormComponents/MainFormContainer";
import TitleBox from "../FormComponents/TitleBox";
import { LinkIcon } from "../Icons/Icons";
import { popupSetup } from "../../State/Reducers/PopUpManager";
import {
  validTittle,
  validLink,
  validArray,
  reset,
} from "../../State/Reducers/ValidationForm";
import HelperHandler from "../Helper/HelperButton/HelperHandler";
const Form = () => {
  const dispatch = useDispatch();
  const [addNew, setAddNew] = useState<OneJob>({
    id: Date.now(),
    status: "sended",
    companySite: "",
    skills: [],
    link: "",
    customDescription: "",
  });
  const [value, setValue] = useState("1");
  const colorRecognize = useColorRecognize(addNew.status);
  const validForm = useSelector((state: RootState) => state.validForm);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const setJobStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddNew({ ...addNew, status: e.target.value });
  };

  const companyAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddNew({ ...addNew, companySite: e.target.value });
  };
  const skillAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputConvert = e.target.value.split(",");
    setAddNew({ ...addNew, skills: inputConvert });
  };
  const linkAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddNew({ ...addNew, link: e.target.value });
  };
  const descriptionAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddNew({ ...addNew, customDescription: e.target.value });
  };
  const cancelHandler = () => {
    dispatch(popupSetup(""));
    dispatch(reset());
  };
  useEffect(() => {
    const inputTimer = setTimeout(() => {
      dispatch(validTittle({ type: "add", content: addNew.companySite }));
    }, 500);
    return () => {
      clearTimeout(inputTimer);
    };
  }, [addNew.companySite]);
  useEffect(() => {
    const inputTimer = setTimeout(() => {
      dispatch(validArray({ type: "add", content: addNew.skills }));
    }, 500);
    return () => {
      clearTimeout(inputTimer);
    };
  }, [addNew.skills]);
  useEffect(() => {
    const inputTimer = setTimeout(() => {
      dispatch(validLink({ type: "add", content: addNew.link }));
    }, 500);
    return () => {
      clearTimeout(inputTimer);
    };
  }, [addNew.link]);

  return (
    <Background>
      <MainFormContainer sx={{ borderColor: colorRecognize }}>
        <AddHandler newJob={addNew}>
          <TitleBox>
            Add new Job
            <HelperHandler typeHelp="helperADD" />
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
                onChange={companyAdd}
                value={addNew.companySite}
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
                  onChange={linkAdd}
                  value={addNew.link}
                  maxLenght={500}
                  required={true}
                />
                <LinkWrapper
                  href={addNew.link}
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
                  onChange={skillAdd}
                  value={addNew.skills.join(",")}
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
                  onChange={descriptionAdd}
                  value={addNew.customDescription}
                  maxLenght={200}
                  required={false}
                  multiline={true}
                  rows={5}
                />
                <FormRadioGroup
                  row
                  onChange={setJobStatus}
                  value={addNew.status}
                >
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
              onClick={cancelHandler}
            >
              Cancel
            </FormButton>
            <FormButton
              type="submit"
              variant="contained"
              color="interactiveColor"
              disabled={Object.values(validForm.add).includes(false)}
            >
              Done
            </FormButton>
          </FormBoxButton>
        </AddHandler>
      </MainFormContainer>
    </Background>
  );
};

export default Form;
