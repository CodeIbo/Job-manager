import { useEffect } from "react";
import Counter from "../Components/Counter/Counter";
import { RootState } from "../State/store";
import { useSelector, useDispatch } from "react-redux";
import {
  updateLocalStorage,
  clonnedSearchData,
  PaginationLogic,
} from "../State/Reducers/DataManager";
import {  TableBody, TableHead, TableRow } from "@mui/material";
import EditMode from "./EditMode";
import ViewOnlyMode from "./ViewOnlyMode";
import FormEdit from "../CustomComponents/Forms/formEdit";
import CustomT from "../CustomComponents/Style/MuiCustomComponents/CustomTable";
import CustomTableCell from "../CustomComponents/Style/MuiCustomComponents/CustomTableCell";
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
    <main style={{height:'500px'}}> 
      <Counter />
      <FormEdit>
        <CustomT >
          <TableHead>
            <TableRow>
              <CustomTableCell >Status</CustomTableCell>
              <CustomTableCell >Company site</CustomTableCell>
              <CustomTableCell >Skills</CustomTableCell>
              <CustomTableCell >Links</CustomTableCell>
              <CustomTableCell >Description</CustomTableCell>
              <CustomTableCell style={{width:'10%'}}>Edit/Delete</CustomTableCell>
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
