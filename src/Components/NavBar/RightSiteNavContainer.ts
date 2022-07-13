import { styled } from "@mui/system";

const RightSiteNavContainer = styled('div')(({ theme }) => ({
    margin: ' 0 10% 0 auto',
    display: 'flex',
    alignItems: 'center',
    gap: '1em',
    [theme.breakpoints.down("lg")]: {
        margin: 0,
        marginTop:"5%"
    }

}))

export default RightSiteNavContainer;


