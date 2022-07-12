import { RadioGroup } from "@mui/material";
import theme from "../../Theme/Theme";
import { styled } from "@mui/system";

export const FormRadioGroup = styled(RadioGroup)({
    fontSize: "1.5em",
    fontFamily: "Averia Serif Libre",
    justifyContent: "flex-end",
    gap: "1em",
});

const fontSize = 28;

export const FormSentRadioSX = {
    color: theme.palette.sentJob.main,
    "& .MuiSvgIcon-root": {
        fontSize,
    },
}
export const FormPendingRadioSX = {
    color: theme.palette.pendingJob.main,
    "& .MuiSvgIcon-root": {
        fontSize,
    },
}
export const FormRejectRadioSX = {
    color: theme.palette.rejectedJob.main,
    "& .MuiSvgIcon-root": {
        fontSize,
    },

}
export const FormActiveRadioSX = {
    color: theme.palette.activeJob.main,
    "& .MuiSvgIcon-root": {
        fontSize,
    },
}