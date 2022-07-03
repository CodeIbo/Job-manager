import { useEffect } from "react";
import Counter from "../Counter/Counter";
import PaginationFunction from "../Pagination/Pagination";
import { RootState } from "../State/store";
import { useSelector, useDispatch } from "react-redux";
import {
  updateLocalStorage,
  clonnedSearchData,
  PaginationLogic,
} from "../State/Reducers/DataManager";
import {  TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import EditMode from "./EditMode";
import ViewOnlyMode from "./ViewOnlyMode";
import FormEdit from "../CustomComponents/Forms/formEdit";
import CustomT from "../CustomComponents/Style/MuiCustomComponents/CustomTable";
const Data = () => {
  const data = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateLocalStorage());
    dispatch(clonnedSearchData());
  }, [data.localdata]);

  useEffect(() => {
    dispatch(PaginationLogic());
  }, [data.localdata, data.filtreddata, data.postPerPage]);


  return (
    <main>
      <Counter />
      <FormEdit>
        <CustomT>
          <TableHead>
            <TableRow>
              <TableCell >Status</TableCell>
              <TableCell >Company site</TableCell>
              <TableCell >skills</TableCell>
              <TableCell >links</TableCell>
              <TableCell >Description</TableCell>
              <TableCell style={{width:'10%'}}>Edit/Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.currentPost.map((object) =>
              data.editID === object.id ? (
                <EditMode object={object} />
              ) : (
                <ViewOnlyMode object={object} />
              )
            )}
          </TableBody>
        </CustomT>
      </FormEdit>
    </main>
  )
};

export default Data
