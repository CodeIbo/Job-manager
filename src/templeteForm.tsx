import { TabContext } from "@mui/lab";
import { TextField, Box, FormControlLabel, Radio } from "@mui/material";
import { useState } from "react";
import Background from "./Components/BackgroundPopup/Background";
import CloserPopup from "./Components/CloserPopupX/CloserHandler";
import FormBoxButton from "./Components/FormComponents/FormBoxButtons";
import FormButton from "./Components/FormComponents/FormButton";
import FormInputLabel from "./Components/FormComponents/FormInput/FormInputLabel";
import { FormRadioGroup, FormSentRadioSX, FormPendingRadioSX, FormRejectRadioSX, FormActiveRadioSX } from "./Components/FormComponents/FormRadioComponents";
import FormTab from "./Components/FormComponents/FormTab";
import FormTabList from "./Components/FormComponents/FormTabList";
import FormTabPanel from "./Components/FormComponents/FormTabPanel";
import MainFormContainer from "./Components/FormComponents/MainFormContainer";
import TitleBox from "./Components/FormComponents/TitleBox";
import HelpButton from "./Components/Helper/HelperButton/Help";
import { LinkIcon } from "./Components/Icons/Icons";

const EditForm = () => {
    const [value, setValue] = useState("1");
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
    return (
      <Background>
        <MainFormContainer>
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
            <FormTabPanel value="1" sx={{ minHeight: "300px" }}>
              <FormInputLabel>Company Name</FormInputLabel>
              <TextField variant="outlined" fullWidth autoComplete="off" />
              <Box sx={{ marginTop: "1em" }}>
                <FormInputLabel>Link to offer</FormInputLabel>
                <Box sx={{ display: "flex", alignItems: "center", gap: "1em" }}>
                  <TextField
                    variant="outlined"
                    sx={{ width: "80%" }}
                    autoComplete="off"
                  />
                  <LinkIcon sx={{ width: "2em", height: "2em" }} />
                </Box>
              </Box>
            </FormTabPanel>
            <FormTabPanel value="2" sx={{ minHeight: "300px" }}>
              <Box>
                <FormInputLabel>Tags</FormInputLabel>
                <TextField
                  variant="outlined"
                  multiline={true}
                  rows={5}
                  fullWidth
                  autoComplete="off"
                />
              </Box>
            </FormTabPanel>
            <FormTabPanel value="3" sx={{ minHeight: "300px" }}>
              <Box>
                <FormInputLabel>Comment</FormInputLabel>
                <TextField
                  variant="outlined"
                  multiline={true}
                  rows={5}
                  fullWidth
                  autoComplete="off"
                />
                <FormRadioGroup row>
                  <FormControlLabel
                    value="sended"
                    control={<Radio color="sentJob" sx={FormSentRadioSX} />}
                    label="Sent"
                    disableTypography
                  />
                  <FormControlLabel
                    value="opened"
                    control={<Radio color="pendingJob" sx={FormPendingRadioSX} />}
                    label="Opened"
                    disableTypography
                  />
                  <FormControlLabel
                    value="canceled"
                    control={<Radio color="rejectedJob" sx={FormRejectRadioSX} />}
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
            <FormButton variant="text" color="interactiveColor">
              Cancel
            </FormButton>
            <FormButton variant="contained" color="interactiveColor">
              Done
            </FormButton>
          </FormBoxButton>
        </MainFormContainer>
      </Background>
    );
  };
  
  export default EditForm;
  