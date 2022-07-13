import { useEffect } from "react";
import { RootState } from "../../State/store";
import { useSelector, useDispatch } from "react-redux";
import {
  updateLocalStorage,
  clonnedSearchData,
  PaginationLogic,
} from "../../State/Reducers/DataManager";
import { TableBody, TableHead, TableRow } from "@mui/material";
import ViewOnlyMode from "./ViewMode/ViewOnlyMode";
import CustomTable from "../TableComponents/CustomTable";
import {
  CustomHeadTableCell,
  CustomHeadTableCellRight,
  CustomHeadTableCellCenter,
} from "../TableComponents/CustomHeadTableCell";
import TableWrapper from "../TableComponents/TableWrapper";
import { CommentIcon, TagIcon, CompanyNameIcon } from "../Icons/Icons";
import { CustomTableCellHeadContainer } from "../TableComponents/TableCellWrapper";
import RadioRowNumber from "../RadioRowNumber/RadioRowNumber";

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
    <TableWrapper>
      <CustomTable>
        <TableHead>
          <TableRow>
            <CustomHeadTableCell>
              <CustomTableCellHeadContainer>
                <CompanyNameIcon color="defaultIcon" /> Company site
              </CustomTableCellHeadContainer>
            </CustomHeadTableCell>
            <CustomHeadTableCellCenter>
              <CustomTableCellHeadContainer
                sx={{ justifyContent: "flex-start" }}
              >
                <TagIcon color="defaultIcon" /> Tags
              </CustomTableCellHeadContainer>
            </CustomHeadTableCellCenter>
            <CustomHeadTableCellCenter>
              <CustomTableCellHeadContainer
                sx={{ justifyContent: "flex-start" }}
              >
                <CommentIcon color="defaultIcon" /> Description
              </CustomTableCellHeadContainer>
            </CustomHeadTableCellCenter>
            <CustomHeadTableCellRight>
              <RadioRowNumber />
            </CustomHeadTableCellRight>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.currentPost.map((object) => (
            <ViewOnlyMode object={object} />
          ))}
        </TableBody>
      </CustomTable>
    </TableWrapper>
  );
};

export default Data;
