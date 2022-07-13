import { styled } from "@mui/system";
import { AppBar } from "@mui/material";
const NavMainTopContainer: typeof AppBar= styled(AppBar)(({theme}) => ({
    position:"sticky",
    display:'flex',
    width: "100%",
    flexDirection:'row',
    padding: '1em',
    alignItems:'center',
    zIndex:1,
    [theme.breakpoints.down("lg")]: {
        justifyContent:'space-between',
    },
    [theme.breakpoints.down("sm")]: {
        flexDirection:'column',
    }

}));

export default NavMainTopContainer



