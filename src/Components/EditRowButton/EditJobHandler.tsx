import EditableRowIcon from './EditableRowIcon';
import { useDispatch } from 'react-redux/es/exports';
import { editSetupID } from '../../State/Reducers/DataManager';
import { popupSetup } from '../../State/Reducers/PopUpManager';

const EditorJobHandler: React.FC<{ id: number }> = ({ id }) => {
  const dispatch = useDispatch()
  const editMode = () => {
    dispatch(editSetupID(id))
    dispatch(popupSetup("editJob"))
  }
  return (
    <EditableRowIcon onClick={editMode} />
  )
}

export default EditorJobHandler