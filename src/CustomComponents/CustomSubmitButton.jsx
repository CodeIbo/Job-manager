import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';


const CustomButtonSubmit = styled(Button)({
    backgroundColor: '#CCD4EB',
    color: '#5452AB',
    width: '50%',
    maxWidth:'200px',
    '&:hover': {
        backgroundColor: '#5452AB',
        color: '#CCD4EB',
        border: '0.2px solid #ffff',
    }
});

export default CustomButtonSubmit