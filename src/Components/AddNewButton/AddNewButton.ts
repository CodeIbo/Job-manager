import { styled } from "@mui/system";
import { ButtonBase } from "@mui/material";
const AddNew = styled(ButtonBase)(({theme}) => ({
    borderRadius: 23,
    fontSize: 25,
    padding: '0.2em 1.5em',
    backgroundColor: theme.palette.interactiveColor.main,
    color: 'white',
}))

export default AddNew