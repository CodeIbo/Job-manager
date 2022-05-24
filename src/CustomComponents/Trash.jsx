import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import Context from '../Context/DataContext';
import React,{useContext} from 'react';

const CustomDeleteIcon = styled(DeleteIcon)({
    cursor: 'pointer',
    color: '#5452AB'

})

const Trash = (props) => {
    const localContext = useContext(Context)
    const idHandler = () => {
        localContext.setLocalData(localContext.localdata.filter(object => object.id !== props.data.id))
    }
    return (
        <CustomDeleteIcon onClick={idHandler} />
    )
}
export default Trash