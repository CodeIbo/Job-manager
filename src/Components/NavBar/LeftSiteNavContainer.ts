import { styled } from "@mui/system";

const LeftSiteNavContainer = styled('div')(({ theme }) => ({
    marginLeft: '2%',
    display: 'flex',
    alignItems: "center",
    gap: '2em',
    width: '60%',
    [theme.breakpoints.down("sm")]: {
        flexDirection: 'column',
        width: '100%',
        alignItems: "flex-start",
        gap: "0.2em"
    }

}));
export default LeftSiteNavContainer;


