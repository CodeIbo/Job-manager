import { styled } from "@mui/system"
import { Container } from "@mui/material"

const MainContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    minHeight: "100%",
    justifyContent:"flex-end",
    marginTop:"5%",
    paddingBottom:"10vh",
    gap:"3em"
});
export default MainContainer;