import styled from "@emotion/styled";
import { AppBar } from "@mui/material";
const NavMainTopContainer: typeof AppBar= styled(AppBar)(() => ({
    position:"sticky",
    display:'flex',
    width: "100%",
    flexDirection:'row',
    padding: '1em',
    alignItems:'center',
    zIndex:1

}));

export default NavMainTopContainer



