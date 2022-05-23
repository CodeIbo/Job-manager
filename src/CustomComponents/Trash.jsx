import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';

const CustomDeleteIcon = styled(DeleteIcon)({
    cursor: 'pointer',
    color: '#5452AB'

})

const Trash = (props) => {
    const idHandler = () => {
        props.removeItem(props.data.id)
    }

    return (
        <CustomDeleteIcon onClick={idHandler} />
    )
}

export default Trash