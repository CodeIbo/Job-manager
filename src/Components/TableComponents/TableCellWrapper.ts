import { styled } from "@mui/system";
import { Container } from "@mui/system";

export const CustomTableCellHeadContainer = styled(Container)(({theme}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    gap: "1em",
    fontSize: '1.3em',
    fontFamily: "Averia Serif Libre",
    [theme.breakpoints.down("md")]:{
        padding : " 0.1em 0.5em ",
        fontSize: '1.1em',
    } 
}));

export const CustomIconContainer = styled(Container)(({theme}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: 'space-around',
    flexDirection: "row",
    gap: "0.5em",
    [theme.breakpoints.down("md")]:{
       flexDirection:"column",
       height:"100%"
    } 
    
}))

export const CustomSkillTableContainer = styled(Container)(() => ({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "0.5em",
    padding: 0,
    fontWeight: "bold"
}))