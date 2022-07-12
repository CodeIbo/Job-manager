import { styled } from "@mui/system";
import { Container } from "@mui/system";

export const CustomTableCellHeadContainer = styled(Container)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    gap: "1em",
    fontSize: '1.3em',
    fontFamily:"Averia Serif Libre"
}));

export const CustomIconContainer = styled(Container)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: 'space-around',
    flexDirection: "row",
    gap: "0.5em",
}))

export const CustomSkillTableContainer = styled(Container)(() => ({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "0.5em",
    padding: 0,
    fontWeight:"bold"
}))