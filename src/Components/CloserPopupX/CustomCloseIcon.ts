import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';


const CustomCloseIcon = styled(CloseIcon)(({ theme }) => ({
    cursor: "pointer",
    position: 'absolute',
    width: '1.3em',
    height: '1.3em',
    fontSize: '1.5em',
    top: '0',
    right: '0',
    padding: '6px',
    marginRight:"0.5em",
    color: "black"
}))
export default CustomCloseIcon
