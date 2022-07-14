import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/system';

const EditableRowIcon = styled(EditIcon)(({ theme }) => ({
    width: '1.5em',
    height: '1.5em',
    cursor: "pointer",
    color: theme.palette.mainBoldAccent.main,
    '&:hover': {
        background: 'whitesmoke',
        transition: 'background linear 0.5s'
    },
    [theme.breakpoints.down("md")]:{
        width: '1.2em',
    height: '1.2em',
    } 
}));

export default EditableRowIcon;