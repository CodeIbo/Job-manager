import Trash from './Trash';
import { deleteLogic,updateLocalStorage } from '../../State/Reducers/DataManager';
import { useDispatch } from 'react-redux/es/exports';
const DeleteJobHandler:React.FC<{id:number}> = ({id}) => {
    const dispatch = useDispatch()
    const deleteHandler = () => {
        dispatch(deleteLogic(id))
        dispatch(updateLocalStorage())
    }
  return (
    <Trash onClick={deleteHandler}/>
  )
};
export default DeleteJobHandler;
