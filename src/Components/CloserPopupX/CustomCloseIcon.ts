import { styled } from "@mui/material/styles";
import CloseIcon from '@mui/icons-material/Close';


const CustomCloseIcon = styled(CloseIcon)({
    cursor: "pointer",
    position: 'absolute',
    width: '1.3em',
    height: '1.3em',
    fontSize: '1.3em',
    top: '0',
    right: '0',
    padding: '5px'

})

export default CustomCloseIcon
