import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/system';

const EditableRowIcon = styled(EditIcon)({
    width: '1.3em',
    height: '1.3em',
    cursor: "pointer",
    color: "#5452AB",
    padding: '10px',
    '&:hover':{
        background:'whitesmoke',
        transition:'background linear 0.5s'
    }
})

export default EditableRowIcon