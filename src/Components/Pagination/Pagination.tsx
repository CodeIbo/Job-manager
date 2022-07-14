import { useSelector, useDispatch } from "react-redux/es/exports";
import {
  PaginationLogic,
  PaginationSwitch,
} from "../../State/Reducers/DataManager";
import CustomPagination from "./CustomPagination";
import { RootState } from "../../State/store";
import NavPaginationContainer from "./NavPaginationContainer";

const PaginationFunction = () => {
  const pagination = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch();
  const PaginationHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: number
  ) => {
    dispatch(PaginationSwitch(value));
    dispatch(PaginationLogic());
  };
  return (
    <NavPaginationContainer>
      <CustomPagination
        count={pagination.pageNumber === null ? 1 : pagination.pageNumber}
        variant="outlined"
        onChange={PaginationHandler}
        shape="rounded"
        size="large"
      />
    </NavPaginationContainer>
  );
};
export default PaginationFunction;
