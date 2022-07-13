import { RadioGroup } from "@mui/material";
import { styled } from "@mui/system";

const CustomRadioGroupRowNumber = styled(RadioGroup)(({theme}) =>({
    borderRadius: 13,
    backgroundColor: theme.palette.interactiveColor.main,
    fontSize: "1.5em",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    gap:"0.2em",
    padding : " 0.1em 1em ",
    marginLeft: 'auto',
    width: "fit-content",
    [theme.breakpoints.down("md")]:{
        padding : " 0.1em 0.3em ",
    } 
}));

export default CustomRadioGroupRowNumber;
