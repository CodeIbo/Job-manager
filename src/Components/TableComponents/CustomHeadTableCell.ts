import { TableCell } from "@mui/material";
import { styled } from "@mui/system";

export const CustomHeadTableCell = styled(TableCell)(() => ({
    border: "none",
    fontSize: "1.1em",
}));

export const CustomHeadTableCellRight = styled(CustomHeadTableCell)(() => ({
    paddingRight: 0
}));

export const CustomHeadTableCellCenter = styled(CustomHeadTableCell)(() => ({
    paddingLeft: 0
}));

