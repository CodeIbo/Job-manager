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
    }
}))

export default EditableRowIcon