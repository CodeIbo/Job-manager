import CustomCloseIcon from './CustomCloseIcon';
import { useDispatch } from 'react-redux'
import { popupSetup } from '../../State/Reducers/PopUpManager';
const CloserPopup = () => {
    const dispatch = useDispatch();
    return (
        <CustomCloseIcon onClick={() => dispatch(popupSetup(''))}/>
    )
}

export default CloserPopup
