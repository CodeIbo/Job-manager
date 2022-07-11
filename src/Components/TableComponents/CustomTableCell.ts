import { TableCell } from "@mui/material";
import { styled } from "@mui/system";

export const CustomTableCell = styled(TableCell)(({ theme }) => ({
   textAlign: 'center',
   border: "none",
   fontSize: "1.1em",

}));
const RolledTableCell = styled(CustomTableCell)(({ theme }) => ({
   backgroundColor: theme.palette.standardBox.main
}));
const FulledTableCell = styled(CustomTableCell)(({ theme }) => ({
   backgroundColor: theme.palette.contentBox.main,
   color: theme.palette.contentBox.contrastText
}));

export const SkillTableCell = styled(RolledTableCell)(({ }) => ({ textAlign: 'start' }));
export const LeftCustomTableCell = styled(RolledTableCell)(() => ({
   borderRadius: "10px 0 0 10px",
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
}));

export const LeftFullTableCell = styled(FulledTableCell)({
   borderRadius: "10px 0 0 10px",
});
export const DescriptionFullTableCell = styled(FulledTableCell)(({ theme }) => ({ color: theme.palette.mainBoldAccent.main, textAlign: "start", }));
export const SkillTabFullCell = styled(FulledTableCell)({
   display:'flex',
   flexWrap: 'wrap',
   gap: "0.5em",
   minHeight:"100%"
})
export const RightFullTableCell = styled(FulledTableCell)({
   borderRadius: "0 1em 1em 0",
})

