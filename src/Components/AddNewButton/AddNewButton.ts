import { styled } from "@mui/system";
import { ButtonBase } from "@mui/material";
const AddNew = styled(ButtonBase)(({theme}) => ({
    borderRadius: 23,
    fontSize: 25,
    padding: '0.2em 1.5em',
    backgroundColor: theme.palette.interactiveColor.main,
    color: 'white',
    [theme.breakpoints.down("md")]:{
        padding : " 0.1em 0.5em ",
        fontSize: 23
    } 
}))

export default AddNew