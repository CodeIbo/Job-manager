import { styled } from "@mui/system";

const NavPaginationContainer = styled('nav')(({ theme }) => ({
    position: "fixed",
    alignItems: "flex-end",
    background: "linear-gradient(180deg, rgba(209,212,222,0.02) 5%, rgba(209,212,222,0.3) 15%, rgba(209,212,222,1) 35%)",
    left: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    height: "10vh",
    padding: "1em",
    width: "100%",
}))
export default NavPaginationContainer