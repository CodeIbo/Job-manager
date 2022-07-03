import HelpButton from './Help'
import { useDispatch } from 'react-redux'
import { popupSetup } from '../../State/Reducers/PopUpManager'


const HelperHandler = () => {
    const dispatch = useDispatch();
    return (
        <HelpButton onClick={() => dispatch(popupSetup('helper'))} />
    )
}

export default HelperHandler