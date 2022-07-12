import { TableCell } from "@mui/material";
import { styled } from "@mui/system";

export const CustomTableCell = styled(TableCell)(({ theme }) => ({
   border: "none",
   fontSize: "1.1em",

}));
export const RolledTableCell = styled(CustomTableCell)(({ theme }) => ({
   backgroundColor: theme.palette.standardBox.main
}));
export const FulledTableCell = styled(CustomTableCell)(({ theme }) => ({
   backgroundColor: theme.palette.contentBox.main,
   color: theme.palette.contentBox.contrastText
}));

export const LeftCustomTableCell = styled(RolledTableCell)(() => ({
   borderRadius: "10px 0 0 10px",
   overflow: "hidden",
   textAlign: "start",
   textOverflow: "ellipsis",
   whiteSpace: "nowrap",
}));
export const LeftCustomTableCellContent = styled(LeftCustomTableCell)(({ theme }) => ({
   fontFamily: "Averia Serif Libre",
   fontWeight: "bold",
   color: theme.palette.mainBoldAccent.main,
   fontSize: "2em"
}))
export const RightCustomTableCell = styled(RolledTableCell)(() => ({
   borderRadius: "0 1em 1em 0",
}));
export const DescriptionTableCell = styled(RolledTableCell)(({ theme }) => ({
   color: theme.palette.mainBoldAccent.main,
   overflow: "hidden",
   textAlign: "start",
   textOverflow: "ellipsis",
   width: "80%",
   whiteSpace: "nowrap",
   fontWeight: "bold"
}));

export const LeftFullTableCell = styled(FulledTableCell)(({ theme }) => ({
   borderRadius: "10px 0 0 10px",
   fontFamily: "Averia Serif Libre",
   fontWeight: "bold",
   color: theme.palette.mainBoldAccent.main,
   fontSize: "2em",
   textAlign: "center"
}));
export const DescriptionFullTableCell = styled(FulledTableCell)(({ theme }) => ({ color: theme.palette.mainBoldAccent.main, textAlign: "start", fontWeight: "bold" }));

export const RightFullTableCell = styled(FulledTableCell)({
   borderRadius: "0 1em 1em 0",
})

