import { styled } from "@mui/system";
import { Container } from "@mui/system";

export const CustomTableCellHeadContainer = styled(Container)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    gap: "1em",
    fontSize: '1.3em',
}));


export const CustomIconContainer = styled(Container)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: 'space-around',
    flexDirection: "row",
    gap: "0.5em",
}))